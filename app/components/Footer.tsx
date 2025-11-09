import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Información de la empresa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 font-serif">Finca La Obsidiana</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Casas rurales de lujo en Arcos de la Frontera. Dos elegantes casas con piscina privada y porches equipados. 15 años de experiencia.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-full hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#casas" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Nuestras Casas
                </a>
              </li>
              <li>
                <a href="#reservas" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Reservar
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Ubicación
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Servicios
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+34 647 286 636</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">soporte@fincalaobsidiana.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <span className="text-gray-300">
                  Arcos de la Frontera<br />
                  Cádiz, España
                </span>
              </div>
            </div>
          </motion.div>

          {/* Horarios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Horarios</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span>9:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábados</span>
                <span>9:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingos</span>
                <span>10:00 - 20:00</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-900/30 rounded-lg">
              <p className="text-green-300 text-sm">
                <strong>Emergencias:</strong> Disponibles 24/7
              </p>
            </div>
          </motion.div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-gray-400 text-sm">
                © 2024 Finca La Obsidiana. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Diseñado con <Heart className="w-4 h-4 inline text-red-500" /> para ofrecerte la mejor experiencia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center md:justify-end gap-6 text-sm"
            >
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
