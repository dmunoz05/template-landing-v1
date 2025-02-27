import Link from 'next/link';

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-100 text-gray-900">
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Club de Fútbol</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">Quiénes Somos</Link>
        <Link href="/services">Servicios</Link>
        <Link href="/contact">Contáctanos</Link>
      </div>
    </nav>
    <main className="p-6">{children}</main>
  </div>
);

export default Layout;
