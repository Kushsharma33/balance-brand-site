
import { useState } from 'react';

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const schedule = {
    Monday: [
      { time: '7:00 AM', class: 'Morning Flow', instructor: 'Sarah', duration: '60 min', level: 'All Levels' },
      { time: '12:00 PM', class: 'Power Yoga', instructor: 'Sarah', duration: '45 min', level: 'Intermediate' },
      { time: '6:30 PM', class: 'Restorative', instructor: 'Sarah', duration: '75 min', level: 'Beginner' },
    ],
    Tuesday: [
      { time: '8:00 AM', class: 'Vinyasa Flow', instructor: 'Sarah', duration: '60 min', level: 'All Levels' },
      { time: '5:30 PM', class: 'Yin Yoga', instructor: 'Sarah', duration: '90 min', level: 'All Levels' },
      { time: '7:00 PM', class: 'Meditation', instructor: 'Sarah', duration: '30 min', level: 'All Levels' },
    ],
    Wednesday: [
      { time: '7:00 AM', class: 'Morning Flow', instructor: 'Sarah', duration: '60 min', level: 'All Levels' },
      { time: '12:00 PM', class: 'Power Yoga', instructor: 'Sarah', duration: '45 min', level: 'Intermediate' },
      { time: '6:00 PM', class: 'Prenatal Yoga', instructor: 'Sarah', duration: '60 min', level: 'Beginner' },
    ],
    Thursday: [
      { time: '8:00 AM', class: 'Vinyasa Flow', instructor: 'Sarah', duration: '60 min', level: 'All Levels' },
      { time: '6:30 PM', class: 'Restorative', instructor: 'Sarah', duration: '75 min', level: 'Beginner' },
    ],
    Friday: [
      { time: '7:00 AM', class: 'Morning Flow', instructor: 'Sarah', duration: '60 min', level: 'All Levels' },
      { time: '12:00 PM', class: 'Power Yoga', instructor: 'Sarah', duration: '45 min', level: 'Intermediate' },
      { time: '5:30 PM', class: 'Yin Yoga', instructor: 'Sarah', duration: '90 min', level: 'All Levels' },
    ],
    Saturday: [
      { time: '9:00 AM', class: 'Weekend Flow', instructor: 'Sarah', duration: '75 min', level: 'All Levels' },
      { time: '11:00 AM', class: 'Meditation', instructor: 'Sarah', duration: '45 min', level: 'All Levels' },
      { time: '4:00 PM', class: 'Restorative', instructor: 'Sarah', duration: '90 min', level: 'Beginner' },
    ],
    Sunday: [
      { time: '9:00 AM', class: 'Gentle Flow', instructor: 'Sarah', duration: '60 min', level: 'Beginner' },
      { time: '5:00 PM', class: 'Sunset Yoga', instructor: 'Sarah', duration: '60 min', level: 'All Levels' },
    ],
  };

  return (
    <section id="schedule" className="py-20 bg-sage-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-coral-400 text-sm uppercase tracking-wider mb-4">Weekly Schedule</div>
            <h2 className="text-4xl md:text-5xl font-light text-sage-800 mb-6">
              Find Your Perfect Time
            </h2>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto">
              Join us throughout the week for transformative practices that fit your lifestyle
            </p>
          </div>

          {/* Day Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedDay === day
                    ? 'bg-sage-400 text-white shadow-lg'
                    : 'bg-white text-sage-600 hover:bg-sage-100 border border-sage-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule Display */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-light text-sage-800 mb-8 text-center">
              {selectedDay} Classes
            </h3>
            
            <div className="space-y-4">
              {schedule[selectedDay as keyof typeof schedule].map((classItem, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-cream-50 rounded-2xl border border-cream-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-2xl font-light text-sage-800">
                        {classItem.time}
                      </span>
                      <span className="text-xl text-sage-700 font-medium">
                        {classItem.class}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sage-600">
                      <span>with {classItem.instructor}</span>
                      <span>•</span>
                      <span>{classItem.duration}</span>
                      <span>•</span>
                      <span>{classItem.level}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0">
                    <button className="bg-sage-400 hover:bg-sage-500 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="text-center mt-8">
            <p className="text-sage-600">
              All classes are held at our peaceful studio. 
              <span className="text-coral-400 ml-2">Drop-ins welcome!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
