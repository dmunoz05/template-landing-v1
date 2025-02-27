"use client"
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      {/* Sección Principal */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-center bg-cover bg-center bg-[url('/quienes-somos.jpg')]">
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white"
        >
          <h1 className="text-5xl font-extrabold mb-4">Quiénes Somos</h1>
          <p className="text-lg">Un club con historia, pasión y compromiso con el fútbol.</p>
        </motion.div>
      </section>

      {/* Historia del Club */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-600">Nuestra Historia</h2>
          <p className="text-lg text-gray-700">
            Fundado en el año 2005, nuestro club ha sido un referente en el desarrollo del talento futbolístico.
            A lo largo de los años, hemos formado jugadores que han competido a nivel regional y nacional, siempre promoviendo los valores del respeto, la disciplina y el trabajo en equipo.
          </p>
        </motion.div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-4">Misión</h3>
            <p className="text-gray-700">
              Nuestra misión es formar jugadores íntegros, con disciplina y pasión por el fútbol,
              brindándoles oportunidades de crecimiento en un ambiente de respeto y profesionalismo.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-4">Visión</h3>
            <p className="text-gray-700">
              Ser un club reconocido a nivel nacional e internacional por nuestra excelencia en la formación
              de jugadores, ofreciendo un ambiente de alto rendimiento y oportunidades en el mundo del fútbol.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Valores del Club */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Nuestros Valores</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-blue-600">Disciplina</h3>
            <p className="text-gray-700 mt-2">Compromiso y constancia en cada entrenamiento y partido.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-blue-600">Trabajo en equipo</h3>
            <p className="text-gray-700 mt-2">La unión y compañerismo nos hacen más fuertes.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-blue-600">Respeto</h3>
            <p className="text-gray-700 mt-2">Valores dentro y fuera del campo, con entrenadores y rivales.</p>
          </div>
        </motion.div>
      </section>

      {/* Llamado a la Acción */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">¿Quieres ser parte de nuestra historia?</h2>
          <p className="text-lg mb-6">Únete a nuestra familia y desarrolla tu talento con los mejores.</p>
          <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
            Contctanos
          </a>
        </motion.div>
      </section>
    </>
  );
}
