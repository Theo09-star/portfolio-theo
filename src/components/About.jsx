import { motion } from "framer-motion";
import { 
  FaGraduationCap, 
  FaCode, 
  FaRocket, 
  FaLightbulb,
  FaHeart,
  FaBriefcase
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function About() {
  const timelineItems = [
    {
      icon: FaLightbulb,
      title: "L'origine",
      subtitle: "D'où vient la passion",
      description: "Tout a commencé par une curiosité : comprendre comment fonctionnent les applications qu'on utilise tous les jours. Cette curiosité s'est transformée en passion.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/30",
    },
    {
      icon: FaGraduationCap,
      title: "La formation",
      subtitle: "EIG Bénin - Full Stack",
      description: "J'ai choisi de quitter la licence classique pour me lancer en formation professionnelle à EIG Bénin. Une décision courageuse pour me concentrer 100% sur le développement.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/30",
    },
    {
      icon: FaCode,
      title: "Les compétences",
      subtitle: "Mon arsenal technique",
      description: "React, Node.js, PHP, Laravel, PostgreSQL... J'ai construit un stack complet pour développer des applications web modernes, du front-end au back-end.",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/30",
    },
    {
      icon: FaBriefcase,
      title: "L'expérience",
      subtitle: "Des projets en production",
      description: "Mes applications sont utilisées quotidiennement en entreprise. Une tâche qui prenait 4h est maintenant faite en 30 minutes. C'est ça, l'impact réel.",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/30",
    },
    {
      icon: FaRocket,
      title: "L'objectif",
      subtitle: "Toujours viser plus haut",
      description: "Livrer des solutions puissantes, performantes et durables. Créer un impact réel dans les entreprises et transformer les idées en réalité.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/30",
    },
    {
      icon: FaHeart,
      title: "La philosophie",
      subtitle: "Le code, ma passion",
      description: "Pour moi, coder c'est créer de la magie. Chaque ligne de code est une opportunité de résoudre un problème et d'améliorer la vie de quelqu'un.",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/30",
    },
  ];

  return (
    <section 
      id="about" 
      className="py-20 px-3 sm:px-6 bg-black relative overflow-hidden"
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

      {/* Halo doré */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ========== TITRE AVEC ZIGZAG ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <p className="font-mono text-accent text-xs sm:text-sm tracking-widest mb-3">
            {"< À PROPOS />"}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            À propos de <span className="gradient-text">moi</span>
          </h2>
        </motion.div>

        {/* Zigzag SVG */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
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
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>
        </motion.div>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-gray-400 text-xs sm:text-base max-w-2xl mx-auto mb-12 sm:mb-16 px-4"
        >
          Découvre mon parcours, ma vision et ce qui me passionne dans le monde du développement
        </motion.p>

        {/* ========== TIMELINE / ARBRE ========== */}
        <div className="relative">
          
          {/* Ligne verticale CENTRALE (pour tous les écrans) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-full h-full bg-gradient-to-b from-accent via-accent/50 to-accent/10 origin-top"
              style={{
                boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)"
              }}
            ></motion.div>
          </div>

          {/* Items de la timeline */}
          <div className="space-y-8 sm:space-y-16">
            {timelineItems.map((item, index) => (
              <TimelineItem 
                key={index} 
                item={item} 
                index={index} 
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* ========== CITATION FINALE ========== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center max-w-3xl mx-auto px-4"
        >
          <div className="relative inline-block">
            <HiSparkles className="absolute -top-4 -left-4 text-accent/50" size={20} />
            <HiSparkles className="absolute -bottom-4 -right-4 text-accent/50" size={20} />
            <p className="text-lg sm:text-2xl md:text-3xl font-bold text-white italic px-4 sm:px-6">
              "Avec moi, vos projets deviennent{" "}
              <span className="gradient-text">réalité</span>."
            </p>
          </div>
          <p className="mt-6 text-accent font-mono text-xs sm:text-sm">
            — LOKOSSA Theodoros
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ========== COMPOSANT ITEM DE LA TIMELINE ==========
function TimelineItem({ item, index, isLeft }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Cercle central (nœud de l'arbre) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring" }}
          className={`w-10 h-10 sm:w-16 sm:h-16 rounded-full ${item.bgColor} border-2 ${item.borderColor} flex items-center justify-center backdrop-blur-md`}
          style={{
            boxShadow: `0 0 20px ${item.color.replace('text-', 'rgba(').replace('-400', ', 0.3)')}`
          }}
        >
          <Icon className={item.color} size={16} style={{ fontSize: '1.5rem' }} />
        </motion.div>

        {/* Branchement horizontal */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
          className={`absolute top-1/2 -translate-y-1/2 h-[2px] w-3 sm:w-8 bg-gradient-to-r ${
            isLeft 
              ? "right-full from-accent/50 to-transparent origin-right" 
              : "left-full to-accent/50 from-transparent origin-left"
          }`}
        ></motion.div>
      </div>

      {/* Carte de contenu */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
        className={`w-[calc(50%-1.5rem)] sm:w-[calc(50%-2.5rem)] ${
          isLeft ? "mr-auto pr-1 sm:pr-4" : "ml-auto pl-1 sm:pl-4"
        }`}
      >
        <div 
          className={`p-3 sm:p-6 rounded-xl sm:rounded-2xl ${item.bgColor} backdrop-blur-md border ${item.borderColor} hover:scale-105 transition-transform duration-300 group cursor-default`}
          style={{
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3)`
          }}
        >
          {/* Numéro d'étape */}
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className={`text-[10px] sm:text-xs font-mono ${item.color} opacity-60`}>
              ÉTAPE 0{index + 1}
            </span>
            <span className={`${item.color} opacity-40 text-lg sm:text-2xl font-black`}>
              0{index + 1}
            </span>
          </div>

          {/* Titre */}
          <h3 className="text-base sm:text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors leading-tight">
            {item.title}
          </h3>
          
          {/* Sous-titre */}
          <p className={`${item.color} text-[11px] sm:text-sm font-medium mb-2 sm:mb-3 leading-tight`}>
            {item.subtitle}
          </p>
          
          {/* Description */}
          <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
            {item.description}
          </p>

          {/* Petite ligne décorative */}
          <div className={`mt-3 sm:mt-4 h-[1px] w-8 sm:w-12 ${item.color.replace('text-', 'bg-')} opacity-40`}></div>
        </div>
      </motion.div>
    </motion.div>
  );
}