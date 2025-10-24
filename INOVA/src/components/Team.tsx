import { Card } from './ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Team() {
  const teamMembers = [
    {
        name: 'Fernando Ribeiro',
      role: 'CEO & Co-fundador',
      area: 'Desenvolvedor e Gestão',
      initials: 'FR',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Rafael Santos',
      role: 'CTO',
      area: 'Arquitetura de Software',
      initials: 'RS',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      name: 'Beatriz Oliveira',
      role: 'Designer UI/UX',
      area: 'Design de Interfaces',
      initials: 'BO',
      color: 'from-violet-500 to-violet-600'
    },
    {
      name: 'Lucas Mendes',
      role: 'Desenvolvedor Full Stack',
      area: 'Desenvolvimento Web',
      initials: 'LM',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Camila Rodrigues',
      role: 'Desenvolvedora Front-end',
      area: 'React & TypeScript',
      initials: 'CR',
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: 'Pedro Almeida',
      role: 'Desenvolvedor Back-end',
      area: 'Node.js & Databases',
      initials: 'PA',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Mariana Costa',
      role: 'Gestora de Projetos',
      area: 'Metodologias Ágeis',
      initials: 'MC',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      name: 'Gabriel Ferreira',
      role: 'Desenvolvedor Mobile',
      area: 'React Native',
      initials: 'GF',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-blue-900 mb-4">Nosso Time</h2>
          <div className="w-20 h-1 bg-blue-600 rounded mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conheça os talentos que fazem a Inova Society acontecer
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-100 group cursor-pointer"
            >
              {/* Avatar */}
              <div className="mb-4">
                <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-white text-2xl">{member.initials}</span>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl text-blue-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-500 text-sm mb-4">{member.area}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} className="text-blue-600" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} className="text-blue-600" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail size={16} className="text-blue-600" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
