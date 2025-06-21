
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
      color: 'coral',
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
      color: 'sage',
      popular: true
    },
    {
      name: 'Class Pack',
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
      color: 'cream',
      popular: false
    }
  ];

  const getCardStyles = (color: string, popular: boolean) => {
    const baseStyles = "relative p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105";
    
    if (popular) {
      return `${baseStyles} bg-sage-400 border-sage-500 text-white shadow-2xl transform scale-105`;
    }
    
    switch (color) {
      case 'coral':
        return `${baseStyles} bg-coral-50 border-coral-200 hover:border-coral-300 shadow-lg`;
      case 'sage':
        return `${baseStyles} bg-sage-50 border-sage-200 hover:border-sage-300 shadow-lg`;
      case 'cream':
        return `${baseStyles} bg-cream-50 border-cream-200 hover:border-cream-300 shadow-lg`;
      default:
        return `${baseStyles} bg-white border-gray-200 hover:border-gray-300 shadow-lg`;
    }
  };

  const getButtonStyles = (color: string, popular: boolean) => {
    if (popular) {
      return "w-full bg-white text-sage-700 hover:bg-cream-50 py-3 rounded-full font-medium transition-all duration-300";
    }
    return "w-full bg-sage-400 hover:bg-sage-500 text-white py-3 rounded-full font-medium transition-all duration-300";
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-coral-400 text-sm uppercase tracking-wider mb-4">Pricing Plans</div>
            <h2 className="text-4xl md:text-5xl font-light text-sage-800 mb-6">
              Choose Your Journey
            </h2>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto">
              Flexible options to support your wellness practice, whatever your schedule or commitment level
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={getCardStyles(plan.color, plan.popular)}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-coral-400 text-white px-6 py-2 rounded-full text-sm font-medium">
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

                <Button className={getButtonStyles(plan.color, plan.popular)}>
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16 space-y-4">
            <p className="text-sage-600">
              All plans include access to our online community and wellness resources
            </p>
            <p className="text-sm text-sage-500">
              New student special: First class free! • Pause membership anytime • No hidden fees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
