
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop',
      title: 'Greenhouse Irrigation',
      category: 'Technology Integration'
    },
    {
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop',
      title: 'GIS',
      category: 'Location Analysis'
    },
    {
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=800&auto=format&fit=crop',
      title: 'Technology Integration',
      category: 'Smart Farming'
    },
    {
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
      title: 'Agricultural Intelligence',
      category: 'Data Analytics'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Button 
            variant="outline" 
            className="mb-6 text-forest-500 border-forest-500 hover:bg-forest-50"
          >
            Get Started Now
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-forest-500 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600">
                {service.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
