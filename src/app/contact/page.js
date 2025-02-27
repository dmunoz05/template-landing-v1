"use client";
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
      <p className="text-lg">Escríbenos para más información sobre cómo unirte al club.</p>
      <form className="mt-4 space-y-4">
        <input type="text" placeholder="Nombre" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Correo" className="w-full p-2 border rounded" />
        <textarea placeholder="Mensaje" className="w-full p-2 border rounded"></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Enviar</button>
      </form>
    </motion.section>
  );
}