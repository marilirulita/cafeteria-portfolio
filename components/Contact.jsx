import { Mail } from "lucide-react"

const Contact = () => {
  return (
    <section className="bg-[#f6f1ec] py-16 px-4 border-t border-green-600">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        

        {/* Formulario */}
        <form
          action="https://formspree.io/f/xanobnwe"
          method="POST"
          className="bg-white p-6 rounded-md shadow-md space-y-4"
        >
          <h3 className="text-xl font-serif text-gray-700 flex items-center gap-2">
            <Mail className="w-5 h-5" /> Contáctanos
          </h3>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            name="message"
            placeholder="Escribe tu mensaje..."
            required
            className="w-full border border-gray-300 rounded px-4 py-2 h-28 resize-none"
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
          >
            Enviar
          </button>
        </form>

        {/* Información */}
        <div className="flex flex-col justify-end">
          <h3 className="text-2xl font-serif text-gray-800 mb-6">Visítanos</h3>
          <p className="mb-4">
            📍 <strong>Dirección:</strong><br />
            Calle Ficticia #123, Centro<br />
            Mexicali, Baja California
          </p>
          <p className="mb-4">
            🕒 <strong>Horarios:</strong><br />
            Lunes a Viernes: 8:00am - 8:00pm<br />
            Sábados: 9:00am - 5:00pm
          </p>
          <p>
            ☕ ¡Te esperamos con café recién hecho y pan dulce delicioso!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact;