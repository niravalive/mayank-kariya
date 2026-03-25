import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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

export const Contact = () => {
  return (
    <section className="min-h-screen flex items-center py-24 px-6 sm:px-10 bg-gradient-to-br from-[#DDF4E7]/20 via-white to-[#DDF4E7]/30 relative overflow-hidden" id="contact">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#DDF4E7]/40 to-transparent -z-10" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#67C090]/15 rounded-full blur-3xl -z-10" />
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#124170]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-screen-xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#124170] mb-2">
            Ready to <span className="text-[#67C090]">Transform</span> Your Business?
          </h2>
          <p className="text-base md:text-lg text-[#26667F]">
            Schedule your call back today and let's discuss how technology can accelerate your growth.
          </p>
        </motion.div>

        {/* Main Content: 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">


          {/* Right: Contact Info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col justify-between gap-9"
          >
            {/* Contact Cards */}
            <div className="space-y-9 flex-1 flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-5 border border-[#DDF4E7] shadow-sm hover:shadow-md hover:shadow-[#67C090]/10 transition-all group flex items-center gap-5">
                <div className="w-12 h-12 bg-[#DDF4E7] rounded-xl flex items-center justify-center group-hover:bg-[#67C090] group-hover:text-white transition-all text-[#26667F] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#26667F]/60 uppercase tracking-wider">Email</p>
                  <a href="mailto:hi@mayankkariya.com" className="text-lg font-semibold text-[#124170] hover:text-[#67C090] transition-colors">
                    hi@mayankkariya.com
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-[#DDF4E7] shadow-sm hover:shadow-md hover:shadow-[#124170]/10 transition-all group flex items-center gap-5">
                <div className="w-12 h-12 bg-[#DDF4E7] rounded-xl flex items-center justify-center group-hover:bg-[#124170] group-hover:text-white transition-all text-[#26667F] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#26667F]/60 uppercase tracking-wider">Phone</p>
                  <a href="tel:+918200366609" className="text-lg font-semibold text-[#124170] hover:text-[#124170] transition-colors">
                    +91 820 036 6609
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-[#DDF4E7] shadow-sm hover:shadow-md hover:shadow-[#26667F]/10 transition-all group flex items-center gap-5">
                <div className="w-12 h-12 bg-[#DDF4E7] rounded-xl flex items-center justify-center group-hover:bg-[#26667F] group-hover:text-white transition-all text-[#26667F] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#26667F]/60 uppercase tracking-wider">Location</p>
                  <p className="text-lg font-semibold text-[#124170]">
                    Surat, Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social + Tagline Card */}
            <div className="bg-[#124170] rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#26667F]/50 rounded-full blur-2xl" />
              <p className="text-sm text-[#DDF4E7]/80 mb-4 relative z-10">
                I typically respond within 24 business hours.
              </p>
              <div className="flex gap-3 relative z-10">
                <a href="#" className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-[#DDF4E7] hover:bg-[#67C090] hover:border-[#67C090] transition-all">
                  <LinkedinIcon />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-[#DDF4E7] hover:bg-[#67C090] hover:border-[#67C090] transition-all">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Left: Compact Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 flex"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#DDF4E7] w-full flex flex-col">
              <form className="space-y-4 flex-1 flex flex-col">
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-base font-medium text-[#26667F] mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-[#DDF4E7]/30 border border-[#DDF4E7] focus:outline-none focus:ring-2 focus:ring-[#67C090] focus:bg-white transition-all text-[#124170] text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-base font-medium text-[#26667F] mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-[#DDF4E7]/30 border border-[#DDF4E7] focus:outline-none focus:ring-2 focus:ring-[#67C090] focus:bg-white transition-all text-[#124170] text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-base font-medium text-[#26667F] mb-1.5 block">Phone (Optional)</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-[#DDF4E7]/30 border border-[#DDF4E7] focus:outline-none focus:ring-2 focus:ring-[#67C090] focus:bg-white transition-all text-[#124170] text-base"
                      placeholder="+91 "
                    />
                  </div>
                  <div>
                    <label className="text-base font-medium text-[#26667F] mb-1.5 block">Service of Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#DDF4E7]/30 border border-[#DDF4E7] focus:outline-none focus:ring-2 focus:ring-[#67C090] focus:bg-white transition-all text-[#124170] text-base">
                      <option value="">Select a service</option>
                      <option value="crm">CRM & Technology Implementation</option>
                      <option value="process">Business Process Optimization</option>
                      <option value="web">Static Website Development</option>
                      <option value="ai">AI Integration Solutions</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="flex-1">
                  <label className="text-base font-medium text-[#26667F] mb-1.5 block">Message</label>
                  <textarea
                    rows={4}
                    className="w-full min-h-[100px] px-4 py-3 rounded-xl bg-[#DDF4E7]/30 border border-[#DDF4E7] focus:outline-none focus:ring-2 focus:ring-[#67C090] focus:bg-white transition-all resize-none text-[#124170] text-base"
                    placeholder="Tell me a bit about your business and goals..."
                  ></textarea>
                </div>

                {/* Submit */}
                <button className="w-full bg-[#124170] hover:bg-[#26667F] text-white font-semibold py-4 rounded-xl shadow-md shadow-[#124170]/15 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg">
                  <Send className="w-5 h-5" />
                  Schedule Call Back
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
