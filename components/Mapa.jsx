
const Mapa = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
  const direccion = "San Quintin #2898 Mexicali"; // puedes cambiar esto
  const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(direccion)}`;

  return (
     <div className="w-full h-[400px] mt-10 rounded-lg overflow-hidden shadow-md border">
      <iframe
        title="Mapa Cafetería"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
        src={src}
      />
    </div>
  )
}

export default Mapa