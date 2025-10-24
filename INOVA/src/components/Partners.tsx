import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function Partners() {
  // Mock partner logos - in a real scenario, these would be actual company logos
  const partners = [
    { name: 'Tech Solutions', abbr: 'TS', color: 'from-blue-500 to-blue-600' },
    { name: 'Digital Ventures', abbr: 'DV', color: 'from-indigo-500 to-indigo-600' },
    { name: 'Innovation Hub', abbr: 'IH', color: 'from-violet-500 to-violet-600' },
    { name: 'StartUp Accel', abbr: 'SA', color: 'from-purple-500 to-purple-600' },
    { name: 'Cloud Systems', abbr: 'CS', color: 'from-cyan-500 to-cyan-600' },
    { name: 'Dev Academy', abbr: 'DA', color: 'from-teal-500 to-teal-600' },
    { name: 'Future Tech', abbr: 'FT', color: 'from-sky-500 to-sky-600' },
    { name: 'Smart Business', abbr: 'SB', color: 'from-blue-600 to-blue-700' },
  ];

  // Duplicate for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="text-blue-600" size={18} />
            <span className="text-blue-700 text-sm">Parcerias Estratégicas</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-blue-900 mb-4">
            Empresas que Acreditam no Nosso Potencial
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 rounded mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Conectados com organizações inovadoras que compartilham nossa visão de transformação digital e crescimento tecnológico.
          </p>
        </motion.div>

        {/* Infinite Scroll Partners Carousel */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-50 via-blue-50/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-50 via-blue-50/80 to-transparent z-10 pointer-events-none"></div>

          {/* Main Carousel */}
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -1600]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.abbr}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="w-48 h-32 bg-white rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:border-blue-300 hover:-translate-y-2 cursor-pointer">
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-2 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white text-xl">{partner.abbr}</span>
                      </div>
                      <p className="text-gray-700 group-hover:text-blue-700 transition-colors">
                        {partner.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Reverse Direction */}
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [-1600, 0]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
            >
              {duplicatedPartners.reverse().map((partner, index) => (
                <div
                  key={`reverse-${partner.abbr}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="w-48 h-32 bg-gradient-to-br from-white to-blue-50/30 rounded-2xl border-2 border-blue-100/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:border-blue-300 hover:-translate-y-2 cursor-pointer backdrop-blur-sm">
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-2 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white text-xl">{partner.abbr}</span>
                      </div>
                      <p className="text-gray-700 group-hover:text-blue-700 transition-colors">
                        {partner.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-2xl shadow-xl">
            <div className="bg-white rounded-2xl px-8 py-6">
              <p className="text-gray-700 text-lg mb-4">
                Sua empresa quer fazer parte dessa rede de inovação?
              </p>
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Torne-se um Parceiro
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { number: '15+', label: 'Parceiros Ativos' },
            { number: '50+', label: 'Projetos Conjuntos' },
            { number: '100%', label: 'Satisfação' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
