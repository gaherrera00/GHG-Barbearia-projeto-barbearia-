"use client";
import "./home.css";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

// Configuração do Next.js para imagens
const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 90}`
}

function Banner() {
  const { scrollYProgress } = useScroll();
  const bannerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const bannerScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const bannerRef = useRef(null);

  return (
    <motion.div 
      ref={bannerRef}
      className="banner"
      style={{ opacity: bannerOpacity, scale: bannerScale }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Image
        src="/banner.png"
        alt="Barbearia G2 - Estilo e qualidade em cada corte"
        width={1920}
        height={1080}
        priority
        className="banner-image"
        quality={100}
        unoptimized
      />
      <div className="banner-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gradient"
        >
          Barbearia G2
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-shadow"
        >
          Estilo e qualidade em cada corte
        </motion.p>
        <motion.a 
          href="/agenda" 
          className="btn btn-danger"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 77, 77, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Agende Agora
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [isHovered, setIsHovered] = useState(null);

  const depoimento = [
    { nome: "MC Ryan", frase: "Barbearia G2 é braba! Corte na régua e atendimento top. Os caras são visão!", img: "/ryan.jfif" },
    { nome: "MC Kevin", frase: "Barbearia G2 é outro nível! Corte chave e atendimento monstro. Sai de lá transformado!", img: "/kevin.jfif" },
    { nome: "MC IG", frase: "Barbearia G2 é pesada! Corte fino e trato de responsa. Os cria deixa a gente chavão!", img: "/ig.jpg" },
    { nome: "MC LAN", frase: "Barbearia G2 é o pique! Corte monstro e atendimento zika. A nave sai pronta!", img: "/lan.avif" }
  ];

  const destaque = [
    { nome: "Blindado", preco: 50, img: "/blindado1.jpg", descricao: "Corte moderno com degradê perfeito" },
    { nome: "Blindado", preco: 50, img: "/blindado2.jfif", descricao: "Estilo único com acabamento impecável" },
    { nome: "Blindado", preco: 50, img: "/blindado3.jpg", descricao: "Tendência do momento com toque especial" },
  ];

  const franquia = [
    { cidade: "Campinas", img: "/barber1.jpg", historia: "Um ex-cliente virou franqueado e transformou a unidade em um ponto elegante no Cambuí, com foco em networking e cortes modernos." },
    { cidade: "Santos", img: "/barber2.jpg", historia: "Dois irmãos surfistas abriram uma barbearia com clima praiano, café artesanal e eventos culturais, a poucos passos da praia." },
    { cidade: "Ribeirão Preto", img: "/barber3.jpg", historia: "Um barbeiro local famoso abriu a unidade com estilo rústico e vibe acolhedora, atraindo de fazendeiros a universitários." }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="main-content">
      <Banner />

      <motion.section 
        className="agendamento"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Agende seu horário conosco!</h2>
        <p className="section-description">Escolha o melhor dia e horário para ser atendido com todo o cuidado que você merece.</p>
        <motion.a 
          href="/agenda" 
          className="btn btn-danger"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 77, 77, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Agende Agora
        </motion.a>
      </motion.section>

      <motion.section 
        className="servicos"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="section-title">Cortes do momento</h2>
        <div className="container">
          <div className="row g-4">
            {destaque.map((item, index) => (
              <motion.div 
                className="col-md-4" 
                key={index}
                variants={fadeIn}
              >
                <div 
                  className="card"
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="card-image-container">
                    <Image
                      src={item.img}
                      alt={`Corte ${item.nome} - ${item.descricao}`}
                      width={400}
                      height={300}
                      className="card-img-top"
                      quality={90}
                      unoptimized
                      loading="eager"
                    />
                    {isHovered === index && (
                      <motion.div 
                        className="card-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <p>{item.descricao}</p>
                      </motion.div>
                    )}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.nome}</h5>
                    <p className="card-price">R$ {item.preco}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="depoimentos"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="section-title">Depoimentos</h2>
        <div className="container">
          <div className="row">
            {depoimento.map((item, index) => (
              <motion.div 
                className="col-md-4" 
                key={index}
                variants={fadeIn}
              >
                <div className="card">
                  <div className="card-header">
                    <Image
                      src={item.img}
                      alt={`Depoimento de ${item.nome}`}
                      width={120}
                      height={120}
                      className="rounded-circle"
                      quality={90}
                      unoptimized
                      loading="eager"
                    />
                    <h5 className="mt-3">Depoimento de {item.nome}</h5>
                  </div>
                  <div className="card-body">
                    <blockquote>
                      <p>{item.frase}</p>
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="fotos"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="section-title">Nossas Franquias</h2>
        <div className="container">
          {franquia.map((item, index) => (
            <motion.div 
              className="card mb-4" 
              key={index}
              variants={fadeIn}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src={item.img}
                    alt={`Franquia de ${item.cidade}`}
                    width={400}
                    height={300}
                    className="img-fluid rounded-start"
                    quality={90}
                    unoptimized
                    loading="eager"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Franquia de {item.cidade}</h5>
                    <p className="card-text">{item.historia}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="resumo"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>
          Nossa barbearia é mais do que um lugar para cortar cabelo — é uma experiência. 
          Com um ambiente moderno e estiloso, atendimento de qualidade e serviços que vão 
          do clássico ao mais atualizado, nós nos destacamos no mercado.
          <br /><br />
          Com franquias em Campinas, Santos e Ribeirão Preto, cada unidade tem sua identidade 
          própria, mas todas compartilham a mesma essência: um espaço onde nossos clientes 
          saem não só com um corte impecável, mas também com uma experiência única.
          <br /><br />
          Seja para um degradê afiado, barba alinhada ou aquele papo descontraído, nossa 
          barbearia é o ponto de encontro de quem valoriza estilo e qualidade.
        </p>
      </motion.section>
    </main>
  );
}
