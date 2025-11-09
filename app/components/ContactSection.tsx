import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: "+34 647 286 636",
      description: "Llámanos para más información"
    },
    {
      icon: Mail,
      title: "Email",
      details: "soporte@fincalaobsidiana.com",
      description: "Respuesta en menos de 24h"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: "Arcos de la Frontera, Cádiz",
      description: "Entorno natural privilegiado"
    },
    {
      icon: Clock,
      title: "Experiencia",
      details: "15 años de prestigio",
      description: "150+ experiencias únicas"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Mensaje enviado! Te responderemos pronto.");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-serif">
            Contacta con Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta? ¿Necesitas información adicional? Estamos aquí para ayudarte a planificar tu escapada perfecta.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="bg-green-100 text-green-600 rounded-full p-3">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-lg font-medium text-green-600">{item.details}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Redes sociales */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Síguenos en Redes</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Mantente al día con nuestras últimas novedades, ofertas especiales y consejos para tu escapada rural.
              </p>
            </div>

            {/* Mapa */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Nuestra Ubicación</h3>
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Mapa interactivo</p>
                  <p className="text-sm">Sierra de la Demanda, Burgos</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Situadas en un entorno natural privilegiado, nuestras casas rurales ofrecen la perfecta combinación de tranquilidad y accesibilidad.
              </p>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  required
                />
                <input
                  type="text"
                  placeholder="Apellidos"
                  className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  required
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <select className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300">
                <option value="">Selecciona el motivo de tu consulta</option>
                <option value="reserva">Consulta sobre reservas</option>
                <option value="disponibilidad">Disponibilidad</option>
                <option value="servicios">Servicios y amenidades</option>
                <option value="ubicacion">Ubicación y accesos</option>
                <option value="grupos">Reservas para grupos</option>
                <option value="otro">Otro</option>
              </select>

              <textarea
                placeholder="Escribe tu mensaje aquí..."
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                required
              ></textarea>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Acepto la <a href="#" className="text-green-600 hover:underline">política de privacidad</a> y el tratamiento de mis datos personales.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>

            <div className="mt-8 p-4 bg-green-50 rounded-2xl">
              <h4 className="font-semibold text-green-800 mb-2">¿Necesitas una respuesta rápida?</h4>
              <p className="text-green-700 text-sm mb-3">
                Para consultas urgentes, llámanos directamente al <strong>+34 647 286 636</strong> o envíanos un WhatsApp.
              </p>
              <a 
                href="https://api.whatsapp.com/send/?phone=%2B34647286636&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
