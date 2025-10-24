import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Buscamos sempre as tecnologias mais modernas e soluções criativas'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalhamos em equipe para entregar os melhores resultados'
    },
    {
      icon: Target,
      title: 'Excelência',
      description: 'Comprometimento com qualidade em cada projeto desenvolvido'
    },
    {
      icon: Award,
      title: 'Aprendizado',
      description: 'Crescimento constante através da experiência prática'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759844197486-5b3612c7d534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxMjU0NjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipe Inova Society trabalhando em colaboração"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div>
              <h2 className="text-4xl text-blue-900 mb-4">Quem Somos</h2>
              <div className="w-20 h-1 bg-blue-600 rounded"></div>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              A <strong>Inova Society</strong> é uma empresa júnior universitária especializada em desenvolvimento de software. 
              Nascemos da vontade de conectar estudantes talentosos com o mercado real, proporcionando experiências práticas 
              que transformam aprendizado em resultados concretos.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Atuamos como uma ponte entre a universidade e o mundo empresarial, oferecendo soluções tecnológicas 
              personalizadas enquanto desenvolvemos as habilidades técnicas e profissionais de nossos membros.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className="p-4 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors"
                  >
                    <Icon className="text-blue-600 mb-2" size={28} />
                    <h3 className="text-blue-900 mb-1">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
