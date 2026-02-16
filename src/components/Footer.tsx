export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Vasco.dev</h3>
            <p className="text-gray-400">
              Desenvolvedor Web & IT focado em criar soluções modernas e escaláveis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-blue-400 transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/vascoferreira2001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition text-2xl"
              >
                🐙
              </a>
              <a
                href="https://linkedin.com/in/vascoferreira2001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition text-2xl"
              >
                💼
              </a>
              <a
                href="mailto:vasco.ferreira@montfer.com"
                className="text-gray-400 hover:text-blue-400 transition text-2xl"
              >
                ✉️
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Vasco Ferreira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
