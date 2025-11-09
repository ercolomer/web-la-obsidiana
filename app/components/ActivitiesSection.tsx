import { motion } from "framer-motion";
import { Bike, Waves, Users, MapPin, Star } from "lucide-react";

export function ActivitiesSection() {
  const activities = [
    {
      id: 1,
      title: "Alquiler de Bicicletas",
      description: "Disfruta de paseos en bicicleta con las maravillosas vistas de la naturaleza y uno de los pueblos blancos más bonitos.",
      icon: Bike,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "Alquiler de Kayak",
      description: "Disfruta de este magnífico paseo en kayak y visita a un barco histórico encallado y a la cola del embalse, rica en fauna y flora.",
      icon: Waves,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Hidro Pedales",
      description: "Con nuestros hidro pedales la diversión con familiares y amigos está asegurada, todos se querrán tirar del tobogán.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
          >
            <Star className="w-4 h-4" />
            <span>PROXIMAMENTE</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 font-serif">
            Aquí Todo es Posible
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Disfruta de la naturaleza con nuestras diferentes actividades. Experiencias únicas que harán tu estancia inolvidable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4">
                {/* Imagen con efecto parallax */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Icono flotante */}
                  <motion.div
                    className={`absolute top-4 right-4 bg-gradient-to-r ${activity.color} text-white p-4 rounded-2xl shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <activity.icon className="w-8 h-8" />
                  </motion.div>
                </div>

                {/* Contenido */}
                <div className="p-8">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-800 mb-4 font-serif"
                    whileHover={{ color: "#059669" }}
                    transition={{ duration: 0.3 }}
                  >
                    {activity.title}
                  </motion.h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {activity.description}
                  </p>

                  {/* Botón con efecto especial */}
                  <motion.button
                    className={`w-full bg-gradient-to-r ${activity.color} text-white py-3 px-6 rounded-xl font-semibold relative overflow-hidden group`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Más Información</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </div>

                {/* Efecto de brillo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección de estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <motion.div
              className="text-5xl font-bold text-green-600 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              150+
            </motion.div>
            <p className="text-gray-600 font-semibold">Experiencias Únicas</p>
          </div>
          
          <div className="text-center">
            <motion.div
              className="text-5xl font-bold text-blue-600 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              15
            </motion.div>
            <p className="text-gray-600 font-semibold">Años de Prestigio</p>
          </div>
          
          <div className="text-center">
            <motion.div
              className="text-5xl font-bold text-purple-600 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              ★★★★★
            </motion.div>
            <p className="text-gray-600 font-semibold">Calificación</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

