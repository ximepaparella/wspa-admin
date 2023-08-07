"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="p-3">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Iniciar sesión</CardTitle>
        <CardDescription>
          Ingresá tu email y contraseña para acceder a tu cuenta.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 p-4">

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" type="password" />
        </div>
        <div className="grid gap-2">
        <Button variant="outline">
            Iniciar sesión
          </Button>
        </div>
      </CardContent>
    </Card>
    </main>
  )
}
