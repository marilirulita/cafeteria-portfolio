import { motion } from "framer-motion";

const menuData = {
  bebidasCalientes: [
    { name: "Café Americano", price: "$30" },
    { name: "Capuchino", price: "$45" },
    { name: "Latte", price: "$50" },
    { name: "Chocolate Caliente", price: "$41" },
    { name: "Té", price: "$28" },
  ],
  bebidasFrias: [
    { name: "Té Helado", price: "$20" },
    { name: "Licuados", price: "$30" },
    { name: "Jugos Verdes", price: "$35" },
    { name: "Soda (600ml)", price: "$17" },
    { name: "Jumex", price: "$14" },
    { name: "Agua", price: "$7" },
  ],
  alimentos: [
    { name: "Croissant Caliente", price: "$40" },
    { name: "Sándwich Fríos", price: "$25" },
    { name: "Sándwich Calientes", price: "$32" },
    { name: "Panini", price: "$50" },
    { name: "Pan Dulce", price: "$15" },
    { name: "Galletas", price: "$12" },
  ],
};

const MenuSection = ({ title, items }) => {
   return (
     <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mb-4">
        <h3 className="text-2xl font-bold tracking-wide mb-4 border-b border-green-700 ">{title}</h3>
      </div>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[1fr_auto] items-center border-b border-neutral-300 pb-1"
          >
            <span className="text-lg">{item.name}</span>
            <span className="text-lg font-semibold">{item.price}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const Menu = () => {
  return (
     <section className=" text-gray-800 bg-[#f6f1ec] py-12 px-4" id="menu">
      <div className="max-w-4xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Menú
      </motion.h2>

<div className="bg-[#e3d1bf] rounded-md p-6 md:p-10 shadow-md">
     
        <MenuSection title="Bebidas Calientes" items={menuData.bebidasCalientes} />
        <MenuSection title="Bebidas Frías" items={menuData.bebidasFrias} />
        <MenuSection title="Alimentos" items={menuData.alimentos} />
      
      </div>
      </div>
    </section>
  )
}

export default Menu