
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/20"></div>
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute top-1/4 left-12 w-20 h-20 border-2 border-white/20 rounded-full flex items-center justify-center animate-pulse">
        <div className="w-8 h-8 bg-forest-500/30 rounded-full animate-ping"></div>
      </div>
      <div className="absolute top-1/3 right-16 w-16 h-16 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
        <Plus className="text-white/60 animate-spin" size={20} style={{ animation: 'spin 8s linear infinite' }} />
      </div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce">
        <div className="w-4 h-4 bg-forest-400 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 animate-fade-in">
        <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          <div className="w-2 h-2 bg-forest-400 rounded-full animate-pulse"></div>
          <p className="text-white/90 text-sm font-medium tracking-wide">
            Climate Justice • Environmental Equity • Clean Air Rights
          </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
          Turning Crop Waste<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-earth-300">
            into Clean Air
          </span><br />
          and Climate Solutions
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          EnableEarth builds industrial-scale biochar projects that stop open burning and permanently remove carbon from the atmosphere. 
          <strong className="text-forest-300 block mt-2">We have the right to breathe clean air.</strong>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-forest-500 hover:bg-forest-600 text-white px-10 py-6 text-lg font-semibold rounded-full group transition-all duration-500 shadow-2xl hover:shadow-forest-500/25 hover:scale-105"
          >
            Partner With Us
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-10 py-6 text-lg font-semibold rounded-full group transition-all duration-500"
          >
            <Play className="mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
            Learn About Our Projects
          </Button>
        </div>
      </div>

      {/* Enhanced Bottom Section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="bg-white/15 backdrop-blur-lg rounded-3xl px-8 py-6 border border-white/20 shadow-2xl">
          <p className="text-white text-lg font-semibold mb-2">Stop Open Agricultural Burning</p>
          <div className="flex items-center gap-4 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-forest-400 rounded-full"></div>
              Clean Air
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-earth-400 rounded-full"></div>
              Store Carbon
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              Climate Justice
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-12 bg-white/20 rounded-full overflow-hidden">
          <div className="w-full h-4 bg-gradient-to-b from-forest-400 to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
