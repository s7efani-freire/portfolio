function About() {
  return (
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
              Sou Tech Lead, dedicada a criar soluções que tornam o trabalho das pessoas mais fácil e eficiente. Atualmente,{' '}
              <span className="text-orange-400 font-semibold">lidero uma equipe de desenvolvimento de software </span>
              em uma indústria em Vitória da Conquista - BA, onde valorizo o esforço conjunto e a colaboração como pilares do sucesso.
              Acredito no aprendizado constante e acredito que toda pessoa tem algo a nos ensinar.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Tenho experiência no planejamento, coordenação e desenvolvimento de projetos em diversos setores da empresa onde atuo,
              como marketing, comercial, produção e qualidade. Essa diversidade de frentes me proporcionou uma visão ampla do negócio e
              fortaleceu minha capacidade de adaptar{' '}
              <span className="text-orange-400 font-semibold">soluções sob medida para diferentes demandas</span>, sempre priorizando a
              eficiência e a qualidade.
            </p>

            <p className="text-orange-400 font-medium italic">
              "Acredito no crescimento contínuo e me empenho para ser, a cada dia, uma versão melhor de mim mesma do que fui ontem."
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-r from-purple-700/30 to-orange-600/30 rounded-full flex items-center justify-center border border-orange-500/40 relative">
              <img
                src="/img/profile.png"
                alt="Foto de perfil"
                width={320}
                height={320}
                loading="lazy"
                className="w-[95%] h-[95%] object-cover rounded-full z-10"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/15 to-orange-500/15 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
