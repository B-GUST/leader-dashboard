import React, {useState} from 'react'
import {LogIn} from 'lucide-react'

export default function Landing({onLogin}){
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    // hardcoded creds
    if(user === 'admin' && pass === 'password123'){
      onLogin({name: 'Benito (Admin)', method: 'local'})
    } else {
      setError('Usuario o contraseña incorrectos (usa admin / password123)')
    }
  }

  function handleGoogle(){
    // Simulate Google sign-in
    onLogin({name: 'Google User', method: 'google'})
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 landing-bg">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card-dark p-8 rounded-2xl">
          <h1 className="text-3xl font-serif font-bold mb-3">Strategic Operations Dashboard</h1>
          <p className="text-slate-600 mb-4">Transformando datos dispersos en decisiones ejecutivas. Una vista ejecutiva para el COO con métricas críticas, gobernanza de portafolio y alertas predictivas.</p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Sobre el autor</h3>
            <div className="flex items-start gap-3">
              <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 font-bold">BA</div>
              <div>
                <div className="font-medium">Benito August</div>
                <div className="text-sm text-slate-500">Strategic Tech Leader · Investigación en Ingeniería Organizacional</div>
                <a className="text-sm text-indigo-600 mt-1 inline-block" href="https://www.linkedin.com/in/benitoaugust/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-slate-500">Proyecto PoC: Leader Dashboard — Gobernanza, Team Pulse y Predicción de riesgo de burnout.</div>
        </div>

        <div className="glass-card-dark p-8 rounded-2xl flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-3">Iniciar sesión</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="text-sm text-slate-600">Usuario</label>
              <input value={user} onChange={e=>setUser(e.target.value)} className="w-full mt-1 p-2 border rounded-md bg-white/60" placeholder="admin" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Contraseña</label>
              <input type="password" value={pass} onChange={e=>setPass(e.target.value)} className="w-full mt-1 p-2 border rounded-md bg-white/60" placeholder="password123" />
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}

            <div className="flex gap-2">
              <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md">
                <LogIn size={16} /> Iniciar sesión
              </button>
              <button type="button" onClick={handleGoogle} className="flex items-center gap-2 px-4 py-2 border rounded-md">
                <span className="w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">G</span> Iniciar con Google
              </button>
            </div>

            <div className="mt-4 text-xs text-slate-500">Credenciales demo: <strong>admin</strong> / <strong>password123</strong></div>
          </form>

          <div className="mt-6 text-sm text-slate-500">¿No tienes cuenta? Contáctate con el autor para acceso demo.</div>
        </div>
      </div>
    </div>
  )
}
