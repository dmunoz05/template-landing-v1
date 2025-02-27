"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import image from 'landing-v1/assets/jugadores.jpg';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center bg-[url('/futbol.jpg')]">
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Bienvenido al Club</h1>
          <p className="text-lg md:text-xl">Pasión, disciplina y trabajo en equipo.</p>
        </motion.div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-600">Sobre Nosotros</h2>
          <p className="text-lg text-gray-700">
            Somos un club comprometido con el crecimiento deportivo y personal de nuestros jugadores. Nos enfocamos en desarrollar el talento futbolístico y formar valores.
          </p>
        </motion.div>
      </section>

      {/* Galería de Imágenes */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Nuestra Pasión</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Image src={image} alt="Jugadores" className="rounded-xl shadow-lg" />
          <Image src={image} alt="Jugadores" className="rounded-xl shadow-lg" />
          <Image src={image} alt="Jugadores" className="rounded-xl shadow-lg" />
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
          <h2 className="text-4xl font-bold mb-4">¿Quieres unirte al club?</h2>
          <p className="text-lg mb-6">Sé parte de nuestro equipo y vive la emoción del fútbol con nosotros.</p>
          <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
            Contáctanos
          </a>
        </motion.div>
      </section>
    </>
  );
}