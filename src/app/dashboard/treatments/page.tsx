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
import treatments from "../../../data/treatments.js"


export default function  ListTreatments() {
  return (
      <section className="px-4 rounded border-1 border-solid border-white">
      
      <h1 className="text-3xl pt-2 pb-2">Tratamientos</h1>
      <h3 className="text-sm pb-8">Visualizá y editá los tratamientos</h3>
      <hr className="py-4 border-gray-700 " />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>TRATAMIENTO</TableHead>
            <TableHead>PRECIO</TableHead>
            <TableHead>LINK GIFT VOUCHER</TableHead>
            <TableHead>ACCIONES</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {treatments.map((treatment) => (
            <TableRow key={treatment.id}>
              <TableCell className="font-medium">{treatment.name}</TableCell>
              <TableCell>{treatment.price}</TableCell>
              <TableCell>
                <a
                  href={`http://wyndhamnordelta.giftsandvouchers.com/?seccion=detalles&id=${treatment.giftLinkId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >http://wyndhamnordelta.giftsandvouchers.com/?seccion=detalles&id=${treatment.giftLinkId}</a>
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
