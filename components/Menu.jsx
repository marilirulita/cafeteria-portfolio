
const Menu = () => {
  return (
    <section id="menu" className="bg-[#f6f1ec] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-8 text-gray-800 tracking-wider">
          Menú
        </h2>

        <div className="bg-[#e3d1bf] rounded-md p-6 md:p-10 shadow-md flex flex-col md:flex-row gap-6">
          {/* Columna Izquierda: categorías y productos */}
          <div className="flex-1">
            <h3 className="text-lg font-bold tracking-wide mb-4 border-b border-green-700 inline-block">
              Bebidas Caliente
            </h3>
            <ul className="mb-6 space-y-2">
              <li>Café Americano</li>
              <li>Capuchino</li>
              <li>Latte</li>
              <li>Chocolate Caliente</li>
              <li>Té</li>
            </ul>

            <h3 className="text-lg font-bold tracking-wide mb-4 border-b border-green-700 inline-block">
              Bebidas Frías
            </h3>
            <ul className="mb-6 space-y-2">
              <li>Té Helado</li>
              <li>Licuados</li>
              <li>Jugos Verdes</li>
              <li>Soda (600ml)</li>
              <li>Jumex</li>
              <li>Agua</li>
            </ul>

            <h3 className="text-lg font-bold tracking-wide mb-4 border-b border-green-700 inline-block">
              Alimentos
            </h3>
            <ul className="space-y-2">
              <li>Croissant Caliente</li>
              <li>Sándwich Fríos</li>
              <li>Sándwich Calientes</li>
              <li>Panini</li>
              <li>Pan Dulce</li>
              <li>Galletas</li>
            </ul>
          </div>

          {/* Columna Derecha: precios */}
          <div className="flex-1 text-right text-gray-800 font-medium justify-end align-bottom">
            <div className="space-y-[1.45rem]">
              <div className="pt-4" />
              <p>$30</p>
              <p>$45</p>
              <p>$50</p>
              <p>$41</p>
              <p>$28</p>

              <div className="pt-4" />
              <p>$20</p>
              <p>$30</p>
              <p>$35</p>
              <p>$17</p>
              <p>$14</p>
              <p>$7</p>

              <div className="pt-4" />
              <p>$40</p>
              <p>$25</p>
              <p>$32</p>
              <p>$50</p>
              <p>$15</p>
              <p>$12</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu