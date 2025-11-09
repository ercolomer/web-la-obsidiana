import { motion } from "framer-motion";
import { Bed, Bath, Users, Car, Wifi, Coffee, Mountain, Heart, Star } from "lucide-react";

export function HousesSection() {
  const houses = [
    {
      id: 1,
      name: "Casa 1 - Finca La Obsidiana",
      description: "Una elegante casa rural con piscina privada y porche equipado, perfecta para disfrutar de la exclusividad y el lujo en Arcos de la Frontera.",
      price: "Consultar",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: {
        bedrooms: "Consultar",
        bathrooms: "Consultar",
        guests: "Consultar",
        parking: true
      },
      amenities: ["Piscina privada", "Porche equipado", "WiFi", "Cocina completa", "Jardín privado"],
      rating: 5.0,
      reviews: 150
    },
    {
      id: 2,
      name: "Casa 2 - Finca La Obsidiana",
      description: "Una espectacular casa rural de lujo con piscina privada, ideal para vivir una experiencia única y enriquecedora en un entorno privilegiado.",
      price: "Consultar",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: {
        bedrooms: "Consultar",
        bathrooms: "Consultar",
        guests: "Consultar",
        parking: true
      },
      amenities: ["Piscina privada", "Porche equipado", "WiFi", "Vista panorámica", "Espacios al aire libre"],
      rating: 5.0,
      reviews: 150
    }
  ];

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
            Nuestras Casas de Lujo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dos elegantes casas rurales con piscina privada y porches equipados. Exclusividad y disfrute en Finca La Obsidiana.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {houses.map((house, index) => (
            <motion.div
              key={house.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4"
              whileHover={{ scale: 1.02 }}
            >
              {/* Imagen */}
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  src={house.image}
                  alt={house.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Botón de favoritos animado */}
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="w-6 h-6 text-red-500" />
                </motion.div>
                
                {/* Precio con efecto especial */}
                <motion.div 
                  className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl font-bold text-green-600">{house.price}</span>
                  <span className="text-gray-600">/noche</span>
                </motion.div>
                
                {/* Efecto de brillo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Contenido */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 font-serif">{house.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-gray-600">{house.rating}</span>
                    <span className="text-gray-400">({house.reviews})</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{house.description}</p>

                {/* Características */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Bed className="w-5 h-5" />
                    <span>{house.features.bedrooms} dormitorios</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Bath className="w-5 h-5" />
                    <span>{house.features.bathrooms} baños</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span>Hasta {house.features.guests} huéspedes</span>
                  </div>
                  {house.features.parking && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Car className="w-5 h-5" />
                      <span>Parking</span>
                    </div>
                  )}
                </div>

                {/* Amenidades */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Amenidades incluidas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {house.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botones */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
                    Ver Detalles
                  </button>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=%2B34647286636&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-green-500 text-green-600 py-3 px-6 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 text-center"
                  >
                    Reservar por WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
