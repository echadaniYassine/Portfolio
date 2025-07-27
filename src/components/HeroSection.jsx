// components/HeroSection.jsx
//m
export default function HeroSection({ t }) {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Full width animated background elements */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      {/* Content with proper container */}
      <div className="w-full z-10">
        <div className="container mx-auto text-center">
          <div className="animate-slide-up max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-gradient-aurora leading-tight">
              {t?.hero_title || 'Bienvenue sur mon Portfolio'}
            </h1>
            <div className="space-y-4 mb-12 animate-fade-in animation-delay-500">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Full Stack Web & Mobile Developer
              </p>
              <p className="text-base md:text-lg text-gradient-primary font-medium">
                Creating digital experiences that inspire
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up animation-delay-1000 max-w-md mx-auto">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-semibold text-lg relative overflow-hidden btn-glow shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 bg-glass border-2 border-primary/30 text-foreground rounded-2xl font-semibold text-lg hover:border-primary hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
            >
              <span className="text-gradient-primary">Get In Touch</span>
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-primary to-transparent rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}