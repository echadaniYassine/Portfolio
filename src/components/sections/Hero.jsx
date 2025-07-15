const Hero = ({ dictionary }) => (
  <section id="home" className="flex flex-col md:flex-row items-center min-h-[calc(90vh)] animate-fade-in-up">
    <div className="flex-1 space-y-4 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        {dictionary.greeting.split(' ').slice(0, 3).join(' ')} <span className="text-primary dark:text-dark-primary">Yassine</span>
        <br />
        This is Coder
      </h1>
      <p className="text-lg text-foreground/70 dark:text-dark-foreground/70 max-w-lg mx-auto md:mx-0">{dictionary.subtitle}</p>
      <div className="flex justify-center md:justify-start space-x-4 pt-4">
        <a href="#contact" className="px-6 py-3 font-semibold bg-primary text-white rounded-lg hover:bg-primary-hover shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          {dictionary.getProject}
        </a>
        <a href="#about" className="px-6 py-3 font-semibold border border-border dark:border-dark-border rounded-lg hover:bg-card dark:hover:bg-dark-card transform hover:-translate-y-1 transition-all duration-300">
          {dictionary.letsTalk}
        </a>
      </div>
    </div>
    <div className="flex-1 mt-12 md:mt-0 flex justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 dark:bg-dark-primary/20 rounded-full blur-3xl"></div>
        <img src="/yassine-hero.png" alt="Echadani Yassine" className="relative w-3/4 md:w-full max-w-md" />
      </div>
    </div>
  </section>
);
export default Hero;