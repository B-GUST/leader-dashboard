import React from 'react'

export default function Sidebar(){
  return (
    <aside className="w-20 sm:w-72 bg-slate-900 text-slate-100 min-h-screen p-4 flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-slate-700 rounded-md flex items-center justify-center font-bold">CO</div>
        <div className="hidden sm:flex flex-col">
          <span className="font-semibold">Chief Ops</span>
          <span className="text-xs text-slate-400">Strategic View</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto sidebar-scroll">
        <ul className="space-y-1">
          <li className="text-sm px-3 py-2 rounded-lg bg-slate-800">Dashboard</li>
          <li className="text-sm px-3 py-2 rounded-lg hover:bg-slate-800">Projects</li>
          <li className="text-sm px-3 py-2 rounded-lg hover:bg-slate-800">Teams</li>
          <li className="text-sm px-3 py-2 rounded-lg hover:bg-slate-800">Reports</li>
        </ul>
      </nav>

      <div className="mt-4 text-xs text-slate-400">v0.1 • Private</div>
    </aside>
  )
}
