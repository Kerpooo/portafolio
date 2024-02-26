import { ScrollArea } from "../ui/scroll-area"
import ExperienciaCard from "./experiencia-card"

const experiencias = [
  {
    id: 1,
    cargo: "Desarrollador FullStack",
    empresa: "Overwatch Co",
    fecha_incio: "Enero 2024",
    fecha_fin: "Actualidad",
    texto:
      "Desarrollo la aplicación Event[+] orientada para la gestión integral de eventos y la elaboración de actas de contrato en el ámbito del sector público.",
    tecnologias: ["Typescript", "Next.js", "PostgreSQL", "Prisma", "Tailwind"],
  },
  {
    id: 2,
    cargo: "Desarrollador FullStack",
    empresa: "Overwatch Co",
    fecha_incio: "Enero 2024",
    fecha_fin: "Actualidad",
    texto:
      "Desarrollo la aplicación Event[+] orientada para la gestión integral de eventos y la elaboración de actas de contrato en el ámbito del sector público.",
    tecnologias: ["Typescript", "Next.js", "PostgreSQL", "Prisma", "Tailwind"],
  },
  {
    id: 3,
    cargo: "Desarrollador FullStack",
    empresa: "Overwatch Co",
    fecha_incio: "Enero 2024",
    fecha_fin: "Actualidad",
    texto:
      "Desarrollo la aplicación Event[+] orientada para la gestión integral de eventos y la elaboración de actas de contrato en el ámbito del sector público.",
    tecnologias: ["Typescript", "Next.js", "PostgreSQL", "Prisma", "Tailwind"],
  },
]

export default function ExperienciaSection() {
  return (
    <ScrollArea className=" w-full h-[400px]">
      {experiencias.map((experiencia) => (
        <ExperienciaCard
          key={experiencia.id}
          tecnologias={experiencia.tecnologias}
          cargo={experiencia.cargo}
          empresa={experiencia.empresa}
          fecha_incio={experiencia.fecha_incio}
          fecha_fin={experiencia.fecha_fin}
          texto={experiencia.texto}
        />
      ))}
    </ScrollArea>
  )
}
