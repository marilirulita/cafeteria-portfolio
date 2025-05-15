import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Menu from "@/components/Menu"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
// import Mapa from "@/components/Mapa"
import MapaSinClave from "@/components/MapaSinClave"

export default function Home() {
  return (
     <main className="scroll-smooth">
      <Header />
      <Hero />
      <Menu />
      <Contact />
      <section id="ubicacion" className="py-16 bg-gray-100 px-4">
        <h2 className="text-3xl font-serif text-center mb-6 text-green-800">¿Dónde estamos?</h2>
        <MapaSinClave />
      </section>
      <Footer />
    </main>
  );
}
