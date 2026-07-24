import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiPaperAirplane,
  HiUser,
  HiChat,
  HiCheckCircle,
  HiXCircle
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// ⚠️ CONFIGURATION EMAILJS
const EMAILJS_SERVICE_ID = "service_no6ks2n";
const EMAILJS_TEMPLATE_ID = "template_xv4c7je";
const EMAILJS_PUBLIC_KEY = "Sxy2_rLZDU_mr2Hun";

export default function Contact() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      
      setStatus("success");
      setFormData({ from_name: "", from_email: "", from_phone: "", message: "" });
      
      // Reset status après 5s
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error("Erreur:", error);
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
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
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accentBlue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ========== TITRE avec balises opacité ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 relative"
        >
          {/* Balise ouvrante ultra opaque */}
          <span 
            className="absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl md:text-9xl font-black text-white/[0.03] font-mono select-none pointer-events-none"
            style={{ letterSpacing: '-0.05em' }}
          >
            {"<contact>"}
          </span>

          <p className="font-mono text-accent text-xs sm:text-sm tracking-widest mb-3 relative z-10">
            {"< CONTACT />"}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 relative z-10">
            Restons <span className="gradient-text">en contact</span>
          </h2>
        </motion.div>

        {/* Zigzag */}
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
          Un projet en tête ? Une collaboration à proposer ?{" "}
          <br className="hidden sm:block" />
          <span className="text-accent">Je réponds sous 24h.</span>
        </motion.p>

        {/* ========== GRILLE PRINCIPALE ========== */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 relative">
          
          {/* Balise fermante en arrière-plan */}
          <span 
            className="absolute bottom-0 right-0 text-5xl sm:text-7xl md:text-8xl font-black text-white/[0.02] font-mono select-none pointer-events-none z-0"
            style={{ letterSpacing: '-0.05em' }}
          >
            {"</send>"}
          </span>

          {/* ========== INFOS CONTACT (Colonne gauche) ========== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4 relative z-10"
          >
            {/* Titre section */}
            <div className="mb-6">
              <div className="h-[2px] w-16 bg-accent mb-3"></div>
              <h3 className="text-2xl font-bold text-white">Coordonnées</h3>
              <p className="text-gray-400 text-sm mt-1">
                Choisissez votre canal préféré
              </p>
            </div>

            {/* Cartes de contact */}
            {[
              { 
                icon: HiMail, 
                label: "Email", 
                value: "lokossatheodoros@gmail.com",
                href: "mailto:lokossatheodoros@gmail.com",
                color: "text-accent"
              },
              { 
                icon: HiPhone, 
                label: "Téléphone", 
                value: "+229 01 91 95 26 55",
                href: "tel:+2290191952655",
                color: "text-blue-400"
              },
              { 
                icon: FaWhatsapp, 
                label: "WhatsApp", 
                value: "+229 01 91 95 26 55",
                href: "https://wa.me/2290191952655",
                color: "text-green-400"
              },
              { 
                icon: HiLocationMarker, 
                label: "Localisation", 
                value: "Cotonou, Bénin 🇧🇯",
                href: null,
                color: "text-red-400"
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href || undefined}
                target={item.href?.startsWith('http') ? "_blank" : undefined}
                rel={item.href?.startsWith('http') ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5 }}
                className="group flex items-center gap-4 p-4 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-xl hover:border-accent/50 transition-all cursor-pointer relative overflow-hidden block"
              >
                {/* Balayage au hover */}
                <span 
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.08), transparent)',
                  }}
                ></span>

                {/* Icône */}
                <div className={`relative z-10 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${item.color} group-hover:scale-110 group-hover:border-accent/30 transition-all`}>
                  <item.icon size={22} />
                </div>

                {/* Info */}
                <div className="relative z-10 flex-1">
                  <p className="text-xs text-gray-500 font-mono uppercase">
                    {item.label}
                  </p>
                  <p className="text-white font-semibold text-sm sm:text-base group-hover:text-accent transition-colors">
                    {item.value}
                  </p>
                </div>

                {/* Flèche */}
                {item.href && (
                  <span className="relative z-10 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                )}
              </motion.a>
            ))}

            {/* ✅ RÉSEAUX SOCIAUX AVEC VRAIS LIENS */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-xs text-gray-500 font-mono uppercase mb-4">
                Suivez-moi
              </p>
              <div className="flex gap-3">
                {[
                  { 
                    Icon: FaGithub, 
                    href: "https://github.com/Theo09-star", 
                    color: "hover:text-white",
                    label: "GitHub"
                  },
                  { 
                    Icon: FaLinkedin, 
                    href: "https://www.linkedin.com/in/theodoros-lokossa-853760316?utm_source=share_via&utm_content=profile&utm_medium=member_android", 
                    color: "hover:text-blue-400",
                    label: "LinkedIn"
                  },
                  { 
                    Icon: FaWhatsapp, 
                    href: "https://wa.me/2290191952655", 
                    color: "hover:text-green-400",
                    label: "WhatsApp"
                  },
                ].map(({ Icon, href, color, label }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className={`w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-gray-400 ${color} hover:border-accent/50 transition-all`}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Message disponibilité */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 pt-4"
            >
              <div className="relative">
                <span className="w-3 h-3 bg-green-400 rounded-full block"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full block absolute top-0 animate-ping"></span>
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-green-400 font-bold">Disponible</span> pour de nouveaux projets
              </p>
            </motion.div>
          </motion.div>

          {/* ========== FORMULAIRE (Colonne droite) ========== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative z-10"
          >
            <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              
              {/* Balise ouvrante formulaire */}
              <span 
                className="absolute top-2 right-4 text-xs font-mono text-white/10 select-none pointer-events-none"
              >
                {"<form>"}
              </span>

              {/* Titre form */}
              <div className="mb-6">
                <div className="h-[2px] w-16 bg-accent mb-3"></div>
                <h3 className="text-2xl font-bold text-white">Envoyez-moi un message</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Remplissez le formulaire ci-dessous
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                
                {/* Nom */}
                <div className="relative group">
                  <label className="text-xs font-mono text-accent uppercase tracking-wider mb-1 block">
                    Nom complet *
                  </label>
                  <div className="relative">
                    <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent transition-colors" size={20} />
                    <input
                      type="text"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      placeholder="Theo LOKOSSA"
                      className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:border-accent outline-none text-white placeholder-gray-600 transition-all"
                    />
                  </div>
                </div>

                {/* Email + Téléphone en 2 colonnes */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <label className="text-xs font-mono text-accent uppercase tracking-wider mb-1 block">
                      Email *
                    </label>
                    <div className="relative">
                      <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent transition-colors" size={20} />
                      <input
                        type="email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleChange}
                        required
                        placeholder="theo@example.com"
                        className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:border-accent outline-none text-white placeholder-gray-600 transition-all"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-xs font-mono text-accent uppercase tracking-wider mb-1 block">
                      Téléphone
                    </label>
                    <div className="relative">
                      <HiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent transition-colors" size={20} />
                      <input
                        type="tel"
                        name="from_phone"
                        value={formData.from_phone}
                        onChange={handleChange}
                        placeholder="+229 01 91 95 26 55"
                        className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:border-accent outline-none text-white placeholder-gray-600 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative group">
                  <label className="text-xs font-mono text-accent uppercase tracking-wider mb-1 block">
                    Message *
                  </label>
                  <div className="relative">
                    <HiChat className="absolute left-4 top-4 text-gray-500 group-focus-within:text-accent transition-colors" size={20} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Parlez-moi de votre projet..."
                      className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:border-accent outline-none text-white placeholder-gray-600 transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Bouton Submit avec balayage */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="w-full relative bg-accent text-black font-bold py-4 rounded-xl overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {/* Effet balayage */}
                  <span 
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    }}
                  ></span>

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                        />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <HiPaperAirplane size={20} className="rotate-90" />
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Message de statut */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl"
                  >
                    <HiCheckCircle className="text-green-400 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-green-400 font-bold">Message envoyé !</p>
                      <p className="text-sm text-gray-400">Je vous réponds dans les 24h.</p>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl"
                  >
                    <HiXCircle className="text-red-400 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-red-400 font-bold">Erreur d'envoi</p>
                      <p className="text-sm text-gray-400">Réessayez ou contactez-moi directement par email.</p>
                    </div>
                  </motion.div>
                )}
              </form>

              {/* Balise fermante formulaire */}
              <span 
                className="absolute bottom-2 right-4 text-xs font-mono text-white/10 select-none pointer-events-none"
              >
                {"</form>"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}