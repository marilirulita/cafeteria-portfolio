import { motion } from 'framer-motion';

const Hero = () => {
  return (
     <section className="relative md:bg-gradient-to-r from-[#d9c4b1] to-white  bg-[url('/images/cafeteriaImage.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center text-center">
      
      <div className="hero max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-end md:justify-between gap-10 bg-gray-200/70 md:bg-transparent">
        
        {/* Texto animado */}
        <motion.div
          className="text-center md:text-left space-y-6 bg-amber-100/70 md:bg-transparent p-3 radius"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#3a2f2a]">
            Cafetería AM
          </h1>
          <p className="text-xl text-[#5c4b43] ">
            Café artesanal, pan dulce y un rincón para relajarte.
          </p>
          <motion.a
            href="#menu"
            className="inline-block bg-[#3a2f2a] text-white px-6 py-3 rounded-full text-sm hover:bg-[#4b3c35] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Menú
          </motion.a>
        </motion.div>

        {/* Imagen decorativa con animación */}
        <motion.div
          className="w-[300px] h-[300px] rounded-full bg-[url('/images/cafeteriaImage.jpg')] bg-cover bg-center shadow-lg hidden md:block"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </section>
  )
}

export default Hero