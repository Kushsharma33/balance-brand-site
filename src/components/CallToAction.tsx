
import { Button } from './ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            Want to be the next success story?
          </h2>
          
          <Button 
            size="lg"
            className="px-12 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full text-xl font-medium transform hover:scale-105 transition-all duration-300"
          >
            Share Your Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
