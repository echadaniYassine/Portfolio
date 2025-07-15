//components/sections/Contact.jsx

const Contact = ({ dictionary }) => (
<section id="contact" className="scroll-mt-20">
<div className="text-center mb-12">
<p className="text-sm uppercase text-gray-500">LET'S CONNECT</p>
<h2 className="text-3xl font-bold">{dictionary.title}</h2>
<p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mt-4">{dictionary.subtitle}</p>
</div>
<div className="max-w-xl mx-auto">
<form className="space-y-4">
<input type="text" placeholder={dictionary.form_name} className="w-full p-4 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary" />
<input type="email" placeholder={dictionary.form_email} className="w-full p-4 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary" />
<textarea placeholder={dictionary.form_message} rows="5" className="w-full p-4 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"></textarea>
<div className="text-center">
<button type="submit" className="px-8 py-3 font-semibold bg-light-primary text-white dark:bg-dark-primary rounded-lg hover:bg-light-primary-hover dark:hover:bg-dark-primary-hover transition-colors">
{dictionary.submit}
</button>
</div>
</form>
</div>
</section>
);
export default Contact;