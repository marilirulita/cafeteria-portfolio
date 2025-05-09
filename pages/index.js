import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Menu from "@/components/Menu"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
     <main className="scroll-smooth">
      <Header />
      <Hero />
      <Menu />
      <Contact />
      <Footer />
    </main>
  );
}
