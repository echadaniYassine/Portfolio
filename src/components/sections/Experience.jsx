const Experience = ({ dictionary }) => (
  <section id="experience" className="scroll-mt-20 px-4 py-10 bg-background dark:bg-dark-background transition-colors duration-500">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-foreground dark:text-dark-foreground">{dictionary.title}</h2>
    </div>

    <div className="relative border-l-2 border-border dark:border-dark-border pl-10 space-y-12">
      {/* Timeline Item 1 */}
      <div className="relative group">
        <div className="absolute -left-[49px] top-1 h-4 w-4 rounded-full bg-primary dark:bg-dark-primary border-4 border-background dark:border-dark-background shadow-md transition-transform duration-500 group-hover:scale-110 animate-pulse"></div>
        <p className="text-sm text-foreground/70 dark:text-dark-foreground/70">2022 - 2024</p>
        <h4 className="font-bold text-xl text-foreground dark:text-dark-foreground transition-colors duration-300 group-hover:text-primary dark:group-hover:text-dark-primary">
          {dictionary.education2_title}
        </h4>
        <p className="text-foreground/60 dark:text-dark-foreground/60">{dictionary.education2_details}</p>
      </div>

      {/* Timeline Item 2 */}
      <div className="relative group">
        <div className="absolute -left-[49px] top-1 h-4 w-4 rounded-full bg-primary dark:bg-dark-primary border-4 border-background dark:border-dark-background shadow-md transition-transform duration-500 group-hover:scale-110 animate-pulse"></div>
        <p className="text-sm text-foreground/70 dark:text-dark-foreground/70">Apr - Jul 2024</p>
        <h4 className="font-bold text-xl text-foreground dark:text-dark-foreground transition-colors duration-300 group-hover:text-primary dark:group-hover:text-dark-primary">
          {dictionary.work1_title}
        </h4>
        <p className="text-foreground/60 dark:text-dark-foreground/60">{dictionary.work1_details}</p>
      </div>
    </div>
  </section>
);

export default Experience;
