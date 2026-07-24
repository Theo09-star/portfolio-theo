import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp, 
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiArrowUp,
  HiHeart,
  HiCode
} from "react-icons/hi";
import { HiSparkles } from "react-icons/hi2";

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("lokossatheodoros@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Développement Web",
    "Applications Full Stack",
    "Design UI/UX",
    "Montage Vidéo",
    "Photographie",
  ];

  // ✅ TES VRAIS LIENS SOCIAUX
  const socials = [
    { 
      Icon: FaGithub, 
      href: "https://github.com/Theo09-star", 
      label: "GitHub", 
      color: "hover:text-white" 
    },
    { 
      Icon: FaLinkedin, 
      href: "https://www.linkedin.com/in/theodoros-lokossa-853760316?utm_source=share_via&utm_content=profile&utm_medium=member_android", 
      label: "LinkedIn", 
      color: "hover:text-blue-400" 
    },
    { 
      Icon: HiMail, 
      href: "mailto:lokossatheodoros@gmail.com", 
      label: "Email", 
      color: "hover:text-accent" 
    },
    { 
      Icon: FaWhatsapp, 
      href: "https://wa.me/229XXXXXXXX", 
      label: "WhatsApp", 
      color: "hover:text-green-400" 
    },
  ];

  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-accent/5 blur-[120px] pointer-events-none"></div>

      {/* BOUTON RETOUR EN HAUT */}
      <div className="relative w-full flex justify-center py-8">
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="group relative"
          aria-label="Retour en haut"
        >
          <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping"></span>
          
          <div className="relative w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/30 border-4 border-black">
            <HiArrowUp className="text-black group-hover:-translate-y-1 transition-transform" size={22} />
          </div>
          
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
            Back to top
          </span>
        </motion.button>
      </div>

      <span 
        className="absolute top-20 left-4 text-[100px] sm:text-[150px] font-black text-white/[0.02] font-mono select-none pointer-events-none leading-none"
      >
        {"</>"}
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="pt-4 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* COLONNE 1 : Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1 space-y-4"
          >
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-1">
                Theo<span className="text-white">.dev</span>
              </h3>
              <p className="text-xs font-mono text-accent tracking-widest">
                {"< FULL STACK DEVELOPER />"}
              </p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Développeur passionné qui transforme vos idées en solutions concrètes, 
              modernes et performantes.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="relative">
                <span className="w-3 h-3 bg-green-400 rounded-full block"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full block absolute top-0 animate-ping"></span>
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-green-400 font-semibold">Disponible</span> pour vos projets
              </p>
            </div>
          </motion.div>

          {/* COLONNE 2 : Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-white font-bold text-lg flex items-center gap-2">
              <span className="h-[2px] w-6 bg-accent"></span>
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLONNE 3 : Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-white font-bold text-lg flex items-center gap-2">
              <span className="h-[2px] w-6 bg-accent"></span>
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, i) => (
                <li 
                  key={i} 
                  className="text-gray-400 text-sm flex items-center gap-2 group cursor-default"
                >
                  <HiSparkles className="text-accent/50 group-hover:text-accent group-hover:rotate-180 transition-all duration-500 flex-shrink-0" size={12} />
                  <span className="group-hover:text-accent transition-colors">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLONNE 4 : Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-white font-bold text-lg flex items-center gap-2">
              <span className="h-[2px] w-6 bg-accent"></span>
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={copyEmail}
                  className="w-full flex items-start gap-2 text-left group"
                >
                  <HiMail className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-400 text-xs group-hover:text-accent transition-colors truncate">
                      lokossatheodoros@gmail.com
                    </p>
                    {emailCopied && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-green-400 text-xs font-mono mt-1"
                      >
                        ✓ Copié !
                      </motion.p>
                    )}
                  </div>
                </button>
              </li>

              <li>
                <a href="tel:+2290191952655" className="flex items-start gap-2 group">
                  <HiPhone className="text-accent flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-gray-400 text-sm group-hover:text-accent transition-colors">
                    +229  0191952655
                  </p>
                </a>
              </li>

              <li className="flex items-start gap-2">
                <HiLocationMarker className="text-accent flex-shrink-0 mt-0.5" size={16} />
                <p className="text-gray-400 text-sm">
                  Cotonou, Bénin 🇧🇯
                </p>
              </li>
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 border border-accent/50 text-accent text-sm font-bold rounded-full hover:bg-accent hover:text-black transition-all group relative overflow-hidden"
            >
              <span 
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)',
                }}
              ></span>
              <span className="relative z-10">Discutons-en</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        <div className="relative py-6">
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        {/* ✅ RÉSEAUX SOCIAUX AVEC VRAIS LIENS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm font-mono">
            Suis-moi sur les réseaux :
          </p>
          <div className="flex gap-3">
            {socials.map(({ Icon, href, label, color }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
                className={`w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 ${color} hover:border-accent/50 transition-all relative overflow-hidden group`}
              >
                <span 
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent)',
                  }}
                ></span>
                <Icon size={18} className="relative z-10" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="relative py-2">
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-500 flex items-center gap-2 flex-wrap justify-center">
            © {currentYear} 
            <span className="text-accent font-semibold">LOKOSSA Theodoros</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Fait avec React
              <HiCode className="text-accent" size={14} />
              et 
              <HiCode className="text-accent" size={14} />
            </span>
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-accent text-xs transition-colors">
              Mentions légales
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-accent text-xs transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pb-6 text-center"
        >
          <p className="text-xs font-mono text-white/20">
            {"<!-- Coded with passion in Cotonou 🇧🇯 -->"}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}