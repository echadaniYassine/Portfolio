// components/ContactSection.jsx
export default function ContactSection({ t }) {
  return (
    <section id="contact" className="w-full section-padding relative overflow-hidden">
      {/* Full width background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>
      
      {/* Content with proper container */}
        <div className="container mx-auto text-center relative z-10">
          <div className="mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-aurora">
              {t?.contact_title || 'Contact'}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-8 animate-pulse"></div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              {t?.contact_description || 'Vous pouvez me contacter par email à :'}
            </p>
            
            <div className="animate-scale-in animation-delay-500 mb-12">
              <a
                href="mailto:your-email@example.com"
                className="group inline-block px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-2xl font-bold text-lg md:text-xl relative overflow-hidden btn-glow shadow-glow-primary hover:shadow-glow-accent transition-all duration-500 hover:scale-110"
              >
                <span className="relative z-10">your-email@example.com</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
            
            <div className="flex justify-center space-x-4 md:space-x-8 animate-slide-up animation-delay-1000">
              {[
                { name: 'GitHub', icon: '💻' },
                { name: 'LinkedIn', icon: '💼' },
                { name: 'Twitter', icon: '🐦' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex flex-col items-center p-4 md:p-6 bg-glass rounded-2xl border hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-glow-primary"
                >
                  <div className="text-3xl md:text-4xl mb-2 md:mb-3 group-hover:animate-bounce">{social.icon}</div>
                  <span className="text-sm md:text-lg font-semibold group-hover:text-gradient-primary transition-all duration-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}