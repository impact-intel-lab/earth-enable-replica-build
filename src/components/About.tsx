
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm text-forest-500 font-semibold mb-4 tracking-wider uppercase">
            2025
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Despite Advances In Agri-Tech,<br />
            Traditional Labor-Intensive<br />
            Farming Highlights Ongoing<br />
            Inefficiencies.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Organic Farm</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sustainable farm - Agro-culture farm
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Harvesting Update</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Farming Technique
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
