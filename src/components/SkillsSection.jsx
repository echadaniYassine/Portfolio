// components/SkillsSection.jsx
export default function SkillsSection({ t }) {
  // Mock skills data if not provided
  const skills = t?.skills || [
    'React', 'Next.js', 'Node.js', 'MongoDB', 
    'Laravel', 'Flutter', 'React', 'Next.js', 
    'Node.js', 'MongoDB', 'Laravel', 'Flutter'
  ];
  
  if (!t) {
    return (
      <section id="skills" className="w-full section-padding relative">
        <div className="container mx-auto text-center">
          <div className="spinner mx-auto"></div>
        </div>
      </section>
    )
  }

  return (
    <section id="skills" className="w-full section-padding relative overflow-hidden">
      {/* Full width background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      </div>
      
      {/* Content with proper container */}
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-aurora">
              {t.skills_title || 'Compétences'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent via-primary to-secondary mx-auto rounded-full mb-6 animate-pulse"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
          
          <div className="mx-auto">
            {skills.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative animate-scale-in bg-glass p-4 md:p-6 rounded-2xl border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary to-secondary rounded-xl mx-auto mb-3 md:mb-4 flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-glow-primary">
                        {skill.charAt(0)}
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-foreground group-hover:text-gradient-primary transition-all duration-300 block leading-tight">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-muted-foreground text-lg">
                <div className="bg-glass p-8 rounded-3xl border">
                  No skills data available
                </div>
              </div>  
            )}
          </div>
        </div>
    </section>
  )
}