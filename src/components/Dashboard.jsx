import React from 'react'
import { ArrowUpRight, BarChart2, Users, AlertCircle, Brain } from 'lucide-react'

function KpiCard({title, value, icon, color, extra}){
  return (
    <div className="flex-1 glass-card rounded-xl p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm text-slate-600">{title}</div>
          <div className="mt-2 text-2xl font-semibold">{value}</div>
          {extra && <div className="mt-2 text-xs text-slate-600">{extra}</div>}
        </div>
        <div className={`p-2 rounded-md bg-${color}-50 text-${color}-600`}>{icon}</div>
      </div>
    </div>
  )
}

function ProgressBar({value}){
  return (
    <div className="w-40 h-3 bg-slate-100 rounded-full overflow-hidden mt-2">
      <div className="h-full bg-amber-400" style={{width: value}} />
    </div>
  )
}

function Avatar({name}){
  const initials = name.split(' ').map(n=>n[0]).slice(0,2).join('')
  return (
    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm text-slate-700">{initials}</div>
  )
}

export default function Dashboard(){
  const projects = [
    {name:'Payment Module', lead:'Alicia Kent', phase:'Development', deadline:'2025-12-12', rag:'Amber'},
    {name:'Onboarding Revamp', lead:'Marco Diaz', phase:'QA', deadline:'2025-11-30', rag:'Green'},
    {name:'Analytics Pipeline', lead:'Priya Singh', phase:'Development', deadline:'2026-01-15', rag:'Red'},
    {name:'Mobile Sync', lead:'L. Rossi', phase:'Deployment', deadline:'2025-12-01', rag:'Green'},
  ]

  const team = [
    {name:'Alicia', load:72},
    {name:'Marco', load:54},
    {name:'Priya', load:96},
    {name:'Rossi', load:40},
    {name:'Karl', load:65},
  ]

  return (
    <div className="space-y-6">
      {/* Top Row: Vital Signs */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Project Health Index" value={<span>85% <span className="text-sm text-green-600"><ArrowUpRight className="inline-block" size={14} /></span></span>} icon={<ArrowUpRight />} color="green" extra={null} />
        <KpiCard title="Budget Burn-Rate" value={<span>$12k / $50k</span>} icon={<BarChart2 />} color="amber" extra={<ProgressBar value={'24%'} />} />
        <KpiCard title="Team Velocity" value={<span>42 Story Points</span>} icon={<Users />} color="sky" />
        <KpiCard title="Critical Blockers" value={<span className="text-3xl font-bold text-red-600">3</span>} icon={<AlertCircle />} color="red" extra={<div className="mt-2 text-xs text-red-500">High priority</div>} />
      </section>

      {/* Middle: Portfolio Governance Grid */}
      <section className="glass-card rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-3">Portfolio Governance Grid</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-slate-500 border-b">
                <th className="py-2 text-left">Project Name</th>
                <th className="py-2 text-left">Tech Lead</th>
                <th className="py-2 text-left">Phase</th>
                <th className="py-2 text-left">Deadline</th>
                <th className="py-2 text-left">RAG Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, idx)=> (
                <tr key={idx} className="odd:bg-slate-50">
                  <td className="py-3 font-medium">{p.name}</td>
                  <td className="py-3 flex items-center gap-2"><Avatar name={p.lead} /> <span>{p.lead}</span></td>
                  <td className="py-3">{p.phase}</td>
                  <td className="py-3">{p.deadline}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-white text-xs ${p.rag==='Red' ? 'bg-red-600' : p.rag==='Amber' ? 'bg-amber-500' : 'bg-green-600'}`}>{p.rag}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom: Heatmap and AI Insight */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="glass-card rounded-xl p-4">
          <h3 className="font-semibold mb-3">Team Capacity Heatmap</h3>
          <div className="space-y-3">
            {team.map((m, i)=> (
              <div key={i} className="flex items-center gap-4">
                <div className="w-24 text-sm text-slate-600">{m.name}</div>
                <div className="flex-1 h-6 bg-slate-100 rounded-md overflow-hidden">
                  <div className={`h-full ${m.load>90 ? 'bg-red-600' : 'bg-sky-600'}`} style={{width:`${m.load}%`}} />
                </div>
                <div className="w-12 text-right text-sm text-slate-600">{m.load}%</div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-xs text-slate-500">Highlight: values &gt;90% indicate risk of burnout.</div>
        </div>

        <div className="glass-card rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="p-3 bg-white/60 rounded-lg"><Brain className="text-indigo-600" /></div>
            <div>
              <h4 className="font-semibold">AI Strategic Insight</h4>
              <p className="mt-2 text-sm">⚠️ Predictive Alert: Backend velocity has dropped 15% in the last sprint. Potential delay projected for the 'Payment Module' delivery by +3 days.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
