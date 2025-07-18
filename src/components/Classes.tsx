
import { useState } from 'react';

const Classes = () => {
  const [hoveredClass, setHoveredClass] = useState<number | null>(null);

  const classes = [
    {
      id: 1,
      name: 'Vinyasa Flow',
      description: 'Dynamic sequences linking breath and movement for strength and flexibility',
      duration: '60 mins',
      level: 'All Levels',
      icon: '🌊',
    },
    {
      id: 2,
      name: 'Restorative Yoga',
      description: 'Gentle poses with props for deep relaxation and stress relief',
      duration: '75 mins',
      level: 'Beginner',
      icon: '🕯️',
    },
    {
      id: 3,
      name: 'Power Yoga',
      description: 'Strength-building athletic practice for fitness enthusiasts',
      duration: '45 mins',
      level: 'Intermediate',
      icon: '💪',
    },
    {
      id: 4,
      name: 'Meditation',
      description: 'Mindfulness techniques for mental clarity and peace',
      duration: '30 mins',
      level: 'All Levels',
      icon: '🧘‍♀️',
    },
    {
      id: 5,
      name: 'Yin Yoga',
      description: 'Deep stretching with long-held poses for flexibility',
      duration: '90 mins',
      level: 'All Levels',
      icon: '🌙',
    },
    {
      id: 6,
      name: 'Prenatal Yoga',
      description: 'Safe and nurturing practice for expecting mothers',
      duration: '60 mins',
      level: 'Beginner',
      icon: '🤱',
    }
  ];

  return (
    <section id="classes" className="py-24 bg-sage-25">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium tracking-wide">
                OUR CLASSES
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light leading-tight text-foreground">
              Discover Your
              <span className="block text-sage-600 mt-2">Perfect Practice</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From energizing flows to restorative healing, find the class that speaks to your soul
            </p>
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem) => (
              <div
                key={classItem.id}
                className={`group p-8 bg-white rounded-2xl border border-sage-100 transition-all duration-300 cursor-pointer ${
                  hoveredClass === classItem.id 
                    ? 'shadow-xl scale-105 border-sage-200' 
                    : 'shadow-sm hover:shadow-lg'
                }`}
                onMouseEnter={() => setHoveredClass(classItem.id)}
                onMouseLeave={() => setHoveredClass(null)}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-sage-200 transition-colors">
                    {classItem.icon}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-foreground">
                      {classItem.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {classItem.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-sage-100">
                    <span className="px-3 py-1 bg-sage-50 text-sage-700 rounded-full text-sm font-medium">
                      {classItem.duration}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {classItem.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105">
              View Full Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
