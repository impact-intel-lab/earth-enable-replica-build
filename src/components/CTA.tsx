
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Join The Agricultural<br />
          Revolution Today!
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-6 py-4 rounded-full w-full sm:w-96 text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-forest-500 outline-none"
          />
          
          <Button 
            size="lg"
            className="bg-forest-500 hover:bg-forest-600 text-white px-8 py-4 rounded-full font-semibold group whitespace-nowrap"
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
