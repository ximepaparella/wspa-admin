import Link from "next/link"

export function NavMenu() {
    return (
    <section className="flex flex-col w-full">
    <h1 className="py-4">Wspa Admin</h1>
    <hr />
      <ul className="py-4">
        <li>
            <Link href="/">Dashboard</Link></li>
        <li><Link href="/">Ver tratamientos</Link></li>
        <li><Link href="/">Añadir tratamiento</Link></li>
      </ul>
      <hr />
      <ul className="py-4">
        <li><Link href="/">Ver usuarios</Link></li>
        <li><Link href="/">Añadir usuarios</Link></li>
      </ul>
      <hr />
      <ul className="py-4">
        <li><Link href="/">Configuraciones</Link></li>
        <li><Link href="/">Cerrar sesión</Link></li>
      </ul>

      </section>
    )
  }