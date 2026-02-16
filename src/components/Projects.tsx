'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plataforma de e-commerce completa com carrinhos de compras, pagamentos e dashboard de admin.',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '🛍️',
    link: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplicação web para gestão de tarefas com funcionalidades de colaboração em tempo real.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    image: '✅',
    link: '#',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Dashboard de análise de dados com gráficos interativos e relatórios em tempo real.',
    technologies: ['Next.js', 'Chart.js', 'API REST', 'PostgreSQL'],
    image: '📊',
    link: '#',
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'Rede social com funcionalidades de posts, comentários, likes e sistema de notificações.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: '👥',
    link: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projetos em Destaque</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              variants={itemVariants}
              className="group relative bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-400 transition"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition duration-300"></div>

              <div className="relative p-8">
                <div className="text-6xl mb-4">{project.image}</div>

                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition">
                  Ver Projeto <span>→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
