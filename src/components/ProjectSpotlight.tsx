
import { MapPin, Calendar, Award, TrendingUp } from 'lucide-react';

const ProjectSpotlight = () => {
  const projectStats = [
    { label: "Project Location", value: "Northern Thailand", icon: MapPin },
    { label: "Launch Timeline", value: "End of 2025", icon: Calendar },
    { label: "Certification", value: "Puro.earth Pre-certified", icon: Award },
    { label: "Annual Impact", value: "1,300 CDR Credits", icon: TrendingUp }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-16 w-32 h-32 border border-forest-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-24 h-24 border border-earth-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-forest-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-forest-500/20 text-forest-300 px-6 py-3 rounded-full mb-8 font-semibold border border-forest-500/30">
            <Award size={20} />
            Project Spotlight
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Our First Project in<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-earth-400">
              Northern Thailand
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A groundbreaking biochar facility that transforms agricultural waste into climate solutions, 
            certified under international standards and ready to scale across Southeast Asia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Project Stats */}
          <div className="space-y-6">
            {projectStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-forest-500/20 rounded-2xl flex items-center justify-center border border-forest-500/30">
                    <stat.icon className="text-forest-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{stat.label}</h3>
                    <p className="text-forest-300 font-medium">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Progress Section */}
            <div className="bg-gradient-to-r from-forest-500/20 to-earth-500/20 rounded-3xl p-8 border border-forest-500/30 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold text-white mb-6">Project Progress</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-forest-300 font-medium">Site Preparation</span>
                    <span className="text-white font-semibold">100%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-forest-500 to-forest-400 rounded-full transition-all duration-1000" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-earth-300 font-medium">Equipment Installation</span>
                    <span className="text-white font-semibold">75%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-earth-500 to-earth-400 rounded-full transition-all duration-1000" style={{ width: '75%', animationDelay: '0.5s' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-300 font-medium">Certification Process</span>
                    <span className="text-white font-semibold">90%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000" style={{ width: '90%', animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop"
                alt="Biochar Production Facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h4 className="text-xl font-bold text-white mb-3">Construction Progress</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-forest-400">3,000</div>
                      <p className="text-white/80 text-sm">Tons Capacity</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-earth-400">1,300</div>
                      <p className="text-white/80 text-sm">Annual Credits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-forest-500/20 rounded-full flex items-center justify-center backdrop-blur-md border border-forest-500/30 animate-bounce">
              <Award className="text-forest-400" size={32} />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-earth-500/20 rounded-full flex items-center justify-center backdrop-blur-md border border-earth-500/30 animate-pulse">
              <TrendingUp className="text-earth-400" size={28} />
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-4xl font-bold text-forest-400 mb-2">3,000</div>
            <h4 className="text-lg font-semibold text-white mb-2">Tons of Corn Residue</h4>
            <p className="text-gray-400 text-sm">Removed from open burning annually</p>
          </div>
          
          <div className="text-center bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="text-4xl font-bold text-earth-400 mb-2">1,300</div>
            <h4 className="text-lg font-semibold text-white mb-2">CDR Credits Generated</h4>
            <p className="text-gray-400 text-sm">Verified carbon removal per year</p>
          </div>
          
          <div className="text-center bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
            <h4 className="text-lg font-semibold text-white mb-2">Emission Reduction</h4>
            <p className="text-gray-400 text-sm">Complete elimination of field burning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSpotlight;
