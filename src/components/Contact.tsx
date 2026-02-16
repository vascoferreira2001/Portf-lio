'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o email
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactLinks = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'vasco.ferreira@montfer.com',
      href: 'mailto:vasco.ferreira@montfer.com',
    },
    {
      icon: '📱',
      label: 'Telefone',
      value: '+351 964 462 573',
      href: 'tel:+351964462573',
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'linkedin.com/in/vascoferreira2001',
      href: 'https://linkedin.com/in/vascoferreira2001',
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/vascoferreira2001',
      href: 'https://github.com/vascoferreira2001',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Entrem em Contacto</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Informações de Contacto</h3>

            <div className="space-y-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' && link.label !== 'Telefone' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-400 transition group"
                >
                  <span className="text-3xl">{link.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-blue-400 transition">
                      {link.label}
                    </h4>
                    <p className="text-gray-400">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition"
                  placeholder="seu.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105"
              >
                {submitted ? 'Enviado! ✓' : 'Enviar Mensagem'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
