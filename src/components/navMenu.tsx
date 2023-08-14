import Link from "next/link"

export function NavMenu() {
    return (
    <section className="flex flex-col w-full">
    <h1 className="py-4">Wspa Admin</h1>
    <hr />
      <ul className="py-4">
        <li>
            <Link href="/dashboard/">Dashboard</Link></li>
        <li><Link href="/dashboard/treatments/">Ver tratamientos</Link></li>
        <li><Link href="/dashboard/treatments/add/">Añadir tratamiento</Link></li>
      </ul>
      <hr />
      <ul className="py-4">
        <li><Link href="/dashboard/users/">Ver usuarios</Link></li>
        <li><Link href="/dashboard/users/add">Añadir usuarios</Link></li>
      </ul>
      <hr />
      <ul className="py-4">
        <li><Link href="/dashboard/settings/">Configuraciones</Link></li>
        <li><Link href="/">Cerrar sesión</Link></li>
      </ul>

      </section>
    )
  }