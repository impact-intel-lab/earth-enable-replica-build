
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Globe, Award, Target } from 'lucide-react';

const JoinMovement = () => {
  const partnerTypes = [
    {
      icon: Globe,
      title: "International Organizations",
      description: "Climate funds, development banks, and environmental agencies",
      examples: ["World Bank", "Green Climate Fund", "UN Environment"]
    },
    {
      icon: Users,
      title: "Corporate Partners",
      description: "Companies seeking verified carbon removal credits",
      examples: ["Tech Companies", "Manufacturing", "Airlines"]
    },
    {
      icon: Award,
      title: "Certification Bodies",
      description: "Standards organizations ensuring quality and verification",
      examples: ["Puro.earth", "Verra", "Gold Standard"]
    },
    {
      icon: Target,
      title: "Local Communities",
      description: "Farmers, cooperatives, and rural development groups",
      examples: ["Farmer Co-ops", "Rural Banks", "Agricultural Groups"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-forest-900 to-earth-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-16 w-32 h-32 border border-forest-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-24 h-24 border border-earth-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 border border-forest-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-forest-500/20 text-forest-300 px-6 py-3 rounded-full mb-8 font-semibold border border-forest-500/30">
            <Users size={20} />
            Partnership Opportunities
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Join the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-earth-400">
              Movement
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            We're scaling biochar projects across Southeast Asia, building a cleaner, climate-resilient future. 
            Partner with us to transform agricultural waste into climate solutions.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-3xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Our Expansion Vision</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-forest-400 mb-2">10+</div>
                <p className="text-gray-300 text-sm">Projects by 2030</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-earth-400 mb-2">5</div>
                <p className="text-gray-300 text-sm">Countries in SEA</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">100K+</div>
                <p className="text-gray-300 text-sm">Tons CO₂ removed/year</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {partnerTypes.map((partner, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 bg-forest-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-forest-500/30">
                <partner.icon className="text-forest-400" size={32} />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-forest-300 transition-colors">
                {partner.title}
              </h4>
              
              <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                {partner.description}
              </p>
              
              <div className="space-y-1">
                {partner.examples.map((example, i) => (
                  <div key={i} className="text-xs text-forest-300 bg-forest-500/10 px-3 py-1 rounded-full inline-block mr-2">
                    {example}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certification Logos Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 mb-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Certified & Verified</h3>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-forest-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-forest-500/30">
                <Award className="text-forest-400" size={40} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Puro.earth</h4>
              <p className="text-gray-400 text-sm">Pre-certified carbon removal</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-earth-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-earth-500/30">
                <Globe className="text-earth-400" size={40} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">International Standards</h4>
              <p className="text-gray-400 text-sm">Following global best practices</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <Target className="text-blue-400" size={40} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Verified Impact</h4>
              <p className="text-gray-400 text-sm">Third-party measurement & reporting</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Partner with EnableEarth?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in scaling biochar solutions across Southeast Asia and making a lasting impact on climate change.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="bg-forest-500 hover:bg-forest-600 text-white px-10 py-6 text-lg font-semibold rounded-full group transition-all duration-500 shadow-2xl hover:shadow-forest-500/25 hover:scale-105"
            >
              Become a Partner
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-10 py-6 text-lg font-semibold rounded-full group transition-all duration-500"
            >
              Learn More About Our Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMovement;
