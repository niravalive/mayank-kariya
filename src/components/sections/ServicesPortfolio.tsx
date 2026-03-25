import { motion } from 'framer-motion';

const servicesDetail = [
  {
    title: "CRM & Technology Implementation",
    tagline: "Zoho Ecosystem Specialist",
    description: "Complete Zoho ecosystem implementation and optimization for growing businesses.",
    tech: ["Zoho CRM", "Zoho Projects", "Zoho Books"],
    btnText: "Get Started",
    btnColor: "bg-[#124170] hover:bg-[#26667F] shadow-[#124170]/30",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    title: "Business Process Optimization",
    tagline: "Data-Driven Excellence",
    description: "Streamline operations through intelligent process discovery and automation.",
    tech: ["Process Mining", "Workflow Automation", "Performance Analytics"],
    btnText: "Get Started",
    btnColor: "bg-[#67C090] hover:bg-[#26667F] shadow-[#67C090]/30",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    title: "Static Website Development",
    tagline: "Conversion-Focused Design",
    description: "Professional, fast-loading websites that convert visitors into customers.",
    tech: ["SEO-Optimized", "Mobile-Responsive", "Modern Frameworks"],
    btnText: "Get Started",
    btnColor: "bg-[#26667F] hover:bg-[#124170] shadow-[#26667F]/30",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    title: "AI Integration Solutions",
    tagline: "Practical AI Implementation",
    description: "Ethical AI adoption focused on augmenting human capabilities.",
    tech: ["Process Automation", "Customer Service Enhancement", "Data Analysis"],
    btnText: "Get Started",
    btnColor: "bg-[#124170] hover:bg-[#67C090] shadow-[#124170]/30",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800&h=400",
  }
];

export const ServicesPortfolio = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-6 sm:px-10 bg-[#DDF4E7]/20" id="servicesportfolio">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#124170] mb-6">
            Our Services
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesDetail.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all border border-[#DDF4E7] flex flex-col h-full hover:shadow-xl hover:shadow-[#124170]/10">
                <div className="h-48 overflow-hidden relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-[#124170] mb-1 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-base text-[#67C090] font-semibold mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-base text-[#26667F] mb-6 flex-1 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.tech.map((t, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-medium text-[#26667F]/80">
                        <div className="w-1 h-1 bg-[#67C090] rounded-full" />
                        {t}
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-[#124170] hover:bg-[#26667F] text-white text-base font-bold py-3 rounded-xl transition-all shadow-md shadow-[#124170]/10">
                    {service.btnText}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPortfolio;
