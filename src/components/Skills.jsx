import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  FileCode, 
  Palette, 
  Database, 
  Server,
  Layers,
  GitBranch,
  Frame,
  Terminal,
  Video,
  Image,
  Radio,
  Camera,
  Film,
  Zap,
  Sparkles,
  ChevronDown
} from "lucide-react";

const skills = [
  // Skills principaux (8 affichés par défaut)
  { name: "React.js", level: 90, icon: Code2, color: "#61DAFB" },
  { name: "JavaScript", level: 88, icon: FileCode, color: "#F7DF1E" },
  { name: "HTML/CSS", level: 95, icon: Layers, color: "#E34F26" },
  { name: "Tailwind", level: 92, icon: Palette, color: "#38BDF8" },
  { name: "PHP", level: 80, icon: Server, color: "#777BB4" },
  { name: "Laravel", level: 75, icon: Zap, color: "#FF2D20" },
  { name: "Node.js", level: 78, icon: Terminal, color: "#68A063" },
  { name: "PostgreSQL", level: 82, icon: Database, color: "#4169E1" },
  
  // Skills cachés (après See more)
  { name: "Git/GitHub", level: 85, icon: GitBranch, color: "#F05032" },
  { name: "Figma", level: 70, icon: Frame, color: "#A259FF" },
  { name: "Montage Vidéo", level: 85, icon: Film, color: "#FF6B6B" },
  { name: "Traitement Image", level: 88, icon: Image, color: "#4ECDC4" },
  { name: "Gestion Live", level: 80, icon: Radio, color: "#FF006E" },
  { name: "Vidéaste", level: 82, icon: Video, color: "#8338EC" },
  { name: "Designer", level: 78, icon: Sparkles, color: "#FB5607" },
  { name: "Photographe", level: 75, icon: Camera, color: "#3A86FF" },
];

const INITIAL_COUNT = 8;

export default function Skills() {
  const [isOn, setIsOn] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll ? skills : skills.slice(0, INITIAL_COUNT);

  return (
    <section 
      id="skills" 
      className="py-20 px-4 sm:px-6 bg-black relative overflow-hidden"
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accentBlue/10 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ========== TITRE ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p className="font-mono text-accent text-xs sm:text-sm tracking-widest mb-3">
            {"< COMPÉTENCES />"}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Mes <span className="gradient-text">Compétences</span>
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
          className="text-center text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-12"
        >
          Développement, création multimédia et bien plus.{" "}
          <br className="hidden sm:block" />
          <span className="text-accent">Active le mode ON</span> pour voir mes niveaux !
        </motion.p>

        {/* ========== TOGGLE ON/OFF ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
            <span className={`text-sm font-mono transition-colors ${!isOn ? "text-gray-500" : "text-gray-600"}`}>
              OFF
            </span>
            
            <button
              onClick={() => setIsOn(!isOn)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isOn ? "bg-accent" : "bg-gray-700"
              }`}
              aria-label="Toggle skills animation"
            >
              <motion.div
                animate={{ x: isOn ? 32 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`absolute top-1 w-6 h-6 rounded-full flex items-center justify-center ${
                  isOn ? "bg-black" : "bg-white"
                }`}
              >
                {isOn ? (
                  <Zap size={12} className="text-accent" />
                ) : (
                  <span className="text-gray-500 text-xs">○</span>
                )}
              </motion.div>
            </button>
            
            <span className={`text-sm font-mono transition-colors ${isOn ? "text-accent font-bold" : "text-gray-500"}`}>
              ON
            </span>
          </div>
        </motion.div>

        {/* ========== GRILLE DE CERCLES SEULS ========== */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 justify-items-center"
        >
          <AnimatePresence>
            {visibleSkills.map((skill, index) => (
              <SkillCircle 
                key={skill.name} 
                skill={skill} 
                index={index} 
                isOn={isOn}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ========== BOUTON SEE MORE / LESS ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-accent/30 rounded-full hover:bg-accent transition-all"
          >
            <span className="text-accent group-hover:text-black font-bold text-sm">
              {showAll ? "See less" : "See more"}
            </span>
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown 
                className="text-accent group-hover:text-black" 
                size={20} 
              />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Compteur */}
        <p className="text-center text-gray-500 text-xs mt-4">
          {visibleSkills.length} / {skills.length} compétences
        </p>

        {/* Message d'invitation */}
        <AnimatePresence>
          {!isOn && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-gray-500 text-sm mt-8 italic"
            >
              👆 Active le switch pour révéler mes niveaux de compétences
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ========== COMPOSANT CERCLE SEUL ==========
function SkillCircle({ skill, index, isOn }) {
  const Icon = skill.icon;
  const size = 150;
  const strokeWidth = 12; // ← ÉPAIS comme sur ton image
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ delay: index * 0.08, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex flex-col items-center gap-3 cursor-pointer group"
    >
      {/* Cercle SEUL */}
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Cercle de fond gris épais */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          
          {/* Cercle de progression coloré */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={skill.color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ 
              strokeDashoffset: isOn ? offset : circumference 
            }}
            transition={{ 
              duration: 1.5, 
              delay: isOn ? index * 0.08 : 0,
              ease: "easeInOut"
            }}
            style={{
              filter: isOn ? `drop-shadow(0 0 10px ${skill.color})` : 'none',
            }}
          />
        </svg>

        {/* Icône + Pourcentage au centre */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            animate={{ 
              scale: isOn ? [1, 1.1, 1] : 1,
              rotate: isOn ? [0, 360] : 0,
            }}
            transition={{ 
              duration: isOn ? 0.8 : 0.3,
              delay: isOn ? index * 0.08 + 0.5 : 0,
            }}
          >
            <Icon 
              size={32} 
              style={{ 
                color: skill.color,
                filter: isOn ? `drop-shadow(0 0 6px ${skill.color})` : 'none',
              }}
            />
          </motion.div>
          
          <AnimatePresence>
            {isOn && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index * 0.08 + 1 }}
                className="text-sm font-bold mt-1"
                style={{ 
                  color: skill.color,
                  textShadow: `0 0 10px ${skill.color}`
                }}
              >
                {skill.level}%
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Nom du skill */}
      <h3 className="text-center text-sm sm:text-base font-bold text-white group-hover:text-accent transition-colors">
        {skill.name}
      </h3>
    </motion.div>
  );
}