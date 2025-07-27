// components/AboutSection.jsx
export default function AboutSection({ t }) {
  return (
    <section id="about" className="w-full section-padding relative overflow-hidden">
      {/* Full width background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-mesh opacity-50"></div>
      
      {/* Content with proper container */}
      <div className="w-full">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
                {t?.about_title || 'À propos de moi'}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <div className="bg-glass p-6 md:p-8 rounded-3xl border shadow-glow-primary">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                    {t?.about_description || "Je suis un développeur passionné basé au Maroc, spécialisé dans la création d'applications web et mobiles modernes."}
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    With a keen eye for design and a love for clean code, I bring ideas to life through innovative digital solutions.
                  </p>
                </div>
              </div>
              
              <div className="animate-slide-up animation-delay-500">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-30 animate-pulse-slow"></div>
                  <div className="relative bg-glass p-6 md:p-8 rounded-3xl border">
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-gradient-primary">What I Do</h3>
                    <ul className="space-y-4">
                      {[
                        "🚀 Full Stack Development",
                        "📱 Mobile App Development", 
                        "🎨 UI/UX Design",
                        "⚡ Performance Optimization"
                      ].map((item, index) => (
                        <li key={index} className="text-base md:text-lg flex items-center gap-3 hover:text-primary transition-colors duration-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}