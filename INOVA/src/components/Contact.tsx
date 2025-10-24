import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, MapPin, Phone, Send, Linkedin, Github, Instagram } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@inovasociety.com',
      link: 'mailto:contato@inovasociety.com'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (11) 98765-4321',
      link: 'tel:+5511987654321'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Universidade Federal - Campus Central, São Paulo, SP',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', link: '#' },
    { icon: Instagram, label: 'Instagram', link: '#' },
    { icon: Github, label: 'GitHub', link: '#' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl text-white mb-4">Entre em Contato</h2>
            <div className="w-20 h-1 bg-white rounded mx-auto mb-6"></div>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Quer conversar sobre um projeto ou tirar dúvidas? Envie uma mensagem para nossa equipe.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="block p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-white mb-1">{info.title}</h3>
                        <p className="text-blue-200 text-sm">{info.content}</p>
                      </div>
                    </div>
                  </a>
                );
              })}

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="text-white mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                        aria-label={social.label}
                      >
                        <Icon className="text-white group-hover:scale-110 transition-transform" size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="p-8 bg-white rounded-2xl shadow-2xl space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Sobre o que você quer falar?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Descreva seu projeto ou dúvida em detalhes..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="border-gray-300 focus:border-blue-500 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white group"
                  size="lg"
                >
                  Enviar Mensagem
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
