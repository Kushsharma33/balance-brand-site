
import { useState } from 'react';
import { Button } from './ui/button';

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const schedule = {
    Monday: [
      { time: '7:00 AM', class: 'Morning Flow', instructor: 'Sarah' },
      { time: '12:00 PM', class: 'Power Yoga', instructor: 'Sarah' },
      { time: '6:30 PM', class: 'Restorative', instructor: 'Sarah' },
    ],
    Tuesday: [
      { time: '8:00 AM', class: 'Vinyasa Flow', instructor: 'Sarah' },
      { time: '5:30 PM', class: 'Yin Yoga', instructor: 'Sarah' },
      { time: '7:00 PM', class: 'Meditation', instructor: 'Sarah' },
    ],
    Wednesday: [
      { time: '7:00 AM', class: 'Morning Flow', instructor: 'Sarah' },
      { time: '12:00 PM', class: 'Power Yoga', instructor: 'Sarah' },
      { time: '6:00 PM', class: 'Prenatal Yoga', instructor: 'Sarah' },
    ],
    Thursday: [
      { time: '8:00 AM', class: 'Vinyasa Flow', instructor: 'Sarah' },
      { time: '6:30 PM', class: 'Restorative', instructor: 'Sarah' },
    ],
    Friday: [
      { time: '7:00 AM', class: 'Morning Flow', instructor: 'Sarah' },
      { time: '12:00 PM', class: 'Power Yoga', instructor: 'Sarah' },
      { time: '5:30 PM', class: 'Yin Yoga', instructor: 'Sarah' },
    ],
    Saturday: [
      { time: '9:00 AM', class: 'Weekend Flow', instructor: 'Sarah' },
      { time: '11:00 AM', class: 'Meditation', instructor: 'Sarah' },
      { time: '4:00 PM', class: 'Restorative', instructor: 'Sarah' },
    ],
    Sunday: [
      { time: '9:00 AM', class: 'Gentle Flow', instructor: 'Sarah' },
      { time: '5:00 PM', class: 'Sunset Yoga', instructor: 'Sarah' },
    ],
  };

  return (
    <section className="py-20 px-6 bg-sage-50/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-sage-800">
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
                  ? 'bg-sage-500 text-white shadow-lg'
                  : 'bg-white text-sage-600 hover:bg-sage-100 border border-sage-200'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Display */}
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-light text-sage-800 mb-8 text-center">
            {selectedDay} Classes
          </h3>
          
          <div className="space-y-4">
            {schedule[selectedDay as keyof typeof schedule].map((classItem, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-cream-50 rounded-2xl border border-cream-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-2xl font-light text-sage-800">
                      {classItem.time}
                    </span>
                    <span className="text-xl text-sage-700 font-medium">
                      {classItem.class}
                    </span>
                  </div>
                  <div className="text-sage-600">
                    with {classItem.instructor}
                  </div>
                </div>
                
                <Button 
                  className="bg-sage-500 hover:bg-sage-600 text-white px-6 py-2 rounded-full"
                >
                  Book Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
