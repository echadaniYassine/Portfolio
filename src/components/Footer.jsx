// components/Footer.jsx
export default function Footer({ lang }) {
  return (
    <footer className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gradient-primary mb-4">
              Let's Create Something Amazing
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { name: 'GitHub', href: '#', icon: '💻' },
              { name: 'LinkedIn', href: '#', icon: '💼' },
              { name: 'Twitter', href: '#', icon: '🐦' },
              { name: 'Email', href: 'mailto:your-email@example.com', icon: '📧' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="p-3 bg-glass rounded-full border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-glow-primary group"
                aria-label={social.name}
              >
                <span className="text-2xl group-hover:animate-bounce">{social.icon}</span>
              </a>
            ))}
          </div>
          
          <div className="border-t border-gradient-to-r from-transparent via-border to-transparent pt-8">
            <p className="text-muted-foreground">
              © 2025 Portfolio. Made with{' '}
              <span className="text-red-500 animate-pulse">❤️</span>{' '}
              and lots of{' '}
              <span className="text-gradient-primary font-semibold">code</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}