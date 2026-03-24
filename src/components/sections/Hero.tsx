import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 md:px-16 lg:px-24 overflow-hidden pt-12 perspective-1000" id="home">
      {/* Background gradients and Doodle Pattern */}
      <div className="absolute inset-0 bg-[#DDF4E7]/30" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0z\' fill=\'none\'/%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1.5\' fill=\'%2367C090\' fill-opacity=\'0.2\'/%3E%3C/svg%3E')] [background-size:24px_24px] bg-repeat opacity-70 animate-move-bg -z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#DDF4E7]/50 to-transparent -z-10" />
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-[#67C090]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 -left-64 w-[400px] h-[400px] bg-[#26667F]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 w-full preserve-3d">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold font-sans text-[#124170] leading-tight mb-6">
            Empower Your Business to <span className="text-[#67C090]">Scale Faster</span> with Tailored Solutions
          </h1>
          <p className="text-lg md:text-xl text-[#26667F] mb-8 max-w-2xl leading-relaxed">
            Turn operational challenges into growth opportunities with expert CRM solutions and process optimization designed specifically for MSMEs.Empowering MSMEs to unlock new levels of operational efficiency.
          </p>
          <motion.a
            whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 20px 25px -5px rgba(18, 65, 112, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block bg-[#124170] text-white font-medium px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform-gpu"
          >
            Connect with me
          </motion.a>
        </motion.div>

        {/* Image / Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
          className="relative flex-1 w-full max-w-md flex justify-center"
        >
          {/* Main image container - circle shape */}
          <div
            className="w-80 h-80 md:w-[440px] md:h-[440px] mx-auto bg-[#DDF4E7] relative overflow-hidden shadow-2xl shadow-[#124170]/20 rounded-full border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400&h=400"
              alt="Mayank Kariya"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
            whileHover={{ scale: 1.1 }}
            transition={{ opacity: { duration: 0.6, delay: 0.6 }, x: { duration: 0.6, delay: 0.6 }, y: { duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 } }}
            className="absolute top-2 md:top-8 -right-8 md:-right-16 bg-[#26667F] text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg shadow-[#26667F]/30 transform-gpu"
          >
            Zoho Expert
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, y: [0, 14, 0] }}
            whileHover={{ scale: 1.1 }}
            transition={{ opacity: { duration: 0.6, delay: 0.8 }, x: { duration: 0.6, delay: 0.8 }, y: { duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 } }}
            className="absolute bottom-16 -left-12 md:-left-20 bg-[#67C090] text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg shadow-[#67C090]/30 transform-gpu"
          >
            MSME Specialist
          </motion.div>
        </motion.div>
      </div>

      {/* Down Arrow indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#26667F]/50"
      >
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
