
const Stats = () => {
  const stats = [
    {
      number: '50+',
      label: 'Successful Projects',
      sublabel: 'Years of Experience'
    },
    {
      number: '200+',
      label: 'Expert Programs',
      sublabel: 'Farming Programs'
    },
    {
      number: '120,000+',
      label: 'Farms Transformed',
      sublabel: 'Farms Transformed'
    },
    {
      number: '$15 Billion',
      label: 'Market Value',
      sublabel: 'Agricultural Revenue'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
