
const Footer = () => {
  const footerSections = [
    {
      title: 'COMPANY',
      links: ['About', 'Careers', 'Press', 'News', 'Media Kit', 'Contact']
    },
    {
      title: 'RESOURCES',
      links: ['Blog', 'Newsletter', 'Events', 'Help Center', 'Tutorials', 'Support']
    },
    {
      title: 'COURSES',
      links: ['Sustainable Farming', 'Crop Management', 'Soil Health', 'Technology Integration']
    },
    {
      title: 'HELP',
      links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy']
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-forest-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EE</span>
              </div>
              <span className="text-xl font-bold">EnableEarth</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We're leading the way to better farms – bringing real innovation that's transforming agriculture for a sustainable future.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-forest-500 transition-colors cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-forest-500 transition-colors cursor-pointer">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-forest-500 transition-colors cursor-pointer">
                <span className="text-xs">in</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-forest-500 transition-colors cursor-pointer">
                <span className="text-xs">ig</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-sm mb-4 text-gray-300">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 EnableEarth. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
