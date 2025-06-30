import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, ExternalLink, Briefcase, ChevronDown, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition <offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const experiences = [

    {
      "title": "Arquiteta de Soluções de TI / Tech Lead",
      "company": "Teiú Indústria e Comércio LTDA",
      "period": " Junho 2025- o momento",
      "description": "Liderança técnica de equipe de desenvolvimento de software, atuando na definição de arquiteturas de sistemas, escolhas tecnológicas e boas práticas de engenharia. Responsável por soluções escaláveis e integradas, com foco em performance, manutenção e alinhamento com as necessidades do negócio.",
      "skills": ["Arquitetura de Software", "Liderança Técnica", "TypeScript", "Tailwind CSS", "Laravel", "PHP", "SQL", "Git", "IIS Server", "MySQL"]
    },

    {
      title: "Desenvolvedora Web",
      company: "Teiú Indústria e Comércio LTDA",
      period: "Junho 2024 - Junho 2025",
      description: "Desenvolvimento de sistemas web utilizando tecnologias front-end, back-end, banco de dados e gerenciamento de servidores. Foco em criar soluções que fazem a diferença.",
      skills: ['JavaScript', 'Boostrap', 'Laravel', 'PHP', 'SQL', 'Git', 'IIS Server', 'MySQL']
    },
    {
      title: "Técnica de Eletrônica",
      company: "Teiú Indústria e Comércio LTDA",
      period: "Junho 2022 - Junho 2024",
      description: "Desenvolvimento de sistemas voltados para automação e integração com hardware, incluindo criação de rotinas, apoio em sistemas embarcados e prototipagem de circuitos eletrônicos.",
      skills: ['Automação', 'Esp32', 'MicroPhyton', 'HTML5', 'CSS3', 'PHP', 'Ubuntu Server', 'MariaDB']
    }
  ];

  const projects = [
    {
      title: "Meteor Blaster",
      description: "Um mini game divertido onde o jogador pilota uma nave para destruir meteoros e acumular pontos. Desenvolvido com foco em lógica de colisão e controle de movimentos.",
      tech: ["React", "Node.js", "Typescript", "Tailwind CSS"],
      image: "/img/meteor_blaster.png",
      link: "https://game-ship.vercel.app"
    },
    {
      title: "Reserva Florestal",
      description: "Site institucional desenvolvido com React + TypeScript, usando Vite e Tailwind CSS. Apresenta informações sobre eventos, horários, atrações e notícias da reserva, com um formulário de contato integrado e layout responsivo.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      image: "/img/reserva_florestal.png",
      link: "https://seusite.com/meteor-blaster"
    },
    {
      title: "Portfolio Website",
      description: "Website responsivo e moderno para apresentação de portfólio profissional. Design elegante e performance otimizada.",
      tech: ["React", "CSS3", "JavaScript", "Responsive Design"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://seusite.com/meteor-blaster"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-black text-white relative overflow-hidden">
      {/* Animated Background with Moving Circles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large moving circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/15 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/20 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/12 rounded-full animate-float-slow-reverse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-purple-700/18 rounded-full animate-float-medium-reverse"></div>

        {/* Medium circles */}
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-orange-500/10 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-purple-600/15 rounded-full animate-float-fast-reverse"></div>

        {/* Small floating circles */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-orange-600/12 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-purple-600/18 rounded-full animate-float-fast"></div>
        <div className="absolute top-2/3 left-1/6 w-40 h-40 bg-orange-500/8 rounded-full animate-float-slow"></div>

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-purple-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/img/logo.png" alt="Logo" className="w-full h-full object-contain animate-pulse-slow" />
              </div>
              <span className="text-xl font-bold">Stéfani Freire</span>
            </div>


            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 hover:text-orange-500 ${activeSection === item ? 'text-orange-500 border-b-2 border-orange-500' : ''
                    }`}
                >
                  {item === 'home' ? 'Início' :
                    item === 'about' ? 'Sobre' :
                      item === 'experience' ? 'Experiência' :
                        item === 'projects' ? 'Projetos' : 'Contato'}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-800/40">
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize hover:text-orange-500 transition-colors duration-300"
                >
                  {item === 'home' ? 'Início' :
                    item === 'about' ? 'Sobre' :
                      item === 'experience' ? 'Experiência' :
                        item === 'projects' ? 'Projetos' : 'Contato'}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <img src="/img/logo.png" alt="Logo" className="w-full h-full object-contain animate-pulse-slow" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              STÉFANI FREIRE
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 mb-4 font-medium">Tech Lead</p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Arquitetura de soluções de Tecnologia da Informação.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <a href="tel:+5577999158332" className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 group">
              <Phone size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>(77) 9 9915-8332</span>
            </a>
            <a href="mailto:stefani7freire@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 group">
              <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>stefani7freire@gmail.com</span>
            </a>
            <a href="https://github.com/s7efani-freire" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 group">
              <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>s7efani-freire</span>
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-orange-400 hover:text-orange-300 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                Sou Tech Lead, dedicada a criar soluções que tornam o trabalho das pessoas mais fácil e eficiente. Atualmente, <span className="text-orange-400 font-semibold">lidero uma equipe de desenvolvimento de software </span> em uma indústria em Vitória da Conquista - BA, onde valorizo o esforço conjunto e a colaboração como pilares do sucesso. Acredito no aprendizado constante e acredito que toda pessoa tem algo a nos ensinar.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Tenho experiência no planejamento, coordenação e desenvolvimento de projetos diversos, desde jogos para campanhas de marketing até sistemas robustos de monitoramento de produção com relatórios detalhados. Essa variedade de desafios me permitiu aprimorar minhas habilidades e adaptar <span className="text-orange-400 font-semibold">soluções para diferentes necessidades</span>, sempre com foco na eficiência e qualidade.
              </p>

              <p className="text-orange-400 font-medium italic">
                "Acredito no crescimento contínuo e me empenho para ser, a cada dia, uma versão melhor de mim mesma do que fui ontem."
              </p>
              <div className="flex flex-wrap gap-3">
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-r from-purple-700/30 to-orange-600/30 rounded-full flex items-center justify-center border border-orange-500/40 relative">
                <img src="/img/profile.png" alt="Foto de perfil" className="w-[95%] h-[95%] object-cover rounded-full z-10" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/15 to-orange-500/15 animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              Experiência
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-purple-700/40 hover:border-orange-500/60 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Briefcase size={24} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-orange-400 font-medium mb-2">{exp.company} • {exp.period}</p>
                    <p className="text-gray-200 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-800/60 rounded-full text-sm border border-orange-500/40 hover:border-orange-500/80 transition-colors duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              Projetos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-700/40 hover:border-orange-500/60 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="h-48 bg-gradient-to-r from-purple-700/30 to-orange-600/30 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/15 to-orange-500/15"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800/60 rounded text-xs border border-orange-500/40 hover:border-orange-500/80 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform">
                    <ExternalLink size={16} />
                    <span>Ver Projeto</span>
                  </a>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Estou sempre aberta a novas oportunidades e projetos interessantes.
              Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade!
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <a href="tel:+5577999158332" className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-purple-700/40 hover:border-orange-500/60 transition-all duration-300 hover:transform hover:scale-105 group">
                <Phone size={32} className="mx-auto mb-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-300 group-hover:scale-110 transform transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Telefone</h3>
                <p className="text-gray-300">(77) 9 9915-8332</p>
              </a>

              <a href="mailto:stefani7freire@gmail.com" className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-purple-700/40 hover:border-orange-500/60 transition-all duration-300 hover:transform hover:scale-105 group">
                <Mail size={32} className="mx-auto mb-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-300 group-hover:scale-110 transform transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-300 text-xs text-center">stefani7freire@gmail.com</p>
              </a>

              <a href="https://github.com/s7efani-freire" target="_blank" rel="noopener noreferrer" className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-purple-700/40 hover:border-orange-500/60 transition-all duration-300 hover:transform hover:scale-105 group">
                <Github size={32} className="mx-auto mb-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-300 group-hover:scale-110 transform transition-transform" />
                <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                <p className="text-gray-300">s7efani-freire</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-800/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2025 Stéfani Freire.
          </p>
          <p className="text-orange-400 text-sm mt-2 italic">
            "Nem todo update é de software. Tudo se desenvolve."
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;