
import { AlertTriangle, Wind, Factory } from 'lucide-react';

const Problem = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-red-200 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-orange-200 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-red-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-red-100 text-red-700 px-6 py-3 rounded-full mb-6 font-semibold">
            <AlertTriangle size={20} />
            Critical Environmental Issue
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            The Hidden Cost of Corn:<br />
            <span className="text-red-600">Pollution and Waste</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Thailand produces ~5 million tons of corn annually, but the crop residue is burned in open fields, 
            causing severe PM2.5 air pollution and contributing to climate change.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Statistics */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-red-100 animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                  <Factory className="text-red-600" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">5M+ Tons</h3>
                  <p className="text-gray-600">Corn produced annually in Thailand</p>
                </div>
              </div>
              <div className="h-3 bg-red-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <Wind className="text-orange-600" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Severe PM2.5</h3>
                  <p className="text-gray-600">Air pollution from open burning</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Open field burning releases harmful particulates that contribute to respiratory diseases 
                and poor air quality across rural communities.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 text-white animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-4">Environmental Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Massive CO₂ emissions released to atmosphere
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Contributes to Thailand's air quality crisis
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Waste of valuable agricultural biomass
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Visual Comparison */}
          <div className="space-y-8">
            <div className="relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Current vs. Our Solution</h3>
              </div>
              
              {/* Current Practice */}
              <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">❌</span>
                  </div>
                  <h4 className="text-xl font-bold text-red-700">Open Burning</h4>
                </div>
                <div className="aspect-video bg-gradient-to-t from-red-200 to-red-100 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🔥</div>
                    <p className="text-red-700 font-medium">Harmful smoke & emissions</p>
                  </div>
                </div>
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• Releases PM2.5 pollutants</li>
                  <li>• Contributes to global warming</li>
                  <li>• Wastes valuable biomass</li>
                </ul>
              </div>

              {/* Arrow */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-100 rounded-full">
                  <ArrowRight className="text-forest-600" size={24} />
                </div>
              </div>

              {/* Our Solution */}
              <div className="bg-forest-50 border-2 border-forest-200 rounded-3xl p-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-forest-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <h4 className="text-xl font-bold text-forest-700">Biochar Production</h4>
                </div>
                <div className="aspect-video bg-gradient-to-t from-forest-200 to-forest-100 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌱</div>
                    <p className="text-forest-700 font-medium">Clean carbon storage</p>
                  </div>
                </div>
                <ul className="text-forest-700 space-y-2 text-sm">
                  <li>• Stores carbon for centuries</li>
                  <li>• Improves soil health</li>
                  <li>• Eliminates air pollution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
