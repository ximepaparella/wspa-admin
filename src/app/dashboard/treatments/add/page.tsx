"use client"
import {NavMenu} from '@/components/navMenu' 

export default function AddTreatment() {
  return (
    <main className="flex min-h-screen flex-row p-2 w-full">
      <div className="flex-none w-2/12 h-14 p-4">
        <NavMenu/>
      </div>
      <div className="flex-initial w-10/12 p-4 border-slate-100">
       Añadir tratamiento
      </div>
    </main>
  )
}
