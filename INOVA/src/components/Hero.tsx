import { Button } from './ui/button';
import { ArrowRight, Code, Terminal, Boxes, Network, Braces, Binary, Cpu, Database, GitBranch } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
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

  // Floating code snippets
  const codeSnippets = [
    { text: 'const', color: 'text-purple-300' },
    { text: 'function', color: 'text-blue-300' },
    { text: '=>', color: 'text-pink-300' },
    { text: '{...}', color: 'text-green-300' },
    { text: '</>>', color: 'text-cyan-300' },
  ];

  // Network nodes
  const networkNodes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1704942764294-25761b3932c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2MTI3MjA2NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Minimalist technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-950/95"></div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Tech Icons */}
        <motion.div 
          className="absolute top-1/4 left-1/4 opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code size={48} className="text-white" />
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/4 opacity-20"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Terminal size={44} className="text-white" />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-1/3 opacity-20"
          animate={{ 
            y: [0, -25, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Database size={40} className="text-white" />
        </motion.div>
        <motion.div 
          className="absolute top-2/3 right-1/3 opacity-20"
          animate={{ 
            y: [0, -18, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <GitBranch size={36} className="text-white" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="text-white space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transformando ideias em soluções digitais.
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Somos uma software house universitária que une inovação, aprendizado e tecnologia para criar o futuro.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                onClick={() => scrollToSection('about')}
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 group"
              >
                Saiba Mais
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                Nossos Serviços
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Tech Illustration */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Container with Holographic Effect */}
              <div className="relative bg-gradient-to-br from-white/30 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
                
                {/* Network Visualization */}
                <div className="relative h-80 mb-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl overflow-hidden border border-white/10">
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                    {networkNodes.map((node, i) => 
                      networkNodes.slice(i + 1).map((targetNode, j) => (
                        <motion.line
                          key={`${i}-${j}`}
                          x1={`${node.x}%`}
                          y1={`${node.y}%`}
                          x2={`${targetNode.x}%`}
                          y2={`${targetNode.y}%`}
                          stroke="rgba(147, 197, 253, 0.3)"
                          strokeWidth="1"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.5 }}
                          transition={{ duration: 2, delay: i * 0.1 + j * 0.05 }}
                        />
                      ))
                    )}
                  </svg>

                  {/* Network Nodes */}
                  {networkNodes.map((node, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-blue-300 rounded-full shadow-lg shadow-blue-400/50"
                      style={{ 
                        left: `${node.x}%`, 
                        top: `${node.y}%`,
                        zIndex: 2
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        boxShadow: [
                          '0 0 10px rgba(147, 197, 253, 0.5)',
                          '0 0 20px rgba(147, 197, 253, 0.8)',
                          '0 0 10px rgba(147, 197, 253, 0.5)'
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}

                  {/* Central Hub Icon */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-2xl shadow-blue-400/50">
                      <Network className="text-white" size={32} />
                    </div>
                  </motion.div>

                  {/* Floating Code Snippets */}
                  {codeSnippets.map((snippet, i) => (
                    <motion.div
                      key={i}
                      className={`absolute ${snippet.color} opacity-60 z-5`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${15 + (i % 3) * 25}%`
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.4, 0.7, 0.4]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    >
                      <code className="text-sm backdrop-blur-sm bg-black/20 px-2 py-1 rounded">
                        {snippet.text}
                      </code>
                    </motion.div>
                  ))}
                </div>

                {/* Code Editor Interface */}
                <div className="space-y-4">
                  <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { width: '75%', color: 'bg-blue-300/40', delay: 0 },
                        { width: '50%', color: 'bg-purple-300/40', delay: 0.1 },
                        { width: '65%', color: 'bg-green-300/40', delay: 0.2 },
                        { width: '85%', color: 'bg-cyan-300/40', delay: 0.3 },
                        { width: '60%', color: 'bg-pink-300/40', delay: 0.4 }
                      ].map((line, i) => (
                        <motion.div
                          key={i}
                          className={`h-2 ${line.color} rounded`}
                          style={{ width: line.width }}
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: line.width, opacity: 1 }}
                          transition={{ duration: 0.8, delay: line.delay + 0.5 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Mini Browser Windows */}
                  <div className="grid grid-cols-3 gap-3">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                        whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
                      >
                        <div className="h-1.5 bg-white/30 rounded w-full mb-2"></div>
                        <div className="h-1 bg-white/20 rounded w-3/4"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg"></div>
              </div>

              {/* Floating Icons Around */}
              <motion.div
                className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Boxes className="text-white" size={24} />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-xl shadow-lg"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Braces className="text-white" size={24} />
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 bg-gradient-to-br from-green-500 to-emerald-500 p-2 rounded-lg shadow-lg"
                animate={{ 
                  x: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4.5, repeat: Infinity }}
              >
                <Binary className="text-white" size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
