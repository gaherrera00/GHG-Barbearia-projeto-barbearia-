"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState('todos');

    const categories = [
        { id: 'todos', name: 'Todos' },
        { id: 'cortes', name: 'Cortes' },
        { id: 'tendencias', name: 'Tendências' },
        { id: 'cuidados', name: 'Cuidados' },
        { id: 'eventos', name: 'Eventos' }
    ];

    const posts = [
        {
            id: 1,
            title: "Os Cortes Mais Populares de 2024",
            category: "tendencias",
            image: "/blindado1.jpg",
            date: "15 Mar 2024",
            excerpt: "Descubra quais são os cortes que estão dominando as ruas e as redes sociais neste ano.",
            author: "João Silva",
            readTime: "5 min"
        },
        {
            id: 2,
            title: "Como Manter a Barba Perfeita",
            category: "cuidados",
            image: "/blindado2.jfif",
            date: "12 Mar 2024",
            excerpt: "Guia completo com dicas e produtos essenciais para manter sua barba sempre impecável.",
            author: "Pedro Santos",
            readTime: "7 min"
        },
        {
            id: 3,
            title: "Técnicas de Degradê Perfeito",
            category: "cortes",
            image: "/blindado3.jpg",
            date: "10 Mar 2024",
            excerpt: "Aprenda as técnicas profissionais para conseguir aquele degradê perfeito no seu corte.",
            author: "Carlos Oliveira",
            readTime: "6 min"
        },
        {
            id: 4,
            title: "Evento de Barbeiros em São Paulo",
            category: "eventos",
            image: "/barber1.jpg",
            date: "8 Mar 2024",
            excerpt: "Confira como foi o maior evento de barbeiros do Brasil e as tendências apresentadas.",
            author: "Lucas Mendes",
            readTime: "4 min"
        },
        {
            id: 5,
            title: "Produtos Essenciais para o Cabelo",
            category: "cuidados",
            image: "/barber2.jpg",
            date: "5 Mar 2024",
            excerpt: "Lista dos produtos que não podem faltar na sua rotina de cuidados com o cabelo.",
            author: "Rafael Costa",
            readTime: "8 min"
        },
        {
            id: 6,
            title: "Tendências de Cores para 2024",
            category: "tendencias",
            image: "/barber3.jpg",
            date: "3 Mar 2024",
            excerpt: "As cores que estão em alta e como aplicá-las no seu visual.",
            author: "Marcos Lima",
            readTime: "5 min"
        }
    ];

    const filteredPosts = selectedCategory === 'todos'
        ? posts
        : posts.filter(post => post.category === selectedCategory);

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-black text-white py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl font-bold mb-6 text-gradient">Blog</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Fique por dentro das últimas tendências, dicas e novidades do mundo da barbearia.
                    </p>
                </motion.div>

                {/* Categories */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            className={`px-6 py-2 rounded-full transition-all ${
                                selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-yellow-400 to-red-500 text-black'
                                    : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                            onClick={() => setSelectedCategory(category.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="relative h-48">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                    loading="eager"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                                        {categories.find(cat => cat.id === post.category)?.name}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-400 mb-4">
                                    <span>{post.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.readTime} de leitura</span>
                                </div>
                                <h2 className="text-xl font-bold mb-3 hover:text-yellow-400 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400 mb-4">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-400">
                                        Por {post.author}
                                    </span>
                                    <motion.button
                                        className="text-yellow-400 hover:text-yellow-300 transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        Ler mais →
                                    </motion.button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Newsletter */}
                <motion.div
                    className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-bold mb-4">Receba Nossas Novidades</h2>
                    <p className="text-gray-400 mb-6">
                        Inscreva-se para receber as últimas tendências e dicas diretamente no seu e-mail.
                    </p>
                    <form className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:outline-none"
                        />
                        <motion.button
                            type="submit"
                            className="bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold px-6 py-3 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Inscrever
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

