
import { Button } from './ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-sage-800">
            Want to be the next success story?
          </h2>
          
          <Button 
            size="lg"
            className="px-12 py-4 bg-peach-400 hover:bg-peach-500 text-white rounded-full text-xl font-medium transform hover:scale-105 transition-all duration-300"
          >
            Share Your Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
