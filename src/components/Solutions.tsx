
const Solutions = () => {
  const solutions = [
    {
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600&auto=format&fit=crop',
      title: 'Crop Surveillance',
      description: 'Real time data analysis and monitoring for optimal crop management and growth tracking.',
      category: 'Farming Precision'
    },
    {
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop',
      title: 'Automated Farming',
      description: 'Advanced automation systems for efficient and sustainable agricultural operations.',
      category: 'Smart Agriculture'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Next-Gen Solutions For<br />
            Optimal Crop Growth
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide cutting-edge agricultural technology solutions designed to maximize productivity while maintaining sustainable farming practices for a better future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-8">
                <div className="text-sm text-forest-500 font-semibold mb-2 uppercase tracking-wider">
                  {solution.category}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
