import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
import { useState } from 'react'

export default function App(){
  const [user, setUser] = useState(null)

  function handleLogin(u){
    setUser(u)
  }

  function handleLogout(){
    setUser(null)
  }

  if(!user){
    return <Landing onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen flex text-slate-800 glass-bg">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Strategic Operations Dashboard</h1>
          <div className="flex items-center gap-3">
            <div className="text-sm text-slate-600">{user.name}</div>
            <button onClick={handleLogout} className="text-sm px-3 py-1 border rounded-md">Cerrar sesión</button>
          </div>
        </div>
        <Dashboard />
      </main>
    </div>
  )
}
