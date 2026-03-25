import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 second
    let start: number | null = null;

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      const easeProgress = easeInOutCubic(progress);
      window.scrollTo(0, startPosition + distance * easeProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#servicesportfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'py-4 glass-effect shadow-md' : 'py-6 bg-transparent'
          }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-[#124170] rounded-lg"></div>
            Mayank
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="font-medium text-[#26667F] hover:text-[#67C090] transition-colors relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#67C090] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="bg-[#124170] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#26667F] hover:shadow-lg hover:shadow-[#124170]/20 transition-all transform hover:-translate-y-0.5"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#124170] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-3xl font-bold text-[#124170] flex items-center justify-between"
                >
                  {link.name}
                  <div className="w-10 h-10 rounded-full bg-[#DDF4E7] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#67C090] rounded-full"></div>
                  </div>
                </a>
              ))}
              <div className="mt-8 pt-8 border-t border-[#DDF4E7]">
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="block w-full text-center bg-[#124170] text-white py-4 rounded-2xl text-xl font-bold shadow-lg shadow-[#124170]/20"
                >
                  Let's Talk
                </a>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#DDF4E7]/50 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute top-1/4 left-0 w-32 h-32 bg-[#67C090]/10 rounded-full blur-2xl -z-10 -translate-x-1/2"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
