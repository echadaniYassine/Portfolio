const ProjectCard = ({ imgSrc, title, description }) => (
  <div className="rounded-xl overflow-hidden group border border-border dark:border-dark-border transition-all duration-300 hover:shadow-xl hover:border-primary/50 dark:hover:border-dark-primary/50 transform hover:-translate-y-2 bg-card dark:bg-dark-card">
    <div className="overflow-hidden">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-5">
      <h4 className="text-xl font-semibold text-foreground dark:text-dark-foreground mb-2">{title}</h4>
      <p className="text-foreground/70 dark:text-dark-foreground/70">{description}</p>
    </div>
  </div>
);

const Projects = ({ dictionary }) => (
  <section id="portfolio" className="scroll-mt-20">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-foreground dark:text-dark-foreground">{dictionary.title}</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <ProjectCard imgSrc="/oky-webcraft.png" title="OKY WebCraft" description="A modern React-based website..." />
      <ProjectCard imgSrc="/asian-tasty.png" title="Asian Tasty" description="A visually engaging landing page..." />
      <ProjectCard imgSrc="/trendify-store.png" title="Trendify Store" description="A modern e-commerce web app..." />
    </div>

    <div className="text-center">
      <button className="px-8 py-3 font-medium rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-primary text-white hover:bg-primary-hover dark:bg-dark-primary dark:hover:bg-dark-primary-hover">
        {dictionary.viewAll}
      </button>
    </div>
  </section>
);

export default Projects;
