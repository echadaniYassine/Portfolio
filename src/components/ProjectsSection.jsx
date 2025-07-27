// components/ProjectsSection.jsx
export default function ProjectsSection({ t }) {
  // Mock projects data if not provided
  const projects = t?.projects || [
    {
      title: "E-commerce MERN",
      description: "Un site e-commerce complet construit avec React et Node.js"
    },
    {
      title: "Portfolio OKY", 
      description: "Portfolio professionnel avec Next.js et Tailwind CSS"
    }
  ];

  return (
    <section id="projects" className="w-full section-padding relative overflow-hidden">
      {/* Full width background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-mesh opacity-30"></div>
      
      {/* Content with proper container */}
      <div className="w-full relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-primary">
              {t?.projects_title || 'Projets'}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary via-accent to-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Showcasing my latest work and creative solutions
            </p>
          </div>
          
          <div className="mx-auto">
            {projects.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative animate-slide-up bg-glass rounded-3xl overflow-hidden border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-glow-primary"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Project image placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
                      <div className="relative z-10 text-white text-6xl font-bold opacity-30">
                        {project.title.charAt(0)}
                      </div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    
                    <div className="relative p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-gradient-primary transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex gap-3">
                        <button className="flex-1 px-4 md:px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-glow-primary transition-all duration-300 hover:scale-105 btn-glow text-sm md:text-base">
                          View Live
                        </button>
                        <button className="flex-1 px-4 md:px-6 py-3 bg-glass border border-primary/30 rounded-xl font-semibold hover:border-primary hover:shadow-glow-primary transition-all duration-300 hover:scale-105 text-sm md:text-base">
                          <span className="text-gradient-primary">View Code</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-glass p-12 rounded-3xl border max-w-md mx-auto">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient-primary">Projects Coming Soon</h3>
                  <p className="text-muted-foreground">
                    Exciting projects are currently in development!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}