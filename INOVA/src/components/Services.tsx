import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Smartphone, Settings, Palette, ArrowRight, Sparkles } from 'lucide-react';

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      shortDesc: 'Sites e sistemas modernos',
      description: 'Criação de sites e sistemas web sob medida, utilizando as tecnologias mais modernas do mercado para garantir performance e escalabilidade.',
      color: 'from-blue-500 to-blue-600',
      position: 'top-left'
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Mobile',
      shortDesc: 'Apps nativos e híbridos',
      description: 'Desenvolvimento de aplicativos nativos e híbridos para iOS e Android, com foco em experiência do usuário e funcionalidades inovadoras.',
      color: 'from-indigo-500 to-indigo-600',
      position: 'top-right'
    },
    {
      icon: Settings,
      title: 'Soluções Personalizadas',
      shortDesc: 'Software sob medida',
      description: 'Software adaptado às necessidades específicas do seu negócio, desde automação de processos até sistemas de gestão completos.',
      color: 'from-violet-500 to-violet-600',
      position: 'bottom-left'
    },
    {
      icon: Palette,
      title: 'Design UI/UX',
      shortDesc: 'Interfaces que encantam',
      description: 'Design moderno e centrado no usuário, criando interfaces intuitivas e visualmente atraentes que encantam e convertem.',
      color: 'from-purple-500 to-purple-600',
      position: 'bottom-right'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric Patterns */}
        <div className="absolute top-20 right-10 w-64 h-64 border-2 border-blue-100 rounded-full opacity-30 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 border-2 border-purple-100 rounded-full opacity-20 animate-spin-slower"></div>
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgb(59, 130, 246) 1px, transparent 1px),
              linear-gradient(rgb(59, 130, 246) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <line x1="25%" y1="30%" x2="75%" y2="30%" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="25%" y1="70%" x2="75%" y2="70%" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="25%" y1="30%" x2="25%" y2="70%" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="75%" y1="30%" x2="75%" y2="70%" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="25%" y1="30%" x2="75%" y2="70%" stroke="rgba(139, 92, 246, 0.08)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="75%" y1="30%" x2="25%" y2="70%" stroke="rgba(139, 92, 246, 0.08)" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="text-blue-600" size={18} />
            <span className="text-blue-700 text-sm">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-blue-900 mb-4">
            O que Fazemos de Melhor
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 rounded mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Soluções tecnológicas completas para transformar suas ideias em realidade digital
          </p>
        </motion.div>

        {/* Services Diamond Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredIndex === index;
              
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Hexagonal Card */}
                  <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-300 transition-all duration-500 shadow-lg hover:shadow-2xl group-hover:-translate-y-2 min-h-[320px] overflow-hidden">
                    {/* Hover Gradient Overlay */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                    ></motion.div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-[100px] opacity-50"></div>

                    {/* Icon Container */}
                    <motion.div 
                      className="relative z-10 mb-6"
                      animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden`}>
                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={isHovered ? { x: [-100, 200] } : {}}
                          transition={{ duration: 0.6 }}
                        ></motion.div>
                        <Icon className="text-white relative z-10" size={36} />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-blue-600 text-sm mb-4">
                        {service.shortDesc}
                      </p>
                      
                      {/* Description with expand effect */}
                      <AnimatePresence mode="wait">
                        {!isHovered ? (
                          <motion.p
                            key="short"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-gray-600 leading-relaxed line-clamp-3"
                          >
                            {service.description}
                          </motion.p>
                        ) : (
                          <motion.div
                            key="expanded"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            <p className="text-gray-600 leading-relaxed mb-4">
                              {service.description}
                            </p>
                            <div className="flex items-center gap-2 text-blue-600 cursor-pointer group/link">
                              <span>Saiba mais</span>
                              <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-blue-100 rounded-tl-[50px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                      <span className="text-sm">0{index + 1}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Consultancy Section */}
        <motion.div 
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-10 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            {/* Floating Orbs */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-300/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <Settings className="text-white" size={18} />
                <span className="text-sm">Serviço Premium</span>
              </div>
              <h3 className="text-3xl mb-4">
                Consultoria Tecnológica Estratégica
              </h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
                Além do desenvolvimento, oferecemos análise e suporte estratégico em TI para ajudar seu negócio a tomar as melhores decisões tecnológicas e maximizar o retorno dos investimentos.
              </p>
              <button className="bg-white text-blue-700 px-8 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                Agendar Consultoria
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-slower {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slower {
          animation: spin-slower 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
