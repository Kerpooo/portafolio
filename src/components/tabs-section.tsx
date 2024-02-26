import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import ExperienciaSection from "@/components/experiencia/experiencia-section"
export default function TabsSection() {
  return (
    <Tabs defaultValue="experiencia" className="w-[400px]">
      <div className="flex justify-center">
        <TabsList>
          <TabsTrigger value="experiencia">Experiencia</TabsTrigger>
          <TabsTrigger value="proyectos">Proyectos</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="experiencia">
        <ExperienciaSection />
      </TabsContent>
      <TabsContent value="proyectos">Change your proyectos here.</TabsContent>
    </Tabs>
  )
}
