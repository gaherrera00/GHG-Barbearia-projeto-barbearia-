"use client";
import { Inter } from 'next/font/google';
import './globals.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'História', href: '/historia' },
    { name: 'Agenda', href: '/agenda' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <motion.header
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-white">
                G2
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-black/95 backdrop-blur-md"
              >
                <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-white hover:text-yellow-400 transition-colors duration-300 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        <main className="pt-16">
          {children}
        </main>

        <footer className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Barbearia G2</h3>
                <p className="text-gray-400">
                  Estilo e qualidade em cada corte. Sua transformação começa aqui.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contato</h3>
                <p className="text-gray-400">
                  Email: contato@barbeariag2.com.br<br />
                  Tel: (11) 99999-9999
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Barbearia G2. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}