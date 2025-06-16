
import { Button } from '@/components/ui/button';

const Technology = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Collaborate And Learn<br />
            From Industry Experts<br />
            And Enthusiasts
          </h2>
          
          <Button 
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Technology;
