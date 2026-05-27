"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ShieldAlert, FileText, Gavel, Scale } from 'lucide-react'
import Link from 'next/link'

export default function LegalPortal() {
  return (
    <main className="container mx-auto p-8">
      <header className="flex items-center gap-4 mb-8">
        <Link href="/portal"><Button variant="outline" size="icon"><ArrowLeft className="h-4 w-4" /></Button></Link>
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Legal & Compliance</h1>
          <p className="text-slate-500">Contracts, Regulatory Affairs & Corporate Governance</p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 shadow-xl border-t-4 border-t-slate-700">
          <CardHeader><CardTitle className="flex items-center gap-2"><Scale className="h-5 w-5 text-slate-700" /> Active Matters</CardTitle></CardHeader>
          <CardContent><p className="text-slate-500">No active litigation or regulatory breaches reported.</p></CardContent>
        </Card>
        <div className="space-y-6">
          <Card><CardHeader><CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400">Quick Actions</CardTitle></CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button variant="outline" className="justify-start gap-2"><FileText className="h-4 w-4" /> Review Contract</Button>
            <Button variant="outline" className="justify-start gap-2"><Gavel className="h-4 w-4" /> Compliance Audit</Button>
            <Button variant="outline" className="justify-start gap-2"><ShieldAlert className="h-4 w-4" /> Risk Assessment</Button>
          </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
