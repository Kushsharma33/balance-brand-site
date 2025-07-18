
const Benefits = () => {
  const benefits = [
    {
      icon: '💪',
      title: 'Strength & Flexibility',
      description: 'Build physical strength while improving flexibility and mobility through mindful movement.'
    },
    {
      icon: '🧘‍♀️',
      title: 'Stress Relief',
      description: 'Find peace and calm through breathing techniques and meditation practices.'
    },
    {
      icon: '❤️',
      title: 'Community & Support',
      description: 'Join a welcoming community of like-minded individuals on their wellness journey.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4 p-8">
              <div className="text-6xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-medium text-sage-800">
                {benefit.title}
              </h3>
              <p className="text-sage-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
