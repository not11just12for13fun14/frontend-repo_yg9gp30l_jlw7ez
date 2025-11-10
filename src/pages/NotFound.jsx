import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="min-h-[60vh] grid place-items-center text-center px-4">
      <div>
        <h1 className="text-6xl font-black tracking-tight">404</h1>
        <p className="text-white/70 mt-2">The page you are looking for doesn’t exist.</p>
        <Link to="/" className="inline-block mt-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">Go Home</Link>
      </div>
    </div>
  )
}
