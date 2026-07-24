import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiX, HiExternalLink, HiCursorClick, HiCode } from "react-icons/hi";
import { HiArrowLongRight, HiSparkles } from "react-icons/hi2";
import { projects, folderImg } from "../data/projects";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section 
      id="projects" 
      className="min-h-screen py-20 px-4 sm:px-6 bg-black relative overflow-hidden"
    >
      {/* Grille en fond */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Halos décoratifs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accentBlue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ========== TITRE ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p className="font-mono text-accent text-xs sm:text-sm tracking-widest mb-3">
            {"< PROJETS />"}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Mes <span className="gradient-text">Réalisations</span>
          </h2>
        </motion.div>

        {/* Zigzag SVG */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <svg 
            width="200" 
            height="30" 
            viewBox="0 0 200 30" 
            fill="none"
            className="drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
          >
            <motion.path
              d="M 5 15 L 25 5 L 45 25 L 65 5 L 85 25 L 105 5 L 125 25 L 145 5 L 165 25 L 185 5 L 195 15"
              stroke="#FFD700"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-16"
        >
          Des projets concrets, utilisés en production.{" "}
          <br className="hidden sm:block" />
          <span className="text-accent">Ouvre le dossier</span> pour découvrir mes réalisations !
        </motion.p>

        {/* ========== DOSSIER INTERACTIF ========== */}
        <AnimatePresence mode="wait">
          {!isOpen && (
            <motion.div
              key="folder"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ 
                opacity: 0, 
                scale: 0.3, 
                rotate: 20,
                transition: { duration: 0.5 }
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="flex flex-col items-center justify-center py-16"
            >
              {/* Wrapper avec effet 3D perspective */}
              <div style={{ perspective: '1000px' }}>
                <motion.div
                  whileHover={{ 
                    scale: 1.15, 
                    y: -15,
                    rotateY: 10,
                    rotateX: -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer relative group"
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {/* Effets de lueur multiples */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-accent/40 blur-3xl rounded-full"
                  ></motion.div>
                  
                  <div className="absolute inset-0 bg-accentBlue/20 blur-2xl rounded-full group-hover:bg-accentBlue/40 transition-all"></div>

                  {/* Image du dossier */}
                  <img
                    src={folderImg}
                    alt="Dossier projets"
                    className="w-56 sm:w-64 md:w-80 relative z-10 drop-shadow-[0_20px_50px_rgba(255,215,0,0.3)]"
                  />

                  {/* Badge nombre de projets */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-4 -right-4 z-20 bg-accent text-black w-14 h-14 rounded-full flex items-center justify-center font-black text-xl border-4 border-black shadow-2xl"
                    style={{
                      boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)"
                    }}
                  >
                    {projects.length}
                  </motion.div>

                  {/* Sparkles animés */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      rotate: { repeat: Infinity, duration: 8, ease: "linear" },
                      scale: { repeat: Infinity, duration: 2 }
                    }}
                    className="absolute -top-2 -left-2 text-accent"
                  >
                    <HiSparkles size={24} />
                  </motion.div>

                  <motion.div
                    animate={{ 
                      rotate: [360, 0],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{ 
                      rotate: { repeat: Infinity, duration: 10, ease: "linear" },
                      scale: { repeat: Infinity, duration: 2, delay: 0.5 }
                    }}
                    className="absolute -bottom-2 -right-8 text-accentBlue"
                  >
                    <HiSparkles size={20} />
                  </motion.div>
                </motion.div>
              </div>

              {/* Texte animé */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="mt-12 flex flex-col items-center gap-2"
              >
                <div className="flex items-center gap-2 text-accent font-mono">
                  <HiCursorClick size={20} />
                  <span className="text-base sm:text-lg font-bold">Clique pour ouvrir !</span>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm">
                  ✨ {projects.length} projets à découvrir
                </p>
              </motion.div>

              {/* Cercles décoratifs autour */}
              <div className="absolute inset-0 -z-10 pointer-events-none">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-accent/10 rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-accent/5 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          )}

          {/* ========== PROJETS AFFICHÉS ========== */}
          {isOpen && (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Bouton fermer */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center mb-10"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md border border-accent/30 rounded-full hover:bg-accent hover:text-black transition-all"
                >
                  <HiX size={18} className="group-hover:rotate-90 transition-transform" />
                  <span className="font-bold text-sm">Fermer le dossier</span>
                </motion.button>
              </motion.div>

              {/* Compteur */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center text-gray-500 text-sm mb-8"
              >
                <span className="text-accent font-bold">{projects.length}</span> projets réalisés
              </motion.p>

              {/* Grille projets */}
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {projects.map((project, index) => (
                  <ProjectCard 
                    key={project.id}
                    project={project}
                    index={index}
                    setSelectedProject={setSelectedProject}
                    hoveredProject={hoveredProject}
                    setHoveredProject={setHoveredProject}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========== MODALE DÉTAIL ========== */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl max-w-3xl w-full rounded-3xl border border-accent/30 overflow-hidden max-h-[90vh] overflow-y-auto"
                style={{
                  boxShadow: "0 25px 80px rgba(255, 215, 0, 0.2)"
                }}
              >
                {/* Header avec image */}
                <div className="relative h-48 sm:h-64 bg-gradient-to-br from-accent/20 to-accentBlue/20 overflow-hidden">
                  {selectedProject.image ? (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <HiCode className="text-accent/50" size={80} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  
                  {/* Bouton close */}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 hover:border-accent hover:bg-accent hover:text-black transition-all"
                  >
                    <HiX size={20} />
                  </button>
                </div>

                {/* Contenu */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <HiSparkles className="text-accent" />
                    <span className="text-accent text-xs font-mono">PROJET</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Technos */}
                  <div className="mb-6">
                    <p className="text-accent text-xs font-mono mb-3">TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions - ✅ Ouvre en nouvel onglet */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-accent text-black font-bold py-3 rounded-xl hover:scale-105 transition"
                    >
                      Voir le projet
                      <HiExternalLink size={18} />
                    </a>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent font-bold rounded-xl hover:bg-accent hover:text-black transition"
                    >
                      <FaGithub size={18} />
                      Code source
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ========== COMPOSANT CARD PROJET - AVEC EFFET BALAYAGE PREMIUM ==========
function ProjectCard({ project, index, setSelectedProject }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotate: -3 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay: index * 0.15, type: "spring", damping: 20 }}
      className="relative group"
    >
      {/* ✨ BORDURE LUMINEUSE au hover */}
      <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #FFD700, transparent 30%, transparent 70%, #FFD700)',
        }}
      ></div>

      <div className="relative bg-black rounded-2xl overflow-hidden border border-white/10 h-full">
        
        {/* ✨ EFFET BALAYAGE DORÉ */}
        <div 
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-30"
          style={{
            background: 'linear-gradient(120deg, transparent 0%, transparent 40%, rgba(255, 215, 0, 0.15) 50%, transparent 60%, transparent 100%)',
          }}
        ></div>

        {/* Fond glassmorphique */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md pointer-events-none"></div>

        {/* CONTENU */}
        <div className="relative z-10">
          
          {/* Numéro projet */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span className="text-accent/60 font-mono text-xs group-hover:text-accent transition-colors duration-500">
              0{index + 1}
            </span>
            <div className="h-[1px] w-8 bg-accent/30 group-hover:w-12 group-hover:bg-accent transition-all duration-500"></div>
          </div>

          {/* Badge "En prod" */}
          <div className="absolute top-4 right-4 z-20">
            <span className="flex items-center gap-1 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400 font-mono">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              LIVE
            </span>
          </div>

          {/* Image du projet */}
          <div className="relative h-56 bg-secondary overflow-hidden border-b border-white/5">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-white/[0.02]">
                <HiCode className="text-white/20" size={60} />
                <span className="text-gray-600 font-mono text-xs">
                  Screenshot à venir
                </span>
              </div>
            )}
            
            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Titre */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-bold text-xl sm:text-2xl group-hover:text-accent transition-colors duration-500">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Contenu */}
          <div className="p-5 sm:p-6">
            {/* Description */}
            <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
              {project.description}
            </p>

            {/* Technos */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20 font-medium group-hover:border-accent/50 transition-colors duration-500"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions - ✅ Ouvre en nouvel onglet */}
            <div className="flex gap-2">
              {/* Bouton Découvrir - Interne (modale) */}
              <button
                onClick={() => setSelectedProject(project)}
                className="flex-1 relative bg-accent text-black font-bold py-2.5 rounded-lg overflow-hidden group/btn"
              >
                {/* Effet balayage sur le bouton */}
                <span 
                  className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  }}
                ></span>
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Découvrir 
                  <HiArrowLongRight className="group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Bouton GitHub - ✅ Nouvel onglet */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-white/20 rounded-lg hover:border-accent hover:text-accent transition-colors"
                aria-label="Voir le code sur GitHub"
              >
                <FaGithub size={20} />
              </a>

              {/* Bouton Lien externe - ✅ Nouvel onglet */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-white/20 rounded-lg hover:border-accent hover:text-accent transition-colors"
                aria-label="Voir le projet en ligne"
              >
                <HiExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* ✨ COINS DORÉS animés au hover */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 rounded-tl-2xl transition-all duration-500 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 rounded-tr-2xl transition-all duration-500 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 rounded-bl-2xl transition-all duration-500 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 rounded-br-2xl transition-all duration-500 pointer-events-none"></div>
      </div>
    </motion.div>
  );
}