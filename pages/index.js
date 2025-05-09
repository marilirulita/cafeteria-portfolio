import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Menu from "@/components/Menu"
import Hours from "@/components/Hours"
import Location from "@/components/Location"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
     <main className="scroll-smooth">
      <Header />
      <Hero />
      <Menu />
      <Hours />
      <Location />
      <ContactForm />
      <Footer />
    </main>
  );
}
