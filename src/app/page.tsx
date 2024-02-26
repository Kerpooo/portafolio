import { ModeToggle } from "@/components/mode-toggle"
import PersonalLinks from "@/components/personal-links"
import TabsSection from "@/components/tabs-section"

export default function Home() {
  return (
    <>
      <header className="flex flex-row-reverse p-4">
        <ModeToggle />
      </header>
      <main className="container mx-auto text-center">
        <div className="sm:grid sm:grid-cols-2">
          <section className="sm:mt-10 sm:text-left">
            <h1 className="text-6xl font-bold mb-1">Kevin Rincón</h1>
            <div className="flex flex-col items-center justify-center sm:block sm:my-10">
              <h2 className="text-2xl font-semibold mb-4 sm:text-left">
                Ingeniero de Sistemas
              </h2>
              <p className="px-6 text-balance font-semibold sm:px-0 sm:text-left">
                Transformando ideas en soluciones innovadoras. 3 años de
                experiencia, desarrollo software utilizando diversas
                tecnologías.
              </p>
              <PersonalLinks />
            </div>
          </section>
          <section className="flex justify-center mt-10 ">
            <TabsSection />
          </section>
        </div>
      </main>
      <footer></footer>
    </>
  )
}
