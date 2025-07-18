
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
      popular: false,
      bgColor: 'bg-card'
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
      popular: true,
      bgColor: 'bg-primary'
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
      popular: false,
      bgColor: 'bg-card'
    }
  ];

  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl md:text-6xl font-serif font-light text-foreground leading-tight">
            Choose Your Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Flexible options to support your wellness practice, whatever your schedule
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-10 rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? `${plan.bgColor} border-primary text-primary-foreground soft-shadow transform scale-105` 
                  : `${plan.bgColor} border-border hover:border-primary/50 gentle-shadow`
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-medium shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-10">
                <h3 className={`text-2xl font-serif font-medium mb-4 ${plan.popular ? 'text-primary-foreground' : 'text-card-foreground'}`}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className={`text-5xl font-serif font-light ${plan.popular ? 'text-primary-foreground' : 'text-card-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg font-light ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'} ml-2`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'} leading-relaxed font-light`}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-4 ${plan.popular ? 'bg-primary-foreground/60' : 'bg-primary'}`}></div>
                    <span className={`font-light ${plan.popular ? 'text-primary-foreground/90' : 'text-card-foreground'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full py-4 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
                  plan.popular 
                    ? 'bg-background text-foreground hover:bg-background/90' 
                    : 'bg-primary hover:bg-primary/90 text-primary-foreground'
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
