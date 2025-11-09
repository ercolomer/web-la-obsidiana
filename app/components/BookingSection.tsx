import { motion } from "framer-motion";
import { Calendar, Users, CreditCard, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

export function BookingSection() {
  const [selectedHouse, setSelectedHouse] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de reserva
    alert("¡Reserva enviada! Te contactaremos pronto para confirmar los detalles.");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-serif">
            Reserva tu Escape Rural
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Planifica tu próxima aventura en la naturaleza. Reserva fácil y rápido con nosotros.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulario de reserva */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Formulario de Reserva</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selección de casa */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Selecciona tu casa rural
                </label>
                <select
                  value={selectedHouse}
                  onChange={(e) => setSelectedHouse(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Elige una opción</option>
                  <option value="casa-del-bosque">Casa del Bosque - €120/noche</option>
                  <option value="casa-de-la-montana">Casa de la Montaña - €150/noche</option>
                </select>
              </div>

              {/* Fechas */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha de entrada
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-12 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha de salida
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-12 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Número de huéspedes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de huéspedes
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full pl-12 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} huésped{num > 1 ? 'es' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Información de contacto */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  required
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  required
                />
                <input
                  type="text"
                  placeholder="Comentarios especiales"
                  className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <a 
                href="https://api.whatsapp.com/send/?phone=%2B34647286636&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
                Reservar por WhatsApp
              </a>
            </form>
          </motion.div>

          {/* Información adicional */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Proceso de reserva */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Cómo funciona</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 rounded-full p-2">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Completa el formulario</h4>
                    <p className="text-gray-600 text-sm">Rellena todos los datos necesarios para tu reserva</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 rounded-full p-2">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Te contactamos</h4>
                    <p className="text-gray-600 text-sm">Nos pondremos en contacto contigo en menos de 24h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 rounded-full p-2">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Confirmación</h4>
                    <p className="text-gray-600 text-sm">Confirmamos tu reserva y te enviamos todos los detalles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Beneficios */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">¿Por qué elegirnos?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Reserva segura y confiable</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Mejor precio garantizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Cancelación flexible</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Atención personalizada 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Experiencias únicas garantizadas</span>
                </div>
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl shadow-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">¡Reserva ahora!</h3>
              <p className="mb-4">Temporada alta: Las casas se llenan rápido</p>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Respuesta garantizada en 24h</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
