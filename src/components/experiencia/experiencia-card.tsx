import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

interface Props {
  texto: string
  fecha_incio: string
  fecha_fin: string
  empresa: string
  cargo: string
  tecnologias: Array<string>
}

export default function ExperienciaCard({
  cargo,
  empresa,
  fecha_fin,
  fecha_incio,
  texto,
  tecnologias,
}: Props) {
  return (
    <div className="m-6">
      <Card>
        <CardHeader>
          <CardTitle className="leading-5 text-xl sm:leading-none text-primary">
            {empresa}. | {cargo}.
          </CardTitle>
          <CardDescription>{`${fecha_incio} - ${fecha_fin}`}</CardDescription>
        </CardHeader>
        <CardContent className="text-balance">
          <p>{texto}</p>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-stretch gap-2">
          {tecnologias.map((tecnologia) => (
            <Badge
              variant="outline"
              className="border-primary"
              key={tecnologia}
            >
              {tecnologia}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </div>
  )
}
