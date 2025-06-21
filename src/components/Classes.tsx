
import { useState } from 'react';

const Classes = () => {
  const [hoveredClass, setHoveredClass] = useState<number | null>(null);

  const classes = [
    {
      id: 1,
      name: 'Vinyasa Flow',
      description: 'Dynamic sequences linking breath and movement',
      duration: '60 mins',
      level: 'All Levels',
      icon: '🌊',
      color: 'sage'
    },
    {
      id: 2,
      name: 'Restorative Yoga',
      description: 'Gentle poses with props for deep relaxation',
      duration: '75 mins',
      level: 'Beginner',
      icon: '🕯️',
      color: 'coral'
    },
    {
      id: 3,
      name: 'Power Yoga',
      description: 'Strength-building athletic yoga practice',
      duration: '45 mins',
      level: 'Intermediate',
      icon: '💪',
      color: 'cream'
    },
    {
      id: 4,
      name: 'Meditation',
      description: 'Mindfulness and breathing techniques',
      duration: '30 mins',
      level: 'All Levels',
      icon: '🧘‍♀️',
      color: 'sage'
    },
    {
      id: 5,
      name: 'Yin Yoga',
      description: 'Deep stretching with long-held poses',
      duration: '90 mins',
      level: 'All Levels',
      icon: '🌙',
      color: 'coral'
    },
    {
      id: 6,
      name: 'Prenatal Yoga',
      description: 'Safe practice for expecting mothers',
      duration: '60 mins',
      level: 'Beginner',
      icon: '🤱',
      color: 'cream'
    }
  ];

  const getCardStyles = (color: string, isHovered: boolean) => {
    const baseStyles = "p-6 rounded-2xl transition-all duration-300 cursor-pointer border";
    const hoverTransform = isHovered ? "scale-105 shadow-xl" : "shadow-lg";
    
    switch (color) {
      case 'sage':
        return `${baseStyles} bg-sage-50 border-sage-200 hover:bg-sage-100 ${hoverTransform}`;
      case 'coral':
        return `${baseStyles} bg-coral-50 border-coral-200 hover:bg-coral-100 ${hoverTransform}`;
      case 'cream':
        return `${baseStyles} bg-cream-50 border-cream-200 hover:bg-cream-100 ${hoverTransform}`;
      default:
        return `${baseStyles} bg-white border-gray-200 hover:bg-gray-50 ${hoverTransform}`;
    }
  };

  return (
    <section id="classes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-coral-400 text-sm uppercase tracking-wider mb-4">Our Classes</div>
            <h2 className="text-4xl md:text-5xl font-light text-sage-800 mb-6">
              Discover Your Perfect Practice
            </h2>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto">
              From energizing flows to restorative healing, find the class that speaks to your soul
            </p>
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem) => (
              <div
                key={classItem.id}
                className={getCardStyles(classItem.color, hoveredClass === classItem.id)}
                onMouseEnter={() => setHoveredClass(classItem.id)}
                onMouseLeave={() => setHoveredClass(null)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{classItem.icon}</div>
                  <h3 className="text-xl font-medium text-sage-800 mb-3">
                    {classItem.name}
                  </h3>
                  <p className="text-sage-600 mb-4 leading-relaxed">
                    {classItem.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="bg-white px-3 py-1 rounded-full text-sage-700 border border-sage-200">
                      {classItem.duration}
                    </span>
                    <span className="text-sage-500">
                      {classItem.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4">
              <span className="text-sage-600">Ready to begin?</span>
              <button className="bg-sage-400 hover:bg-sage-500 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                View Full Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
