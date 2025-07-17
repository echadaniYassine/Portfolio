const About = ({ dictionary }) => (
  <section id="about" className="scroll-mt-20">
    <div className="text-center mb-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary dark:text-dark-primary">
        {dictionary.title}
      </p>
      <h3 className="mt-2 text-3xl font-bold text-foreground dark:text-dark-foreground">
        {dictionary.name}
      </h3>
      <p className="text-lg text-foreground/70 dark:text-dark-foreground/70">
        {dictionary.role}
      </p>
    </div>

    <div className="max-w-3xl mx-auto mb-12 text-center text-foreground/90 dark:text-dark-foreground/90">
      <p>{dictionary.bio}</p>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-center">
      {/* Experience */}
      <div className="rounded-xl bg-accent-teal-light p-8 dark:bg-accent-teal-dark/20">
        <p className="text-4xl font-bold text-accent-teal-dark dark:text-accent-teal-light">
          {dictionary.experience.split(' ')[0]}
        </p>
        <p className="text-foreground/80 dark:text-dark-foreground/80">
          {dictionary.experience.split(' ').slice(1).join(' ')}
        </p>
      </div>

      {/* Projects */}
      <div className="rounded-xl bg-accent-amber-light p-8 dark:bg-accent-amber-dark/20">
        <p className="text-4xl font-bold text-accent-amber-dark dark:text-accent-amber-light">
          {dictionary.projects.split(' ')[0]}
        </p>
        <p className="text-foreground/80 dark:text-dark-foreground/80">
          {dictionary.projects.split(' ').slice(1).join(' ')}
        </p>
      </div>

      {/* Technologies */}
      <div className="rounded-xl bg-accent-lime-light p-8 dark:bg-accent-lime-dark/20">
        <p className="text-4xl font-bold text-accent-lime-dark dark:text-accent-lime-light">
          {dictionary.technologies.split(' ')[0]}
        </p>
        <p className="text-foreground/80 dark:text-dark-foreground/80">
          {dictionary.technologies.split(' ').slice(1).join(' ')}
        </p>
      </div>
    </div>
  </section>
);

export default About;
