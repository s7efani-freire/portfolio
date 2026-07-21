import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { CONTACT } from '../constants/contact';

function Contact() {
  return (
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
            Estou sempre aberta a novas oportunidades e projetos interessantes. Vamos conversar sobre como posso ajudar a transformar
            suas ideias em realidade!
          </p>

          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))' }}>
            <a
              href={CONTACT.phoneHref}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-purple-700/40 hover:border-orange-500/60 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <Phone size={32} className="mx-auto mb-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-300 group-hover:scale-110 transform transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Telefone</h3>
              <p className="text-gray-300 text-center">{CONTACT.phoneDisplay}</p>
            </a>

            <a
              href={CONTACT.emailHref}
              className="min-w-[14rem] bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-purple-700/40 hover:border-orange-500/60 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <Mail size={32} className="mx-auto mb-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-300 group-hover:scale-110 transform transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300 text-center">{CONTACT.email}</p>
            </a>

            <a
              href={CONTACT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-purple-700/40 hover:border-orange-500/60 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <Github size={32} className="mx-auto mb-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-300 group-hover:scale-110 transform transition-transform" />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300 text-center">{CONTACT.githubHandle}</p>
            </a>

            <a
              href={CONTACT.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-purple-700/40 hover:border-orange-500/60 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <Linkedin size={32} className="mx-auto mb-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-300 group-hover:scale-110 transform transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Linkedin</h3>
              <p className="text-gray-300 text-center">{CONTACT.linkedinHandle}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
