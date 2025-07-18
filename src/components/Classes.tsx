
import { Button } from './ui/button';

const Classes = () => {
  const classes = [
    {
      emoji: '🌊',
      name: 'Vinyasa Flow',
      description: 'Dynamic sequences linking breath and movement for strength and flexibility.',
      duration: '60 mins'
    },
    {
      emoji: '🌙',
      name: 'Yin Yoga',
      description: 'Deep stretching with long-held poses for flexibility and relaxation.',
      duration: '75 mins'
    },
    {
      emoji: '🧘‍♀️',
      name: 'Meditation',
      description: 'Mindfulness techniques for mental clarity and inner peace.',
      duration: '30 mins'
    },
    {
      emoji: '🔥',
      name: 'Power Yoga',
      description: 'Strength-building athletic practice for fitness enthusiasts.',
      duration: '45 mins'
    },
    {
      emoji: '🕯️',
      name: 'Restorative',
      description: 'Gentle poses with props for deep relaxation and stress relief.',
      duration: '90 mins'
    },
    {
      emoji: '🤱',
      name: 'Prenatal Yoga',
      description: 'Safe and nurturing practice for expecting mothers.',
      duration: '60 mins'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-sage-800">
            Discover Your Perfect Practice
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            From energizing flows to restorative healing, find the class that speaks to your soul
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">{classItem.emoji}</div>
                <h3 className="text-2xl font-medium text-sage-800">
                  {classItem.name}
                </h3>
                <p className="text-sage-600 leading-relaxed mb-4">
                  {classItem.description}
                </p>
                <div className="text-sm text-sage-500 mb-6">
                  {classItem.duration}
                </div>
                <Button 
                  className="w-full bg-sage-500 hover:bg-sage-600 text-white rounded-full"
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
