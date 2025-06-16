
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-12 w-16 h-16 border border-white/30 rounded-full flex items-center justify-center">
        <Plus className="text-white/50" size={24} />
      </div>
      <div className="absolute top-1/3 right-16 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center">
        <Plus className="text-white/50" size={16} />
      </div>
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 border border-white/30 rounded-full flex items-center justify-center">
        <Plus className="text-white/50" size={12} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <p className="text-white/80 text-sm uppercase tracking-wider mb-4 font-medium">
          # Next Generation Agriculture
        </p>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Bring Fresh Growth<br />
          To Agriculture.
        </h1>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Connecting farmers with cutting-edge technology and sustainable practices. From precision farming to innovative solutions.
        </p>
        
        <Button 
          size="lg" 
          className="bg-forest-500 hover:bg-forest-600 text-white px-8 py-4 text-lg font-semibold rounded-full group transition-all duration-300"
        >
          Get Started
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </Button>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
          <p className="text-white text-sm font-medium">The Journey to a Perfection.</p>
          <p className="text-white/70 text-xs mt-1">Eat the Fresh Experience</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
