const ServiceCard = ({ title, description, contactText }) => (
  <div className="p-6 border border-border dark:border-dark-border rounded-lg space-y-3 group transition-all duration-300 hover:shadow-xl hover:border-primary/50 dark:hover:border-dark-primary/50 transform hover:-translate-y-2 bg-card dark:bg-dark-card">
    <p className="text-sm font-mono text-primary dark:text-dark-primary">01</p>
    <h4 className="font-bold text-xl">{title}</h4>
    <p className="text-foreground/70 dark:text-dark-foreground/70">{description}</p>
    <a href="#contact" className="inline-block font-semibold text-primary dark:text-dark-primary group-hover:underline">
      {contactText} →
    </a>
  </div>
);

const Services = ({ dictionary }) => (
  <section id="services" className="scroll-mt-20">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">{dictionary.title}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServiceCard title={dictionary.webDev_title} description={dictionary.webDev_desc} contactText={dictionary.contactNow} />
      <ServiceCard title={dictionary.cms_title} description={dictionary.cms_desc} contactText={dictionary.contactNow} />
      <ServiceCard title={dictionary.ecommerce_title} description={dictionary.ecommerce_desc} contactText={dictionary.contactNow} />
      <ServiceCard title={dictionary.api_title} description={dictionary.api_desc} contactText={dictionary.contactNow} />
      <ServiceCard title={dictionary.maintenance_title} description={dictionary.maintenance_desc} contactText={dictionary.contactNow} />
      <ServiceCard title={dictionary.uiux_title} description={dictionary.uiux_desc} contactText={dictionary.contactNow} />
    </div>
  </section>
);
export default Services;