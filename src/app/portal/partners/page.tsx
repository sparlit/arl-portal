"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Handshake, Store, Zap, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function PartnersPortal() {
  return (
    <main className="container mx-auto p-8">
      <header className="flex items-center gap-4 mb-8">
        <Link href="/portal"><Button variant="outline" size="icon"><ArrowLeft className="h-4 w-4" /></Button></Link>
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Partner Ecosystem</h1>
          <p className="text-slate-500">Marketplace, B2B Integrations & External Vendors</p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 shadow-xl border-t-4 border-t-teal-600">
          <CardHeader><CardTitle className="flex items-center gap-2"><Handshake className="h-5 w-5 text-teal-600" /> Active Partners</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-xl bg-slate-50"><strong>Snoonu</strong><p className="text-xs text-slate-400">Delivery Integration</p></div>
              <div className="p-4 border rounded-xl bg-slate-50"><strong>Talabat</strong><p className="text-xs text-slate-400">Delivery Integration</p></div>
              <div className="p-4 border rounded-xl bg-slate-50"><strong>Qatar Airways</strong><p className="text-xs text-slate-400">Corporate Account</p></div>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card><CardHeader><CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400">Management</CardTitle></CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button variant="outline" className="justify-start gap-2"><Store className="h-4 w-4" /> Marketplace</Button>
            <Button variant="outline" className="justify-start gap-2"><Zap className="h-4 w-4" /> API Keys</Button>
            <Button variant="outline" className="justify-start gap-2"><BarChart3 className="h-4 w-4" /> Revenue Share</Button>
          </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
