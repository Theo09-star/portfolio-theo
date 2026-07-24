import { useState, useEffect } from "react";
import { HiMenu, HiX, HiMail, HiDownload, HiCheck, HiDocumentText, HiPhotograph } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showFormatMenu, setShowFormatMenu] = useState(false);
  const [showFormatMenuMobile, setShowFormatMenuMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  // Ferme le menu au clic ailleurs
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.cv-menu-container')) {
        setShowFormatMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // 📄 CONFIGURATION DES FICHIERS CV
  const CV_FORMATS = [
    {
      format: "PDF",
      path: "/cv-lokossa-theodoros.pdf",
      name: "CV-LOKOSSA-Theodoros.pdf",
      icon: HiDocumentText,
      color: "text-red-400",
      description: "Format standard"
    },
    {
      format: "JPEG",
      path: "/cv-lokossa-theodoros.jpg",
      name: "CV-LOKOSSA-Theodoros.jpg",
      icon: HiPhotograph,
      color: "text-blue-400",
      description: "Format image"
    }
  ];

  // ✨ FONCTION DE TÉLÉCHARGEMENT AVEC SPINNER
  const handleDownloadCV = (format) => {
    // Ferme les menus
    setShowFormatMenu(false);
    setShowFormatMenuMobile(false);
    
    // Démarre le spinner
    setIsDownloading(true);
    setDownloadSuccess(false);

    setTimeout(() => {
      const link = document.createElement('a');
      link.href = format.path;
      link.download = format.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
      setDownloadSuccess(true);

      setTimeout(() => {
        setDownloadSuccess(false);
      }, 2000);
    }, 1500);
  };

  // Toggle du menu
  const toggleFormatMenu = (e) => {
    e.stopPropagation();
    setShowFormatMenu(!showFormatMenu);
  };

  return (
    <>
      {/* ============ NAVBAR ============ */}
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl py-3 border-b border-accent/20 shadow-lg shadow-accent/5"
            : "bg-transparent py-4"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 flex justify-between items-center gap-2">
          
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg sm:text-2xl font-bold gradient-text flex-shrink-0"
          >
            Theo<span className="text-white">.dev</span>
          </motion.a>

          {/* ========== MENU DESKTOP PREMIUM ========== */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full px-2 py-2">
            {links.map((l, i) => (
              <motion.a
                key={l.name}
                href={l.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === l.id
                    ? "text-black"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {activeSection === l.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l.name}</span>
              </motion.a>
            ))}
          </div>

          {/* ========== BOUTONS ACTIONS DESKTOP (CV + Hire me) ========== */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* 📄 BOUTON DOWNLOAD CV AVEC MENU DÉROULANT */}
            <div className="relative cv-menu-container">
              <motion.button
                onClick={toggleFormatMenu}
                disabled={isDownloading}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative flex items-center gap-2 px-5 py-2 bg-white/[0.03] border border-white/20 text-white text-sm font-bold rounded-full overflow-hidden group hover:border-accent transition-all disabled:opacity-70 disabled:cursor-not-allowed min-w-[110px] justify-center"
              >
                {/* Effet balayage doré */}
                {!isDownloading && !downloadSuccess && (
                  <span 
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0.3) 50%, transparent 100%)',
                    }}
                  ></span>
                )}
                
                <AnimatePresence mode="wait">
                  {isDownloading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="relative z-10 flex items-center gap-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full"
                      />
                      <span className="text-accent">Chargement...</span>
                    </motion.div>
                  ) : downloadSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="relative z-10 flex items-center gap-2"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <HiCheck className="text-green-400" size={18} />
                      </motion.div>
                      <span className="text-green-400">Téléchargé !</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="relative z-10 flex items-center gap-2"
                    >
                      <span className="group-hover:text-accent transition-colors duration-300">
                        CV
                      </span>
                      <motion.div
                        animate={{ rotate: showFormatMenu ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <HiDownload 
                          className="group-hover:text-accent transition-all duration-300" 
                          size={16} 
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* 📥 MENU DÉROULANT DES FORMATS */}
              <AnimatePresence>
                {showFormatMenu && !isDownloading && !downloadSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="absolute top-full right-0 mt-3 w-72 bg-black/95 backdrop-blur-xl border border-accent/30 rounded-2xl shadow-2xl overflow-hidden z-50"
                    style={{
                      boxShadow: "0 20px 60px rgba(255, 215, 0, 0.15)"
                    }}
                  >
                    {/* En-tête du menu */}
                    <div className="p-4 border-b border-white/10 bg-gradient-to-r from-accent/10 to-transparent">
                      <p className="text-accent text-xs font-mono uppercase tracking-widest mb-1">
                        {"< Télécharger CV />"}
                      </p>
                      <p className="text-white text-sm font-bold">
                        Choisissez le format
                      </p>
                    </div>

                    {/* Options de formats */}
                    <div className="p-2">
                      {CV_FORMATS.map((format, index) => (
                        <motion.button
                          key={format.format}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => handleDownloadCV(format)}
                          whileHover={{ x: 5 }}
                          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.05] group transition-all"
                        >
                          {/* Icône */}
                          <div className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${format.color} group-hover:border-accent/50 transition-all`}>
                            <format.icon size={22} />
                          </div>

                          {/* Info */}
                          <div className="flex-1 text-left">
                            <p className="text-white font-bold text-sm group-hover:text-accent transition-colors">
                              Format {format.format}
                            </p>
                            <p className="text-gray-500 text-xs">
                              {format.description}
                            </p>
                          </div>

                          {/* Flèche */}
                          <HiDownload className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                        </motion.button>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-2 border-t border-white/10 bg-white/[0.02]">
                      <p className="text-gray-500 text-[10px] font-mono text-center">
                        LOKOSSA Theodoros - Full Stack Developer
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ✨ BOUTON HIRE ME AVEC BALAYAGE */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative flex items-center gap-2 px-5 py-2 border border-accent/50 text-accent text-sm font-bold rounded-full overflow-hidden group hover:border-accent transition-all"
            >
              <span 
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0.5) 50%, transparent 100%)',
                }}
              ></span>

              <span className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full"></span>
              
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Hire me
              </span>
              <span className="relative z-10 group-hover:text-black group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </motion.a>
          </div>

          {/* Bouton menu burger (mobile) */}
          <button
            className="md:hidden flex-shrink-0 p-2 rounded-full bg-white/5 backdrop-blur-md border border-accent/40 hover:bg-accent/20 transition"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <HiMenu className="text-accent" size={20} />
          </button>
        </div>
      </nav>

      {/* ============ MENU MOBILE LATÉRAL ============ */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm z-50 md:hidden overflow-y-auto"
              style={{
                background: "rgba(15, 15, 20, 0.9)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderLeft: "1px solid rgba(255, 215, 0, 0.2)",
                boxShadow: "-10px 0 40px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
                <span className="text-xl font-bold gradient-text">
                  Theo<span className="text-white">.dev</span>
                </span>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-full bg-accent/10 border border-accent/40 hover:bg-accent/30 transition"
                  aria-label="Fermer le menu"
                >
                  <HiX className="text-accent" size={22} />
                </button>
              </div>

              <div className="flex flex-col min-h-[calc(100%-80px)] px-6 pt-8 pb-8">
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <div className="h-[2px] w-16 bg-accent mb-3"></div>
                  <p className="text-accent text-xs font-mono tracking-widest">
                    NAVIGATION
                  </p>
                </motion.div>

                <div className="flex flex-col gap-2 flex-1">
                  {links.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="group flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-accent/10 border border-transparent hover:border-accent/30 transition-all"
                    >
                      <span className="text-accent/50 text-sm font-mono">
                        0{i + 1}
                      </span>
                      <span className="text-white text-lg font-bold group-hover:text-accent transition">
                        {link.name}
                      </span>
                      <span className="ml-auto text-accent opacity-0 group-hover:opacity-100 transition">
                        →
                      </span>
                    </motion.a>
                  ))}
                </div>

                {/* ========== BOUTONS ACTIONS MOBILE ========== */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col gap-3 mt-6 pb-6 border-b border-white/10"
                >
                  {/* 📄 Bouton Download CV Mobile AVEC MENU */}
                  <div className="relative">
                    <button
                      onClick={() => setShowFormatMenuMobile(!showFormatMenuMobile)}
                      disabled={isDownloading}
                      className="w-full relative flex items-center justify-center gap-2 py-3 px-4 bg-white/[0.03] border border-white/20 text-white font-bold rounded-xl overflow-hidden group hover:border-accent transition-all disabled:opacity-70 disabled:cursor-not-allowed min-h-[48px]"
                    >
                      {!isDownloading && !downloadSuccess && (
                        <span 
                          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent)',
                          }}
                        ></span>
                      )}
                      
                      <AnimatePresence mode="wait">
                        {isDownloading ? (
                          <motion.div
                            key="loading-mobile"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="relative z-10 flex items-center gap-2"
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                              className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full"
                            />
                            <span className="text-accent">Chargement...</span>
                          </motion.div>
                        ) : downloadSuccess ? (
                          <motion.div
                            key="success-mobile"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="relative z-10 flex items-center gap-2"
                          >
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ type: "spring", stiffness: 200 }}
                            >
                              <HiCheck className="text-green-400" size={20} />
                            </motion.div>
                            <span className="text-green-400">Téléchargé !</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="default-mobile"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="relative z-10 flex items-center gap-2"
                          >
                            <HiDownload className="group-hover:text-accent transition-colors" size={18} />
                            <span className="group-hover:text-accent transition-colors">
                              Télécharger CV
                            </span>
                            <motion.div
                              animate={{ rotate: showFormatMenuMobile ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-accent"
                            >
                              ▼
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>

                    {/* Menu formats mobile */}
                    <AnimatePresence>
                      {showFormatMenuMobile && !isDownloading && !downloadSuccess && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 space-y-2 overflow-hidden"
                        >
                          {CV_FORMATS.map((format, index) => (
                            <motion.button
                              key={format.format}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => handleDownloadCV(format)}
                              className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-accent/50 transition-all group"
                            >
                              <div className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center ${format.color} group-hover:border-accent/50 transition-all`}>
                                <format.icon size={20} />
                              </div>
                              <div className="flex-1 text-left">
                                <p className="text-white font-bold text-sm">Format {format.format}</p>
                                <p className="text-gray-500 text-xs">{format.description}</p>
                              </div>
                              <HiDownload className="text-accent" size={18} />
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* ✨ Bouton Hire Me Mobile */}
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="relative flex items-center justify-center gap-2 py-3 px-4 bg-accent text-black font-bold rounded-xl overflow-hidden group hover:scale-105 transition-transform"
                  >
                    <span 
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                      }}
                    ></span>
                    
                    <span className="relative z-10">Hire me</span>
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </motion.div>

                {/* ========== RÉSEAUX SOCIAUX ========== */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="pt-6"
                >
                  <p className="text-gray-500 text-xs mb-4 font-mono">
                    RETROUVE-MOI SUR
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Theo09-star"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-3 border border-white/20 rounded-full hover:border-accent hover:text-accent hover:bg-accent/10 transition"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/theodoros-lokossa-853760316?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-3 border border-white/20 rounded-full hover:border-accent hover:text-accent hover:bg-accent/10 transition"
                    >
                      <FaLinkedin size={18} />
                    </a>
                    <a
                      href="mailto:lokossatheodoros@gmail.com"
                      aria-label="Email"
                      className="p-3 border border-white/20 rounded-full hover:border-accent hover:text-accent hover:bg-accent/10 transition"
                    >
                      <HiMail size={18} />
                    </a>
                  </div>
                  <p className="text-gray-600 text-xs mt-6 italic">
                    © 2025 LOKOSSA Theodoros
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}