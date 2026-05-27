"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Lock, User, ShieldCheck } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/core/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, portal: 'ai' })
    })
    if (res.ok) router.push('/portal/ai')
    else setError('Access Denied')
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-slate-900 border-slate-800 text-white">
        <CardHeader className="text-center">
          <ShieldCheck className="mx-auto h-12 w-12 text-blue-500 mb-4" />
          <CardTitle className="text-2xl font-black uppercase">ai Portal</CardTitle>
          <CardDescription className="text-slate-500">Restricted Access Module</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="bg-slate-800 border-slate-700" />
            <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="bg-slate-800 border-slate-700" />
            {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 font-bold">Authorize</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
