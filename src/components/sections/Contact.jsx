const Contact = ({ dictionary }) => (
  <section id="contact" className="scroll-mt-20 px-4 py-16 bg-background dark:bg-dark-background transition-colors duration-300">
    <div className="text-center mb-12">
      <p className="text-sm uppercase font-semibold tracking-widest text-primary dark:text-dark-primary">
        LET&apos;S CONNECT
      </p>
      <h2 className="text-3xl font-bold text-foreground dark:text-dark-foreground mt-2">
        {dictionary.title}
      </h2>
      <p className="max-w-2xl mx-auto mt-4 text-foreground/70 dark:text-dark-foreground/70">
        {dictionary.subtitle}
      </p>
    </div>

    <div className="max-w-xl mx-auto">
      <form className="space-y-6">
        <input
          type="text"
          placeholder={dictionary.form_name}
          className="w-full p-4 rounded-lg bg-card dark:bg-dark-card border border-border dark:border-dark-border text-foreground dark:text-dark-foreground placeholder-foreground/50 dark:placeholder-dark-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary transition"
        />
        <input
          type="email"
          placeholder={dictionary.form_email}
          className="w-full p-4 rounded-lg bg-card dark:bg-dark-card border border-border dark:border-dark-border text-foreground dark:text-dark-foreground placeholder-foreground/50 dark:placeholder-dark-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary transition"
        />
        <textarea
          placeholder={dictionary.form_message}
          rows="5"
          className="w-full p-4 rounded-lg bg-card dark:bg-dark-card border border-border dark:border-dark-border text-foreground dark:text-dark-foreground placeholder-foreground/50 dark:placeholder-dark-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary transition"
        ></textarea>
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 font-semibold rounded-lg bg-primary text-white dark:bg-dark-primary hover:bg-primary-hover dark:hover:bg-dark-primary-hover shadow-md hover:shadow-lg transition-colors transform hover:-translate-y-1 duration-300"
          >
            {dictionary.submit}
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default Contact;
