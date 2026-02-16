'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center pt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
          >
            Olá, sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Vasco Ferreira</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Desenvolvedor Web & IT | Full Stack Developer
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Crio soluções web modernas, responsivas e escaláveis com foco em performance e experiência do utilizador.
          </motion.p>

          <motion.div
            variants={item}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition transform hover:scale-105"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition"
            >
              Contactar
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <svg
            className="w-6 h-6 mx-auto text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
