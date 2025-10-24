import { Linkedin, Instagram, Github, Mail } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const footerLinks = [
    { label: 'Início', id: 'hero' },
    { label: 'Serviços', id: 'services' },
    { label: 'Equipe', id: 'team' },
    { label: 'Contato', id: 'contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', link: '#' },
    { icon: Instagram, label: 'Instagram', link: '#' },
    { icon: Github, label: 'GitHub', link: '#' },
    { icon: Mail, label: 'E-mail', link: 'mailto:contato@inovasociety.com' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white">IS</span>
              </div>
              <span className="text-xl">Inova Society</span>
            </div>
            <p className="text-blue-200 mb-4 max-w-md">
              Empresa Júnior de Desenvolvimento de Software. Transformando ideias em soluções digitais através da inovação e tecnologia.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="text-blue-200 group-hover:text-white group-hover:scale-110 transition-all" size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-blue-200 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contato</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="mailto:contato@inovasociety.com" className="hover:text-white transition-colors">
                  contato@inovasociety.com
                </a>
              </li>
              <li>
                <a href="tel:+5511987654321" className="hover:text-white transition-colors">
                  +55 (11) 98765-4321
                </a>
              </li>
              <li className="text-sm">
                Universidade Federal<br />
                Campus Central, São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-blue-200 text-sm">
          <p>© 2025 Inova Society — Empresa Júnior de Desenvolvimento de Software. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
