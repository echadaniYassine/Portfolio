const Hero = ({ dictionary }) => (
  <section
    id="home"
    className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-6 py-12 md:py-24 animate-fade-in-up"
  >
    {/* Text Section */}
    <div className="flex-1 space-y-6 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
        {dictionary.greeting.split(' ').slice(0, 3).join(' ')}{' '}
        <span className="bg-gradient-to-r from-primary to-purple-600 dark:from-dark-primary dark:to-purple-400 bg-clip-text text-transparent">
          Yassine
        </span>
        <br />
        <span className="text-foreground dark:text-dark-foreground">This is Codervv</span>
      </h1>

      <p className="text-lg text-foreground/70 dark:text-dark-foreground/70 max-w-xl mx-auto md:mx-0">
        {dictionary.subtitle}
      </p>

      <div className="flex justify-center md:justify-start gap-4 pt-6">
        <a
          href="#contact"
          className="px-6 py-3 font-semibold bg-primary text-white rounded-xl shadow-lg hover:bg-primary/90 hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300"
        >
          {dictionary.getProject}
        </a>
        <a
          href="#about"
          className="px-6 py-3 font-semibold border border-border dark:border-dark-border rounded-xl bg-card dark:bg-dark-card hover:bg-foreground/10 dark:hover:bg-dark-foreground/10 shadow-md transition-transform transform hover:-translate-y-1 duration-300"
        >
          {dictionary.letsTalk}
        </a>
      </div>
    </div>

    {/* Image Section */}
    <div className="flex-1 mt-16 md:mt-0 flex justify-center relative">
      <div className="relative group">
        <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/20 via-purple-500/20 to-indigo-400/20 blur-2xl opacity-75 group-hover:blur-3xl transition-all duration-700" />
        <img
          src="/yassine-hero.png"
          alt="Echadani Yassine"
          className="relative w-3/4 md:w-full max-w-md rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  </section>
);

export default Hero;
