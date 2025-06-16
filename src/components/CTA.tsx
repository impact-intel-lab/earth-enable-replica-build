
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, MessageCircle, Calendar } from 'lucide-react';
import { useState } from 'react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch directly",
      action: "Send Email",
      href: "mailto:contact@enableearth.com"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick chat about partnerships",
      action: "Start Chat",
      href: "#"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      description: "Book a meeting with our team",
      action: "Book Meeting",
      href: "#"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-forest-500/20 text-forest-300 px-6 py-3 rounded-full mb-8 font-semibold border border-forest-500/30">
            <Mail size={20} />
            Get in Touch
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Partner With<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-earth-400">
              EnableEarth
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to join the agricultural revolution? Let's build a cleaner, climate-resilient future together 
            through innovative biochar solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Company/Organization"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Partnership Interest</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent backdrop-blur-sm">
                  <option value="" className="bg-gray-800 text-white">Select partnership type</option>
                  <option value="carbon-credits" className="bg-gray-800 text-white">Carbon Credit Purchase</option>
                  <option value="investment" className="bg-gray-800 text-white">Investment Opportunity</option>
                  <option value="technology" className="bg-gray-800 text-white">Technology Partnership</option>
                  <option value="expansion" className="bg-gray-800 text-white">Geographic Expansion</option>
                  <option value="other" className="bg-gray-800 text-white">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent backdrop-blur-sm resize-none"
                  placeholder="Tell us about your partnership interest..."
                ></textarea>
              </div>
              
              <Button 
                size="lg"
                className="w-full bg-forest-500 hover:bg-forest-600 text-white py-4 text-lg font-semibold rounded-xl group transition-all duration-300"
              >
                Send Message
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </form>
          </div>

          {/* Right Side - Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Other Ways to Connect</h3>
            
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="block bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-forest-500/20 rounded-2xl flex items-center justify-center border border-forest-500/30 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="text-forest-400" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">{method.title}</h4>
                    <p className="text-gray-300 text-sm">{method.description}</p>
                  </div>
                  
                  <div className="text-forest-300 font-semibold group-hover:text-forest-400 transition-colors">
                    {method.action} →
                  </div>
                </div>
              </a>
            ))}

            {/* Quick Newsletter Signup */}
            <div className="bg-gradient-to-r from-forest-500/20 to-earth-500/20 rounded-3xl p-8 border border-forest-500/30 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h4 className="text-xl font-bold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-6">Get updates on our biochar projects and climate impact.</p>
              
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent backdrop-blur-sm"
                />
                <Button 
                  size="sm"
                  className="bg-forest-500 hover:bg-forest-600 text-white px-6 py-3 rounded-xl font-semibold whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-forest-400 mb-2">24/7</div>
            <p className="text-white text-sm">Response within 24 hours</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-earth-400 mb-2">50+</div>
            <p className="text-white text-sm">Partnership inquiries monthly</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">5</div>
            <p className="text-white text-sm">Countries actively expanding</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
