import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiArrowDown } from "react-icons/hi";
import avatar from "../assets/theo.jpg";

export default function Hero() {
  // 🔗 TES VRAIS LIENS
  const socialLinks = [
    { 
      Icon: FaGithub, 
      href: "https://github.com/Theo09-star",
      label: "GitHub"
    },
    { 
      Icon: FaLinkedin, 
      href: "https://www.linkedin.com/in/theodoros-lokossa-853760316?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      label: "LinkedIn"
    },
    { 
      Icon: HiMail, 
      href: "mailto:lokossatheodoros@gmail.com",
      label: "Email"
    },
  ];

  // ✨ MOTS-CLÉS QUI APPARAISSENT/DISPARAISSENT
  const floatingWords = [
    { text: "Acharné", position: { top: '15%', left: '8%' }, delay: 0 },
    { text: "Déterminé", position: { top: '25%', right: '5%' }, delay: 1.5 },
    { text: "Rigoureux", position: { top: '45%', left: '3%' }, delay: 3 },
    { text: "Engagé", position: { bottom: '35%', right: '3%' }, delay: 4.5 },
    { text: "Excellent", position: { top: '55%', right: '8%' }, delay: 6 },
    { text: "Dévoué", position: { bottom: '25%', left: '5%' }, delay: 7.5 },
    { text: "Confiance", position: { top: '60%', left: '12%' }, delay: 9 },
    { text: "Passionné", position: { bottom: '15%', right: '10%' }, delay: 10.5 },
    { text: "Créatif", position: { top: '20%', left: '45%' }, delay: 12 },
    { text: "Innovant", position: { bottom: '40%', left: '40%' }, delay: 13.5 },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-20 pb-24 sm:pb-32 bg-black w-full"
    >
      {/* ✨ MOTS-CLÉS FLOTTANTS - Apparaissent partout dans le hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {floatingWords.map((word, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1, 0.8],
              y: [10, 0, -5, -20],
            }}
            transition={{
              duration: 4,
              delay: word.delay,
              repeat: Infinity,
              repeatDelay: 12,
              ease: "easeInOut",
              times: [0, 0.2, 0.7, 1]
            }}
            style={{
              position: 'absolute',
              ...word.position,
            }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Effet glow doré */}
              <div 
                className="absolute inset-0 blur-xl opacity-50"
                style={{
                  background: 'radial-gradient(circle, rgba(255,215,0,0.6) 0%, transparent 70%)',
                }}
              ></div>
              
              {/* Le mot */}
              <span 
                className="relative font-mono text-accent text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase"
                style={{
                  textShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)',
                }}
              >
                {word.text}
              </span>

              {/* Petit point décoratif */}
              <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-accent rounded-full"></span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grille subtile en fond */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl w-full mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* COLONNE GAUCHE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="lg:col-span-3 order-2 lg:order-1 space-y-3 text-center lg:text-left px-2"
          >
            <div className="h-[2px] w-16 sm:w-20 bg-accent mb-4 mx-auto lg:mx-0"></div>
            <p className="font-mono text-accent text-xs tracking-widest">
              {"< DÉVELOPPEUR />"}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Full Stack
              <br />
              <span className="text-accent">& Web Developer</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm pt-2">
              Basé à Cotonou 🇧🇯
            </p>
          </motion.div>

          {/* COLONNE CENTRE (AVATAR + NOM) */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative flex flex-col items-center justify-center w-full">
            
            {/* 💬 BULLE DE DIALOGUE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0, rotate: -15 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: -5,
                y: [0, -8, 0]
              }}
              transition={{ 
                opacity: { delay: 2, duration: 0.5 },
                scale: { delay: 2, duration: 0.5, type: "spring", stiffness: 150 },
                rotate: { delay: 2, duration: 0.5 },
                y: { 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "easeInOut",
                  delay: 3
                }
              }}
              className="absolute top-[35%] sm:top-[38%] md:top-[35%] lg:top-[32%] right-[5%] sm:right-[8%] md:right-[12%] lg:right-[15%] z-40 pointer-events-none hidden sm:block"
            >
              <div className="relative">
                <div className="relative bg-accent text-black px-5 py-3 rounded-2xl shadow-2xl">
                  <div className="flex items-center gap-2 text-sm md:text-base font-bold">
                    <span 
                      style={{ 
                        fontFamily: "'Dancing Script', cursive", 
                        fontSize: '1.8em', 
                        lineHeight: '1',
                        fontWeight: '600'
                      }}
                    >
                      heyyy
                    </span>
                    <motion.span
                      animate={{ rotate: [0, 20, -10, 20, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2, 
                        ease: "easeInOut",
                        delay: 3
                      }}
                      style={{ 
                        display: 'inline-block', 
                        transformOrigin: 'bottom right',
                        fontSize: '1.3em'
                      }}
                    >
                      👋
                    </motion.span>
                  </div>

                  <div className="flex gap-1 justify-center mt-1.5">
                    {[0, 0.2, 0.4].map((delay, i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          delay: delay + 2.5,
                          ease: "easeInOut"
                        }}
                        className="w-1.5 h-1.5 bg-black rounded-full"
                      />
                    ))}
                  </div>

                  <div 
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
                    style={{
                      borderLeft: '10px solid transparent',
                      borderRight: '10px solid transparent',
                      borderTop: '12px solid #FFD700',
                    }}
                  ></div>

                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div 
                      className="absolute top-0 left-0 w-full h-full opacity-40"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 50%)',
                      }}
                    ></div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-accent/50 blur-2xl -z-10 rounded-2xl scale-90"></div>
              </div>
            </motion.div>

            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 60,
                delay: 0.2,
              }}
              className="relative z-20 w-full flex justify-center"
            >
              <div className="relative w-[280px] sm:w-[380px] md:w-[480px] lg:w-[580px]">
                <img
                  src={avatar}
                  alt="LOKOSSA Theodoros"
                  className="w-full h-auto object-contain"
                  style={{
                    maskImage: "radial-gradient(ellipse at center, black 50%, transparent 95%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 95%)",
                  }}
                />
                
                <div className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none" style={{ background: "linear-gradient(to top, #000000 0%, #000000 30%, transparent 100%)" }}></div>
                <div className="absolute top-0 bottom-0 left-0 w-1/4 pointer-events-none" style={{ background: "linear-gradient(to right, #000000 0%, #000000 20%, transparent 100%)" }}></div>
                <div className="absolute top-0 bottom-0 right-0 w-1/4 pointer-events-none" style={{ background: "linear-gradient(to left, #000000 0%, #000000 20%, transparent 100%)" }}></div>
                <div className="absolute top-0 left-0 right-0 h-1/5 pointer-events-none" style={{ background: "linear-gradient(to bottom, #000000 0%, transparent 100%)" }}></div>
              </div>
            </motion.div>

            {/* NOM SUPERPOSÉ */}
            <div className="relative -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-44 z-30 text-center w-full pointer-events-none px-2">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="font-signature text-accent mb-2"
                style={{ 
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  lineHeight: '0.8',
                  letterSpacing: '0.02em'
                }}
              >
                Lokossa
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, type: "spring" }}
                className="text-[70px] sm:text-[110px] md:text-[150px] lg:text-[200px] font-black leading-none tracking-tighter"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span className="text-accent">TH</span>
                <span className="text-white/95">EO</span>
              </motion.h1>
            </div>
          </div>

          {/* COLONNE DROITE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="lg:col-span-3 order-3 space-y-3 sm:space-y-4 text-center lg:text-right px-2"
          >
            <div className="h-[2px] w-16 sm:w-20 bg-accent mb-4 mx-auto lg:ml-auto lg:mr-0"></div>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              Salut, moi c'est{" "}
              <span className="text-accent font-bold">Theodoros</span>,
              développeur Full Stack passionné.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Avec moi, vos projets deviennent réalité. Je transforme vos idées
              en solutions concrètes, modernes et performantes.
            </p>
            <p className="text-gray-500 text-xs pt-2 italic">
              "Le code, c'est ma façon de créer de la magie."
            </p>
          </motion.div>
        </div>

        {/* DÉFILEMENT TECHNOS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-12 sm:mt-16 w-full relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll whitespace-nowrap py-4">
            {[...Array(2)].map((_, dupIndex) => (
              <div 
                key={dupIndex} 
                className="flex items-center gap-10 sm:gap-14 md:gap-20 pr-10 sm:pr-14 md:pr-20"
              >
                {[
                  { name: "React", color: "text-cyan-400" },
                  { name: "Node.js", color: "text-green-400" },
                  { name: "PHP", color: "text-purple-400" },
                  { name: "Laravel", color: "text-red-400" },
                  { name: "PostgreSQL", color: "text-blue-400" },
                  { name: "Tailwind", color: "text-teal-400" },
                  { name: "Git", color: "text-orange-400" },
                  { name: "JavaScript", color: "text-yellow-400" },
                  { name: "HTML/CSS", color: "text-pink-400" },
                  { name: "MySQL", color: "text-blue-300" },
                ].map((tech) => (
                  <span
                    key={`${dupIndex}-${tech.name}`}
                    className={`text-base sm:text-lg md:text-xl font-bold ${tech.color} hover:scale-125 transition-transform cursor-default whitespace-nowrap`}
                    style={{
                      textShadow: '0 0 20px currentColor',
                      opacity: 0.9
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* BOUTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="mt-8 sm:mt-10 flex flex-wrap gap-4 justify-center px-4"
        >
          <div className="btn-attract">
            <a
              href="#projects"
              className="btn-pulse inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-accent text-black text-sm sm:text-base font-bold rounded-full hover:scale-105 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Voir mes projets</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                →
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>

          <a
            href="#contact"
            className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-accent text-accent text-sm sm:text-base font-bold rounded-full hover:bg-accent hover:text-black transition-all"
          >
            Me contacter
          </a>
        </motion.div>

        {/* ✅ RÉSEAUX SOCIAUX AVEC VRAIS LIENS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7 }}
          className="mt-6 flex justify-center gap-3"
        >
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2.5 sm:p-3 border border-white/20 rounded-full hover:border-accent hover:text-accent transition"
            >
              <social.Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* FLÈCHE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 3, duration: 0.5 },
          y: { repeat: Infinity, duration: 2 },
        }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <HiArrowDown className="text-accent" size={26} />
      </motion.div>
    </section>
  );
}