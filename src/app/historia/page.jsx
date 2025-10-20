"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Historia() {
  const timeline = [
    {
      year: "2015",
      title: "O Início",
      description: "A Barbearia G2 nasceu de um sonho de dois amigos apaixonados por cortes e estilo. Começamos em uma pequena sala no centro da cidade.",
      image: "/historia1.jpg"
    },
    {
      year: "2017",
      title: "Primeira Expansão",
      description: "Com o sucesso crescente, abrimos nossa primeira unidade completa, com ambiente moderno e equipamentos de última geração.",
      image: "/historia2.jpg"
    },
    {
      year: "2019",
      title: "Reconhecimento",
      description: "Fomos eleitos a melhor barbearia da região, consolidando nossa marca como referência em cortes e atendimento.",
      image: "/historia3.jpg"
    },
    {
      year: "2021",
      title: "Franquias",
      description: "Iniciamos nosso processo de expansão com a abertura das primeiras franquias em Campinas, Santos e Ribeirão Preto.",
      image: "/historia4.jpg"
    },
    {
      year: "2024",
      title: "Presente",
      description: "Hoje somos uma rede consolidada, com mais de 10 unidades e uma equipe de profissionais altamente qualificados.",
      image: "/historia5.jpg"
    }
  ];

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
          <h1 className="text-5xl font-bold mb-6 text-gradient">Nossa História</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma jornada de paixão, dedicação e muito estilo. Conheça a trajetória que nos trouxe até aqui.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-red-500"></div>

          {/* Timeline Items */}
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              className={`relative mb-20 flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-400 z-10"></div>

              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <div className="bg-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <span className="text-yellow-400 text-2xl font-bold mb-2 block">{item.year}</span>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Proporcionar uma experiência única de transformação, combinando técnica, 
            estilo e atendimento personalizado para cada cliente.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Qualidade</h3>
              <p className="text-gray-400">
                Comprometimento com a excelência em cada corte e serviço oferecido.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Inovação</h3>
              <p className="text-gray-400">
                Sempre à frente das tendências e técnicas mais modernas do mercado.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Experiência</h3>
              <p className="text-gray-400">
                Ambiente acolhedor e atendimento personalizado para cada cliente.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}