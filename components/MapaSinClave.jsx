
const MapaSinClave = () => {
  return (
    <div className="w-full h-[400px] mt-10 rounded-lg overflow-hidden shadow-md border">
      <iframe
        src="https://www.google.com/maps?q=zacatecas+2373+Mexicali&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
        className="w-full h-full"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa Cafetería"
      /></div>
  )
}

export default MapaSinClave