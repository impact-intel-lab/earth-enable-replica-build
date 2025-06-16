
import { Sprout, Droplets, Shield, TrendingDown } from 'lucide-react';

const WhyBiocharWorks = () => {
  const farmerBenefits = [
    {
      icon: Sprout,
      title: "Improved Soil Health",
      description: "Biochar enhances soil structure, increases nutrient retention, and promotes beneficial microbial activity",
      stat: "40% increase in crop yields"
    },
    {
      icon: Droplets,
      title: "Better Water Retention",
      description: "Porous structure holds water and nutrients, reducing irrigation needs and fertilizer costs",
      stat: "30% less water required"
    },
    {
      icon: Shield,
      title: "Drought Resilience",
      description: "Improved soil water-holding capacity helps crops survive dry periods and climate variability",
      stat: "50% better drought tolerance"
    },
    {
      icon: TrendingDown,
      title: "Reduced Input Costs",
      description: "Less fertilizer needed due to improved nutrient retention and soil fertility",
      stat: "25% reduction in fertilizer use"
    }
  ];

  const environmentalBenefits = [
    {
      title: "Reduced Methane Emissions",
      description: "Prevents anaerobic decomposition that produces methane",
      impact: "80% reduction",
      color: "blue"
    },
    {
      title: "Lower Nitrous Oxide",
      description: "Stable carbon structure prevents N2O release",
      impact: "60% reduction",
      color: "green"
    },
    {
      title: "Eliminated Air Pollution",
      description: "Stops PM2.5 and harmful smoke from open burning",
      impact: "100% elimination",
      color: "purple"
    },
    {
      title: "Long-term Carbon Storage",
      description: "Biochar remains stable in soil for hundreds of years",
      impact: "1000+ years",
      color: "forest"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-forest-200 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 border border-earth-200 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-forest-100 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-forest-100 text-forest-700 px-6 py-3 rounded-full mb-8 font-semibold">
            <Sprout size={20} />
            Proven Benefits
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Why Biochar<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-600 to-earth-600">
              Works
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Biochar delivers measurable benefits to farmers while creating significant environmental impact. 
            Here's how it transforms both agriculture and climate outcomes.
          </p>
        </div>

        {/* Benefits to Farmers */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-16">Benefits to Farmers</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {farmerBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-forest-50 to-earth-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-forest-100 group hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="text-forest-600" size={32} />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-forest-600 transition-colors">
                  {benefit.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                
                <div className="bg-forest-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  {benefit.stat}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Benefits */}
        <div className="bg-gradient-to-br from-gray-50 to-forest-50 rounded-3xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Environmental Benefits</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {environmentalBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-${benefit.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <div className={`w-6 h-6 bg-${benefit.color}-500 rounded-full`}></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-900">{benefit.title}</h4>
                      <span className={`bg-${benefit.color}-100 text-${benefit.color}-700 px-3 py-1 rounded-full text-sm font-semibold`}>
                        {benefit.impact}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-12 bg-gradient-to-r from-forest-500 to-earth-500 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold text-center mb-8">Combined Environmental Impact</h4>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <p className="text-forest-100">Years carbon storage</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">80%</div>
                <p className="text-forest-100">Emission reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-forest-100">Air pollution elimination</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBiocharWorks;
