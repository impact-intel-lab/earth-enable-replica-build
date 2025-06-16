
import { Leaf, Shield, Recycle, Droplets } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "Stores Carbon for Centuries",
      description: "Biochar locks carbon away permanently, preventing it from returning to the atmosphere",
      color: "forest"
    },
    {
      icon: Shield,
      title: "Prevents GHG Emissions",
      description: "Eliminates methane and nitrous oxide emissions from decomposing crop waste",
      color: "blue"
    },
    {
      icon: Recycle,
      title: "Stops Open Burning",
      description: "Transforms agricultural waste into valuable biochar instead of burning it",
      color: "earth"
    },
    {
      icon: Droplets,
      title: "Enhances Soil & Water",
      description: "Improves soil structure, nutrient retention, and water holding capacity",
      color: "cyan"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-forest-50 to-earth-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-forest-200 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 border border-earth-200 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-forest-100 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-forest-100 text-forest-700 px-6 py-3 rounded-full mb-8 font-semibold">
            <Leaf size={20} />
            Our Climate Solution
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Turning Crop Waste<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-600 to-earth-600">
              into Biochar
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Biochar is a charcoal-like solid created through pyrolysis - heating organic matter in the absence of oxygen. 
              This ancient technology offers modern solutions to climate change and agricultural challenges.
            </p>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-forest-100 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Biochar Process</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl">🌾</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Collect Waste</h4>
                  <p className="text-sm text-gray-600">Gather corn stalks and agricultural residue</p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl">🔥</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Pyrolysis</h4>
                  <p className="text-sm text-gray-600">Heat without oxygen at 400-700°C</p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚫</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Create Biochar</h4>
                  <p className="text-sm text-gray-600">Stable carbon-rich material</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`w-16 h-16 bg-${benefit.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`text-${benefit.color}-600`} size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-forest-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-forest-500 to-earth-500 rounded-3xl p-12 text-white animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-3xl font-bold mb-6">Environmental Impact</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1,300+</div>
                <p className="text-forest-100">CDR Credits/Year</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3,000</div>
                <p className="text-forest-100">Tons Residue Processed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-forest-100">Emissions Prevented</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
