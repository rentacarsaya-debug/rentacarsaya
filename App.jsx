import React, { useState } from "react";

const WHATSAPP_MAIN = "56944190712";
const WHATSAPP_ALT = "56935645787";

const cars = [
  { id: 1, name: "Kia Soluto", type: "Sedán", capacity: "5 pasajeros", img: "https://images.unsplash.com/photo-1600250392279-65d5b7b8f9b8?auto=format&fit=crop&w=1400&q=60" },
  { id: 2, name: "Kia Morning", type: "City Car", capacity: "4 pasajeros", img: "https://images.unsplash.com/photo-1542367597-2f0b9b8b0c8b?auto=format&fit=crop&w=1400&q=60" },
  { id: 3, name: "Hyundai Accent", type: "Sedán", capacity: "5 pasajeros", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=60" },
  { id: 4, name: "Peugeot Traveller", type: "Van 9 pasajeros", capacity: "9 pasajeros", img: "https://images.unsplash.com/photo-1549921296-3c9a3b8f7b44?auto=format&fit=crop&w=1400&q=60" },
  { id: 5, name: "Kia Carens", type: "SUV 7 pasajeros", capacity: "7 pasajeros", img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=60" },
  { id: 6, name: "Mitsubishi L200 Work", type: "Camioneta de trabajo", capacity: "5 pasajeros", img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=60" },
  { id: 7, name: "SsangYong Actyon Sports", type: "Camioneta", capacity: "5 pasajeros", img: "https://images.unsplash.com/photo-1519996527037-7e0f5f1d5a61?auto=format&fit=crop&w=1400&q=60" }
];

export default function App(){
  const [query, setQuery] = useState("");
  const filtered = cars.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-800 font-sans">
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-rani.png" alt="Rani Rentacars" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-lg font-extrabold text-blue-800">Rani Rentacars</h1>
              <p className="text-xs text-blue-500">Limache • Entrega a domicilio</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <a href="#fleet" className="text-blue-700 hover:underline">Flota</a>
            <a href="#how" className="text-blue-700 hover:underline">Cómo funciona</a>
            <a href="#contact" className="text-blue-700 hover:underline">Contacto</a>
            <div className="flex items-center gap-2">
              <a href="https://instagram.com/rentacarsaya" target="_blank" rel="noreferrer"><img src="/public_icons/instagram.svg" alt="instagram" className="w-6 h-6" /></a>
              <a href="https://facebook.com/rentacarsaya" target="_blank" rel="noreferrer"><img src="/public_icons/facebook.svg" alt="facebook" className="w-6 h-6" /></a>
              <a href="https://tiktok.com/@rentacarsaya" target="_blank" rel="noreferrer"><img src="/public_icons/tiktok.svg" alt="tiktok" className="w-6 h-6" /></a>
            </div>
            <a href={`https://wa.me/${WHATSAPP_MAIN}`} className="ml-4 inline-flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-800">WhatsApp</a>
          </nav>
          <div className="md:hidden">
            <a href={`https://wa.me/${WHATSAPP_MAIN}`} className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg">WhatsApp</a>
          </div>
        </div>
      </header>

      <main className="pt-28 max-w-6xl mx-auto px-6 pb-24">
        <section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-8 shadow">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight">Rani Rentacars — Arriendo de autos confiable y cercano en Limache</h2>
            <p className="mt-4 text-slate-600">Vehículos confiables, cómodos y al mejor precio. Entregamos a domicilio por un pequeño costo según distancia.</p>
            <div className="mt-6 flex gap-3">
              <a href={`https://wa.me/${WHATSAPP_MAIN}?text=${encodeURIComponent('Hola Rani Rentacars, quisiera cotizar y coordinar una reserva.')}`} className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg">Cotiza por WhatsApp</a>
              <a href="#fleet" className="px-6 py-3 rounded-lg border border-blue-200 text-blue-700">Ver flota</a>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=60" alt="car hero" className="rounded-xl shadow-lg object-cover w-full h-80" />
          </div>
        </section>

        <section id="fleet" className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-blue-800">Flota disponible</h3>
            <p className="text-sm text-slate-500">{filtered.length} vehículos</p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(car => (
              <article key={car.id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col border-t-4 border-blue-600">
                <div className="relative rounded-lg overflow-hidden h-44">
                  <img src={car.img} alt={car.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-3 flex-1">
                  <h4 className="font-semibold text-lg text-blue-700">{car.name}</h4>
                  <p className="text-sm text-slate-500">{car.type} • {car.capacity}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-blue-700">Consultar</p>
                      <p className="text-xs text-slate-500">por día</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <a href={`https://wa.me/${WHATSAPP_MAIN}?text=${encodeURIComponent('Hola Rani Rentacars, quiero consultar por el ' + car.name)}`} target="_blank" rel="noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-md shadow">Contactar por WhatsApp</a>
                      <button onClick={() => alert('Detalles:\n' + car.name)} className="border border-blue-200 text-blue-700 px-4 py-2 rounded-md">Detalles</button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="mt-12 bg-white p-6 rounded-2xl shadow border-l-4 border-blue-600">
          <h3 className="font-bold text-xl text-blue-800">Cómo funciona</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6 text-slate-700">
            <div className="p-4">
              <h4 className="font-semibold text-blue-700">1. Buscar</h4>
              <p className="text-sm mt-2">Elige el modelo y consulta disponibilidad por WhatsApp.</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-blue-700">2. Reservar</h4>
              <p className="text-sm mt-2">Coordinamos horarios, depósito y detalles por mensaje.</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-blue-700">3. Entrega</h4>
              <p className="text-sm mt-2">Entrega en oficina o a domicilio (costo adicional según distancia).</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12 grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white p-6 rounded-2xl shadow border-t-4 border-blue-600">
            <h3 className="font-bold text-xl text-blue-800">Contacto</h3>
            <p className="mt-2 text-sm text-slate-600">¿Tienes preguntas? Contáctanos por WhatsApp para coordinar reserva y entrega.</p>
            <div className="mt-4 text-slate-700">
              <p><strong>WhatsApp (principal):</strong> <a href={`https://wa.me/${WHATSAPP_MAIN}`} className="text-blue-700">+56 9 4419 0712</a></p>
              <p className="mt-2"><strong>WhatsApp (alternativo):</strong> <a href={`https://wa.me/${WHATSAPP_ALT}`} className="text-blue-700">+56 9 3564 5787</a></p>
              <p className="mt-2"><strong>Ubicación:</strong> Av. Independencia 1497, Limache (La Pica del Rusio)</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border-t-4 border-blue-600">
            <h3 className="font-semibold text-blue-700">Envíanos un mensaje</h3>
            <form className="mt-4 grid gap-3" onSubmit={(e)=>{ e.preventDefault(); alert('Mensaje enviado — gracias!') }}>
              <input placeholder="Tu nombre" className="p-2 rounded-md border border-blue-200" />
              <input placeholder="Tu email" className="p-2 rounded-md border border-blue-200" />
              <textarea placeholder="Mensaje" className="p-2 rounded-md border border-blue-200 h-24" />
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">Enviar</button>
            </form>
          </div>
        </section>

        <section className="mt-12">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-semibold text-blue-800">Mapa</h4>
            <p className="text-sm text-slate-600 mt-2">Nuestra base en Limache. Consulta por entrega a domicilio.</p>
            <div className="mt-4 w-full" style={{height:320}}>
              <iframe title="Mapa Limache" src="https://www.google.com/maps?q=Avenida+Independencia+1497+Limache&output=embed" className="w-full h-full rounded-md border-0" loading="lazy"></iframe>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t py-6 mt-12 bg-blue-900 text-blue-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo-rani.png" alt="Rani Rentacars logo" className="w-8 h-8 object-contain" />
            <p className="text-sm">© {new Date().getFullYear()} Rani Rentacars. Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/rentacarsaya" target="_blank" rel="noreferrer"><img src="/public_icons/instagram.svg" alt="instagram" className="w-6 h-6" /></a>
            <a href="https://facebook.com/rentacarsaya" target="_blank" rel="noreferrer"><img src="/public_icons/facebook.svg" alt="facebook" className="w-6 h-6" /></a>
            <a href="https://tiktok.com/@rentacarsaya" target="_blank" rel="noreferrer"><img src="/public_icons/tiktok.svg" alt="tiktok" className="w-6 h-6" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}