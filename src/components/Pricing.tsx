
import { Button } from './ui/button';

const Pricing = () => {
  const plans = [
    {
      name: 'Drop-In',
      price: '$25',
      period: 'per class',
      description: 'Perfect for trying out our classes',
      features: [
        'Single class access',
        'All class types',
        'Mat rental included',
        'Community access'
      ],
      popular: false
    },
    {
      name: 'Monthly Unlimited',
      price: '$120',
      period: 'per month',
      description: 'Our most popular choice for regular practitioners',
      features: [
        'Unlimited classes',
        'Priority booking',
        'Guest pass (2/month)',
        'Workshop discounts',
        'Community events'
      ],
      popular: true
    },
    {
      name: '10-Class Pack',
      price: '$200',
      period: '10 classes',
      description: 'Flexibility for busy schedules',
      features: [
        '10 class credits',
        '6-month expiry',
        'All class types',
        'Transferable',
        'Mat rental included'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-sage-800">
            Choose Your Journey
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Flexible options to support your wellness practice, whatever your schedule
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'bg-sage-500 border-sage-600 text-white shadow-2xl transform scale-105' 
                  : 'bg-white border-sage-200 hover:border-sage-300 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-peach-400 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-medium mb-2 ${plan.popular ? 'text-white' : 'text-sage-800'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-light ${plan.popular ? 'text-white' : 'text-sage-800'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-cream-100' : 'text-sage-600'} ml-2`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`${plan.popular ? 'text-cream-100' : 'text-sage-600'} leading-relaxed`}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${plan.popular ? 'bg-cream-200' : 'bg-sage-400'}`}></div>
                    <span className={`${plan.popular ? 'text-cream-100' : 'text-sage-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-white text-sage-700 hover:bg-cream-50' 
                    : 'bg-sage-500 hover:bg-sage-600 text-white'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
