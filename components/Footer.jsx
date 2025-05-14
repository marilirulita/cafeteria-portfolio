
const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white text-center py-6 mt-10">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Cafetería AM. Todos los derechos reservados.</p>

        <div className="flex justify-center items-center gap-6 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition" 
          >
            <img
              src="/icons/facebook.svg"
              alt="Facebook"
              className="w-5 h-5 transition hover:scale-110" 
            />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="w-5 h-5 transition hover:scale-110" 
            />
          </a>

          <a
            href="mailto:contacto@cafeteriaam.com"
            className="hover:opacity-80 transition"
          >
            <img
              src="/icons/mail.svg"
              alt="Correo"
              className="w-5 h-5 transition hover:scale-110" 
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer