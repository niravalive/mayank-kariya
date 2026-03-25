const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-[#124170] text-[#DDF4E7] py-20 px-6 sm:px-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">Mayank Kariya</h2>
            <p className="text-[#DDF4E7]/70 text-sm leading-relaxed max-w-sm">
              Business Technology Consultant & Zoho Specialist focused on driving growth for MSMEs through practical technology solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#DDF4E7]/70 hover:text-[#67C090] transition-colors">
                <LinkedinIcon />
              </a>
              <a href="#" className="text-[#DDF4E7]/70 hover:text-[#67C090] transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#about" className="text-[#DDF4E7]/70 hover:text-[#67C090] hover:translate-x-2 inline-block transition-all">About</a></li>
              <li><a href="#services" className="text-[#DDF4E7]/70 hover:text-[#67C090] hover:translate-x-2 inline-block transition-all">Services</a></li>
              <li><a href="/blog" className="text-[#DDF4E7]/70 hover:text-[#67C090] hover:translate-x-2 inline-block transition-all">Blog</a></li>
              <li><a href="#contact" className="text-[#DDF4E7]/70 hover:text-[#67C090] hover:translate-x-2 inline-block transition-all">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#portfolio" className="text-[#DDF4E7]/70 hover:text-[#67C090] hover:translate-x-2 inline-block transition-all">CRM & Technology</a></li>
              <li><a href="#portfolio" className="text-[#DDF4E7]/70 hover:text-[#67C090] hover:translate-x-2 inline-block transition-all">Process Optimization</a></li>
              <li><a href="#portfolio" className="text-[#DDF4E7]/70 hover:text-[#67C090] hover:translate-x-2 inline-block transition-all">Website Development</a></li>
              <li><a href="#portfolio" className="text-[#DDF4E7]/70 hover:text-[#67C090] hover:translate-x-2 inline-block transition-all">AI Integration</a></li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <p className="text-sm text-[#DDF4E7]/70 mb-6">
              Ready to transform your business operations with modern technology?
            </p>
            <a href="#contact" className="inline-block bg-[#67C090] hover:bg-[#DDF4E7] text-[#124170] font-medium px-6 py-3 rounded-lg transition-colors hover:shadow-lg hover:shadow-[#67C090]/20 transform hover:-translate-y-1">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-[#26667F]/50 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#DDF4E7]/70">© 2026 Mayank Kariya. All rights reserved.</p>
          <p className="text-[#DDF4E7]/50 hidden lg:block">Business Technology Consultant | Zoho Specialist | MSME Digital Transformation Expert</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
