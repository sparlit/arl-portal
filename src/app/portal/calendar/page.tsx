"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, Plus, Clock, Tag } from 'lucide-react'
import Link from 'next/link'

export default function CalendarPortal() {
  return (
    <main className="container mx-auto p-8">
      <header className="flex items-center gap-4 mb-8">
        <Link href="/portal"><Button variant="outline" size="icon"><ArrowLeft className="h-4 w-4" /></Button></Link>
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Event & Promotion Calendar</h1>
          <p className="text-slate-500">Marketing Campaigns, Holidays & Internal Timelines</p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 shadow-xl border-t-4 border-t-rose-600 h-96">
          <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5 text-rose-600" /> May 2024</CardTitle></CardHeader>
          <CardContent>
             <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-slate-400 mb-4">
               <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
             </div>
             <div className="grid grid-cols-7 gap-2">
                {Array.from({length: 31}).map((_, i) => (
                  <div key={i} className="h-10 border rounded-lg flex items-center justify-center text-sm font-bold text-slate-700 hover:bg-rose-50 transition-colors cursor-pointer">
                    {i+1}
                  </div>
                ))}
             </div>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card><CardHeader><CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400">Agenda</CardTitle></CardHeader>
          <CardContent className="flex flex-col gap-4">
             <div className="flex items-start gap-3 border-l-2 border-l-rose-500 pl-3">
               <div><p className="text-xs font-bold text-slate-400">10:00 AM</p><p className="font-bold">Eid Promo Launch</p></div>
             </div>
             <Button className="w-full gap-2 bg-slate-900 text-white"><Plus className="h-4 w-4" /> New Event</Button>
          </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
