'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre Mim</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur-2xl opacity-50"></div>
              <div className="relative bg-slate-900 p-8 rounded-lg">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Olá! Sou Vasco Ferreira, um desenvolvedor web apaixonado por criar 
                  experiências digitais excepcionais. Com formação em Ciências da Comunicação 
                  e especialização em Técnicas de Audiovisuais, trouxe uma perspectiva única 
                  para o desenvolvimento web.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Atualmente, estou a focar-me em Desenvolvimento Web e IT, dominando 
                  tecnologias modernas como React, Next.js, Node.js e ferramentas cloud. 
                  Sou um aprendiz contínuo que gosta de enfrentar novos desafios.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Quando não estou a programar, estou a explorar novas tecnologias, 
                  contribuindo para projetos open-source ou compartilhando conhecimento.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-blue-400 transition">
              <h3 className="text-blue-400 text-2xl font-bold mb-2">5+</h3>
              <p className="text-gray-300">Projetos Concluídos</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-blue-400 transition">
              <h3 className="text-blue-400 text-2xl font-bold mb-2">3+</h3>
              <p className="text-gray-300">Anos Experiência</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-blue-400 transition">
              <h3 className="text-blue-400 text-2xl font-bold mb-2">10+</h3>
              <p className="text-gray-300">Tecnologias</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-blue-400 transition">
              <h3 className="text-blue-400 text-2xl font-bold mb-2">🚀</h3>
              <p className="text-gray-300">Always Learning</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
