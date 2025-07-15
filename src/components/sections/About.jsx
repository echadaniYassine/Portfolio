const About = ({ dictionary }) => (
  <section id="about" className="scroll-mt-20">
    <div className="text-center mb-12">
      <p className="text-sm text-primary dark:text-dark-primary uppercase font-semibold tracking-widest">{dictionary.title}</p>
      <h3 className="text-3xl font-bold mt-2">{dictionary.name}</h3>
      <p className="text-lg text-foreground/70 dark:text-dark-foreground/70">{dictionary.role}</p>
    </div>
    <div className="text-center max-w-3xl mx-auto mb-12 text-foreground/90 dark:text-dark-foreground/90">
      <p>{dictionary.bio}</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      <div className="p-8 rounded-xl bg-accent-teal-light dark:bg-accent-teal-dark/20">
        <p className="text-4xl font-bold text-accent-teal-dark dark:text-accent-teal-light">{dictionary.experience.split(' ')[0]}</p>
        <p className="text-foreground/80 dark:text-dark-foreground/80">{dictionary.experience.split(' ').slice(1).join(' ')}</p>
      </div>
      <div className="p-8 rounded-xl bg-accent-amber-light dark:bg-accent-amber-dark/20">
        <p className="text-4xl font-bold text-accent-amber-dark dark:text-accent-amber-light">{dictionary.projects.split(' ')[0]}</p>
        <p className="text-foreground/80 dark:text-dark-foreground/80">{dictionary.projects.split(' ').slice(1).join(' ')}</p>
      </div>
      <div className="p-8 rounded-xl bg-accent-lime-light dark:bg-accent-lime-dark/20">
        <p className="text-4xl font-bold text-accent-lime-dark dark:text-accent-lime-light">{dictionary.technologies.split(' ')[0]}</p>
        <p className="text-foreground/80 dark:text-dark-foreground/80">{dictionary.technologies.split(' ').slice(1).join(' ')}</p>
      </div>
    </div>
  </section>
);
export default About;