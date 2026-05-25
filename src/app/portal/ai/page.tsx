"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Bot, MessageSquare, Brain, Settings2 } from 'lucide-react'
import Link from 'next/link'

export default function AIPortal() {
  return (
    <main className="container mx-auto p-8">
      <header className="flex items-center gap-4 mb-8">
        <Link href="/portal"><Button variant="outline" size="icon"><ArrowLeft className="h-4 w-4" /></Button></Link>
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">AI Chatbot Management</h1>
          <p className="text-slate-500">Automated Support, NLP Training & Assistant Config</p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 shadow-xl border-t-4 border-t-cyan-600">
          <CardHeader><CardTitle className="flex items-center gap-2"><Bot className="h-5 w-5 text-cyan-600" /> Active Agents</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2"><span>Customer Support Bot</span><span className="text-green-600 font-bold italic">Online</span></div>
              <div className="flex justify-between items-center"><span>Internal Ops Assistant</span><span className="text-green-600 font-bold italic">Online</span></div>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card><CardHeader><CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-400">Engineering</CardTitle></CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button variant="outline" className="justify-start gap-2"><MessageSquare className="h-4 w-4" /> Conversation Logs</Button>
            <Button variant="outline" className="justify-start gap-2"><Brain className="h-4 w-4" /> Training Data</Button>
            <Button variant="outline" className="justify-start gap-2"><Settings2 className="h-4 w-4" /> Model Config</Button>
          </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
