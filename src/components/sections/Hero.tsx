import { motion } from 'framer-motion';
import heroImage from '../../assets/hero-profile.png';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-20 lg:pt-0" id="home">
      {/* Background Container for shapes (to prevent overflow issues) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 bg-pattern-plus-dark">
        {/* Right Diagonal Background for Desktop */}
        <div
          className="absolute right-0 top-0 bottom-0 md:bottom-12 lg:bottom-28  w-2/3 lg:w-1/2 bg-[#67C090] hidden md:block"
          style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
        </div>

        {/* Background gradients and Doodle Pattern for mobile/tablet to keep theme consistency without the sharp diagonal */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0z\' fill=\'none\'/%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1.5\' fill=\'%2367C090\' fill-opacity=\'0.1\'/%3E%3C/svg%3E')] [background-size:24px_24px] bg-repeat opacity-50 md:hidden" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#DDF4E7]/30 to-transparent md:hidden" />
      </div>

      <div className="max-w-8xl mx-auto px-6 sm:px-10 md:px-16 w-full flex flex-col md:flex-row items-center justify-between relative z-10 flex-1 h-full">

        {/* Socials (Left) & Text Content (Right) */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full z-20 my-auto justify-between lg:px-10 pt-10 md:pt-0">

          {/* Vertical Socials (Hidden on mobile, shown on desktop) */}
          <div className="hidden md:flex flex-col gap-6 mr-10 lg:mr-16 items-center">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#DDF4E7] text-[#26667F] hover:bg-[#67C090] hover:text-white hover:border-[#67C090] transition-all shadow-sm">
              <LinkedinIcon />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#DDF4E7] text-[#26667F] hover:bg-[#67C090] hover:text-white hover:border-[#67C090] transition-all shadow-sm">
              <InstagramIcon />
            </a>
            {/* Simple vertical line */}
            <div className="w-px h-24 bg-[#DDF4E7] mt-4"></div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left md:ml-auto md:mr-[25%] lg:mr-[50%] md:max-w-lg lg:max-w-xl"
          >
            <p className="text-[#67C090] font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4 tracking-wide uppercase">Hello I'm</p>
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold font-sans text-[#124170] leading-tight mb-4 tracking-tight drop-shadow-sm">
              Mayank Kariya
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#26667F] mb-6 md:mb-8">
              Business Technology Consultant & Zoho Specialist
            </h2>
            <p className="text-base sm:text-lg text-[#26667F]/80 mb-8 md:mb-10 max-w-lg leading-relaxed">
              Turn operational challenges into growth opportunities with expert CRM solutions and process optimization designed specifically for MSMEs.
            </p>
            <motion.a
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 20px 25px -5px rgba(221, 244, 231, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block bg-[#67C090] hover:bg-[#124170] text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-xl shadow-lg shadow-[#67C090]/30 transition-all duration-300"
            >
              Hire Me
            </motion.a>

            {/* Mobile Socials */}
            <div className="flex md:hidden gap-4 mt-10">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DDF4E7] text-[#124170] hover:bg-[#67C090] hover:text-white transition-all shadow-sm">
                <LinkedinIcon />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DDF4E7] text-[#124170] hover:bg-[#67C090] hover:text-white transition-all shadow-sm">
                <InstagramIcon />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Image) - Absolutely positioned on Desktop to anchor perfectly to bottom baseline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative md:absolute bottom-0 md:bottom-22 lg:bottom-28 right-0 w-full md:w-[50%] lg:w-[50%] flex justify-center md:justify-end items-end h-[50vh] md:h-[60vh] md:top-0 mt-auto z-10 pointer-events-none"
        >
          {/* Mobile background block */}
          <div className="absolute bottom-0 w-[120%] -left-[10%] h-[70%] bg-[#67C090] rounded-t-[4rem] shadow-xl md:hidden block -z-10 opacity-90"></div>

          <img
            src={heroImage}
            alt="Mayank Kariya"
            className="relative z-10 w-[95%] sm:w-[70%] md:w-auto h-[110%] md:h-full object-contain object-bottom drop-shadow-2xl pointer-events-auto pr-0 md:pr-10 lg:pr-20 scale-110 md:scale-110 lg:scale-125 origin-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
