"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Globe, Languages, Type, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function I18nPortal() {
  return (
    <main className="container mx-auto p-8">
      <header className="flex items-center gap-4 mb-8">
        <Link href="/portal"><Button variant="outline" size="icon"><ArrowLeft className="h-4 w-4" /></Button></Link>
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Internationalization</h1>
          <p className="text-slate-500">Localization, Translation & Regional Format Management</p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 shadow-xl border-t-4 border-t-blue-500">
          <CardHeader><CardTitle className="flex items-center gap-2"><Languages className="h-5 w-5 text-blue-500" /> Language Matrix</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2"><span>English (EN-US)</span><span className="text-green-600 font-bold">100% Translated</span></div>
              <div className="flex justify-between items-center border-b pb-2"><span>Arabic (AR-QA)</span><span className="text-green-600 font-bold">100% Translated</span></div>
              <div className="flex justify-between items-center"><span>French (FR-FR)</span><span className="text-slate-400 font-bold">In Progress (12%)</span></div>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card><CardHeader><CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400">System Controls</CardTitle></CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button variant="outline" className="justify-start gap-2"><Type className="h-4 w-4" /> Edit Strings</Button>
            <Button variant="outline" className="justify-start gap-2"><RefreshCw className="h-4 w-4" /> Sync Dictionary</Button>
          </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
