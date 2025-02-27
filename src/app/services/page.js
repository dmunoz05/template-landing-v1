"use client";
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <>
      {/* Sección Principal */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-center bg-cover bg-center bg-[url('/services.jpg')]">
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white"
        >
          <h1 className="text-5xl font-extrabold mb-4">Nuestros Servicios</h1>
          <p className="text-lg">Brindamos formación integral y oportunidades únicas para futbolistas.</p>
        </motion.div>
      </section>

      {/* Lista de Servicios */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">¿Qué ofrecemos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Servicio 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <h3 className="text-2xl font-bold text-blue-600">Escuela de Formación</h3>
            <p className="text-gray-700 mt-2">
              Entrenamientos para niños y jóvenes con entrenadores profesionales.
            </p>
          </motion.div>

          {/* Servicio 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <h3 className="text-2xl font-bold text-blue-600">Equipos de Competencia</h3>
            <p className="text-gray-700 mt-2">
              Representa a nuestro club en torneos locales y nacionales.
            </p>
          </motion.div>

          {/* Servicio 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <h3 className="text-2xl font-bold text-blue-600">Entrenamiento Personalizado</h3>
            <p className="text-gray-700 mt-2">
              Sesiones individuales para mejorar habilidades técnicas y físicas.
            </p>
          </motion.div>

          {/* Servicio 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <h3 className="text-2xl font-bold text-blue-600">Fisioterapia y Recuperación</h3>
            <p className="text-gray-700 mt-2">
              Prevención y tratamiento de lesiones con especialistas deportivos.
            </p>
          </motion.div>

          {/* Servicio 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <h3 className="text-2xl font-bold text-blue-600">Visorías y Oportunidades</h3>
            <p className="text-gray-700 mt-2">
              Oportunidad de ser visto por clubes y reclutadores profesionales.
            </p>
          </motion.div>

          {/* Servicio 6 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <h3 className="text-2xl font-bold text-blue-600">Torneos y Eventos</h3>
            <p className="text-gray-700 mt-2">
              Organizamos campeonatos, clínicas y eventos deportivos durante el año.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Lo que dicen nuestros jugadores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-gray-100 shadow-lg rounded-xl p-6"
          >
            <p className="text-gray-700 italic">Desde que entreno aquí, mi rendimiento ha mejorado y tuve la oportunidad de jugar en un torneo nacional.</p>
            <h4 className="text-xl font-bold mt-4 text-blue-600">- Juan Pérez</h4>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 shadow-lg rounded-xl p-6"
          >
            <p className="text-gray-700 italic">El entrenamiento personalizado me ayudó a fortalecer mis habilidades y conseguir una beca deportiva.</p>
            <h4 className="text-xl font-bold mt-4 text-blue-600">- María Gómez</h4>
          </motion.div>
        </div>
      </section>

      {/* Llamado a la Acción */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">¿Listo para entrenar con nosotros?</h2>
          <p className="text-lg mb-6">Descubre cómo podemos ayudarte a mejorar tu rendimiento en el fútbol.</p>
          <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
            Contáctanos
          </a>
        </motion.div>
      </section>
    </>
  );
}