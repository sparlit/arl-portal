"use client"

import React from 'react'
import Link from 'next/link'
import { 
  Cpu, 
  Waves, 
  Users, 
  Hammer, 
  Box, 
  Truck, 
  Factory, 
  Settings,
  ShieldAlert,
  Globe,
  Accessibility,
  Handshake,
  Bot,
  Calendar,
  Bell,
  LayoutDashboard,
  Search
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { useI18n } from '@/lib/i18n/context'

const ALL_PORTALS = [
  { id: 'it', name: 'IT Operations', icon: Cpu, color: 'bg-slate-900', desc: 'Infrastructure & Asset Management' },
  { id: 'laundry', name: 'Laundry Management', icon: Waves, color: 'bg-blue-600', desc: 'Order Lifecycle & Tracking' },
  { id: 'crm', name: 'CRM & Sales', icon: Users, color: 'bg-indigo-600', desc: 'Client Engagement & Leads' },
  { id: 'maintenance', name: 'Maintenance', icon: Hammer, color: 'bg-slate-800', desc: 'Reliability & Work Orders' },
  { id: 'stores', name: 'Stores & Purchase', icon: Box, color: 'bg-orange-600', desc: 'Inventory & Supply Chain' },
  { id: 'transport', name: 'Transport', icon: Truck, color: 'bg-emerald-600', desc: 'Fleet & Driver Dispatch' },
  { id: 'production', name: 'Production', icon: Factory, color: 'bg-slate-950', desc: 'Industrial Quality Control' },
  { id: 'admin', name: 'System Admin', icon: Settings, color: 'bg-red-600', desc: 'User & Portal Governance' },
  { id: 'legal', name: 'Legal & Compliance', icon: ShieldAlert, color: 'bg-slate-700', desc: 'Contracts & Regulatory Affairs' },
  { id: 'i18n', name: 'Internationalization', icon: Globe, color: 'bg-blue-500', desc: 'Localization & Translation' },
  { id: 'accessibility', name: 'Accessibility', icon: Accessibility, color: 'bg-purple-600', desc: 'Inclusive Design & Audits' },
  { id: 'partners', name: 'Partner Ecosystem', icon: Handshake, color: 'bg-teal-600', desc: 'Marketplace & Integrations' },
  { id: 'ai', name: 'AI Chatbot', icon: Bot, color: 'bg-cyan-600', desc: 'Automated Support & Assistants' },
  { id: 'calendar', name: 'Event Calendar', icon: Calendar, color: 'bg-rose-600', desc: 'Promotions & Internal Events' },
]

export default function OperationsHub() {
  const { language } = useI18n()
  const [searchQuery, setSearchQuery] = React.useState('')

  const filteredPortals = ALL_PORTALS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.desc.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="space-y-1">
            <h1 className="text-3xl font-black tracking-tight flex items-center gap-3">
              <LayoutDashboard className="h-8 w-8 text-blue-600" />
              Internal Operations Hub
            </h1>
            <p className="text-slate-500 font-medium">Welcome back, System Administrator</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <Input 
                placeholder="Search departments..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" className="relative rounded-full">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border-2 border-white" />
            </Button>
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 border border-blue-200">
              AD
            </div>
          </div>
        </header>

        {/* Quick Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard title="Active Orders" value="1,284" change="+12%" color="text-blue-600" />
          <MetricCard title="System Uptime" value="99.98%" change="Stable" color="text-emerald-600" />
          <MetricCard title="Fleet Status" value="42/45" change="Active" color="text-orange-600" />
          <MetricCard title="SLA Compliance" value="94.2%" change="-1.5%" color="text-indigo-600" />
        </div>

        {/* Department Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight">Available Department Portals</h2>
            <Badge variant="secondary" className="font-bold">{filteredPortals.length} Modules</Badge>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPortals.map((portal) => (
              <Link key={portal.id} href={`/portal/${portal.id}`}>
                <Card className="h-full hover:border-blue-500 transition-all cursor-pointer group shadow-sm hover:shadow-md">
                  <CardHeader className="space-y-4">
                    <div className={`w-12 h-12 ${portal.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <portal.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold">{portal.name}</CardTitle>
                      <CardDescription className="text-sm line-clamp-1">{portal.desc}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-xs font-bold text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Enter Portal &rarr;
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <footer className="pt-8 text-center border-t border-slate-200 dark:border-slate-800">
          <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
            Al Rayes Laundry &copy; 2024 | Industrial Stack V1.4
          </p>
        </footer>
      </div>
    </div>
  )
}

function MetricCard({ title, value, change, color }: { title: string, value: string, change: string, color: string }) {
  return (
    <Card className="border-none shadow-sm">
      <CardContent className="p-6">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{title}</p>
        <div className="flex items-baseline justify-between mt-2">
          <h3 className={`text-2xl font-black ${color}`}>{value}</h3>
          <span className="text-xs font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600">{change}</span>
        </div>
      </CardContent>
    </Card>
  )
}
