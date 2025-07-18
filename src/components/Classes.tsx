
import { Button } from './ui/button';

const Classes = () => {
  const classes = [
    {
      emoji: '🌊',
      name: 'Vinyasa Flow',
      description: 'Dynamic sequences linking breath and movement for strength and flexibility.',
      duration: '60 mins',
      bgColor: 'bg-secondary/30'
    },
    {
      emoji: '🌙',
      name: 'Yin Yoga',
      description: 'Deep stretching with long-held poses for flexibility and relaxation.',
      duration: '75 mins',
      bgColor: 'bg-accent/20'
    },
    {
      emoji: '🧘‍♀️',
      name: 'Meditation',
      description: 'Mindfulness techniques for mental clarity and inner peace.',
      duration: '30 mins',
      bgColor: 'bg-primary/20'
    },
    {
      emoji: '🔥',
      name: 'Power Yoga',
      description: 'Strength-building athletic practice for fitness enthusiasts.',
      duration: '45 mins',
      bgColor: 'bg-secondary/30'
    },
    {
      emoji: '🕯️',
      name: 'Restorative',
      description: 'Gentle poses with props for deep relaxation and stress relief.',
      duration: '90 mins',
      bgColor: 'bg-accent/20'
    },
    {
      emoji: '🤱',
      name: 'Prenatal Yoga',
      description: 'Safe and nurturing practice for expecting mothers.',
      duration: '60 mins',
      bgColor: 'bg-primary/20'
    }
  ];

  return (
    <section className="py-24 px-6 wellness-gradient">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl md:text-6xl font-serif font-light text-foreground leading-tight">
            Discover Your Perfect Practice
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            From energizing flows to restorative healing, find the class that speaks to your soul
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className={`${classItem.bgColor} rounded-3xl p-8 gentle-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="text-center space-y-6">
                <div className="text-5xl mb-6">{classItem.emoji}</div>
                <h3 className="text-2xl font-serif font-medium text-card-foreground">
                  {classItem.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {classItem.description}
                </p>
                <div className="text-sm text-muted-foreground font-light">
                  {classItem.duration}
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-3 font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Join Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
