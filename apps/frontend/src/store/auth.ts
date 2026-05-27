import { defineStore } from 'pinia';

interface User {
  id: string;
  username: string;
  department: string;
  role: string;
  permissions: string[];
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem('token') || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    hasPermission: (state) => (permission: string) => {
      if (!state.user) return false;
      if (state.user.role === 'admin' || state.user.role === 'superadmin') return true;
      return state.user.permissions.includes(permission);
    },
  },
  actions: {
    setUser(user: User) {
      this.user = user;
    },
    setToken(token: string) {
      this.token = token;
      localStorage.setItem('token', token);
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
    },
  },
});
