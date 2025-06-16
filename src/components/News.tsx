
import { Button } from '@/components/ui/button';

const News = () => {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Changing The Game In Farming<br />
              With Sustainable Practices And<br />
              Cool Technologies, Shaping<br />
              The Future Of Agriculture
            </h2>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=800&auto=format&fit=crop"
                alt="Sustainable Agriculture"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-forest-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
