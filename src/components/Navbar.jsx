import { useState, useEffect } from "react";
import { HiMenu, HiX, HiMail, HiDownload, HiCheck } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

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

  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const CV_PATH = "/cv-lokossa-theodoros.pdf";
  const CV_NAME = "CV-LOKOSSA-Theodoros.pdf";

  // ✨ FONCTION DE TÉLÉCHARGEMENT AVEC SPINNER
  const handleDownloadCV = (e) => {
    e.preventDefault();
    
    // Démarre le spinner
    setIsDownloading(true);
    setDownloadSuccess(false);

    // Simule un délai de chargement (1.5s) puis télécharge
    setTimeout(() => {
      // Créer un lien invisible et déclencher le téléchargement
      const link = document.createElement('a');
      link.href = CV_PATH;
      link.download = CV_NAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Arrête le spinner et affiche le succès
      setIsDownloading(false);
      setDownloadSuccess(true);

      // Retire le message de succès après 2 secondes
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 2000);
    }, 1500);
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
            
            {/* 📄 BOUTON DOWNLOAD CV AVEC SPINNER */}
            <motion.button
              onClick={handleDownloadCV}
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
              
              {/* Contenu dynamique selon l'état */}
              <AnimatePresence mode="wait">
                {isDownloading ? (
                  // ⏳ ÉTAT : Téléchargement en cours
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="relative z-10 flex items-center gap-2"
                  >
                    {/* Spinner qui tourne */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full"
                    />
                    <span className="text-accent">Chargement...</span>
                  </motion.div>
                ) : downloadSuccess ? (
                  // ✅ ÉTAT : Succès
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
                  // 📄 ÉTAT : Par défaut
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
                    <HiDownload 
                      className="group-hover:text-accent group-hover:translate-y-0.5 transition-all duration-300" 
                      size={16} 
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

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
                  {/* 📄 Bouton Download CV Mobile AVEC SPINNER */}
                  <button
                    onClick={handleDownloadCV}
                    disabled={isDownloading}
                    className="relative flex items-center justify-center gap-2 py-3 px-4 bg-white/[0.03] border border-white/20 text-white font-bold rounded-xl overflow-hidden group hover:border-accent transition-all disabled:opacity-70 disabled:cursor-not-allowed min-h-[48px]"
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>

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
                  {/* ✅ RÉSEAUX SOCIAUX AVEC VRAIS LIENS */}
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