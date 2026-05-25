"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Accessibility, Eye, Ear, Keyboard } from 'lucide-react'
import Link from 'next/link'

export default function AccessibilityPortal() {
  return (
    <main className="container mx-auto p-8">
      <header className="flex items-center gap-4 mb-8">
        <Link href="/portal"><Button variant="outline" size="icon"><ArrowLeft className="h-4 w-4" /></Button></Link>
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Accessibility</h1>
          <p className="text-slate-500">Inclusive Design, WCAG Compliance & User Audits</p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 shadow-xl border-t-4 border-t-purple-600">
          <CardHeader><CardTitle className="flex items-center gap-2"><Accessibility className="h-5 w-5 text-purple-600" /> Compliance Dashboard</CardTitle></CardHeader>
          <CardContent><p className="text-slate-500">System is 98% compliant with WCAG 2.1 AA standards.</p></CardContent>
        </Card>
        <div className="space-y-6">
          <Card><CardHeader><CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400">Assistive Modes</CardTitle></CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button variant="outline" className="justify-start gap-2"><Eye className="h-4 w-4" /> High Contrast</Button>
            <Button variant="outline" className="justify-start gap-2"><Ear className="h-4 w-4" /> Screen Reader</Button>
            <Button variant="outline" className="justify-start gap-2"><Keyboard className="h-4 w-4" /> Keyboard Navigation</Button>
          </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
