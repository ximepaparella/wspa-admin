"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link.js"
import users from "../../../data/users.js"

export default function ListUsers() {
  return (
    <section className="px-4 rounded border-1 border-solid border-white">
      
    <h1 className="text-3xl pt-2 pb-2">Usuarios</h1>
    <h3 className="text-sm pb-8">Visualizá y editá los usuarios de la plataforma</h3>
    <hr className="py-4 border-gray-700 " />
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>NOMBRE DE USUARIO</TableHead>
          <TableHead>EMAIL</TableHead>
          <TableHead>ROL</TableHead>
          <TableHead>ACCIONES</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.rol}
            </TableCell>
            <TableCell>
              <Link href="/" className="bg-white rounded text-black mx-2 py-2 px-4">Editar</Link>
              <Link href="/" className="bg-rose-700 rounded text-white mx-2 py-2 px-4">Eliminar</Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </section>
  )
}
