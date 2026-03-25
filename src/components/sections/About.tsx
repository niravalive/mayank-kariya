import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';


export const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-6 sm:px-16 lg:px-40 relative bg-gradient-to-b from-[#DDF4E7]/10 to-white overflow-hidden" id="about">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold text-[#124170] mb-4">
            About <span className="text-[#67C090]">Mayank Kariya</span>
          </h2>
          <p className="text-lg text-[#26667F] max-w-2xl mx-auto">
            Your trusted Business Technology Consultant bridging the gap between complex technology and practical business solutions.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">


          {/* Bottom Row: Credentials & Why Choose Me */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="bg-gradient-to-r from-white to-[#DDF4E7]/20 rounded-2xl p-6 md:p-8 border border-[#DDF4E7] shadow-xl shadow-[#DDF4E7]/30 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#124170] mb-4">Key Credentials & Expertise</h3>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Technology Consultant specializing in Zoho ecosystem",
                    "Expert in MSME digital transformation",
                    "Business-to-Tech Translator with proven results"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-[#DDF4E7] shadow-sm hover:shadow-[#67C090]/10 transition-shadow">
                      <CheckCircle2 className="text-[#67C090] shrink-0 w-5 h-5" />
                      <span className="text-[#26667F] font-medium text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Why Choose Me */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-full"
            >
              <div className="bg-[#124170] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#26667F]/40 rounded-full blur-3xl z-0" />

                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Why Choose Me?</h3>
                <ul className="grid grid-cols-1 gap-4 relative z-10">
                  {[
                    "Technology serves your business goals",
                    "Partnership over transaction relationships",
                    "Practical solutions your team can use"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#67C090] shrink-0 mt-0.5 w-5 h-5" />
                      <span className="text-[#DDF4E7] text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>


          </div>
          {/* Mission & Value Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#DDF4E7] shadow-xl shadow-[#DDF4E7]/30">
              <h3 className="text-2xl font-bold text-[#124170] mb-4">My Mission & Value</h3>
              <div className="space-y-4 text-[#26667F] leading-relaxed text-base md:text-lg">
                <p>
                  Empowering MSMEs to unlock new levels of operational efficiency and revenue growth through strategic technology implementation and process optimization.

                  I bring a rare combination of business acumen, technical understanding, and strong communication skills to translate business needs into technology solutions that deliver measurable results.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
