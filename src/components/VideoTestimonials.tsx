
import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoTestimonials = [
    {
      id: 1,
      name: 'Aarti, 28 – Delhi',
      title: 'I lost 5kg in 2 months!',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=300',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    },
    {
      id: 2,
      name: 'Priya, 35 – Mumbai',
      title: 'My back pain is completely gone!',
      thumbnail: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&h=300',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    },
    {
      id: 3,
      name: 'Rahul, 42 – Bangalore',
      title: 'Stress-free life after yoga!',
      thumbnail: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&h=300',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    }
  ];

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="mb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-coral-400 text-sm uppercase tracking-wider mb-4">
          🎥 Watch What Our Students Say
        </div>
        <h3 className="text-3xl md:text-4xl font-light text-sage-800 mb-4">
          Real Stories, Real Results
        </h3>
        <p className="text-lg text-sage-600">
          Hear directly from our yoga community about their transformative journeys
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {videoTestimonials.map((video) => (
          <div
            key={video.id}
            className="group cursor-pointer"
            onClick={() => handleVideoClick(video.videoUrl)}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-56 object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                    <Play className="w-6 h-6 text-sage-600 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="bg-white p-6">
                <h4 className="font-medium text-sage-800 mb-2">{video.name}</h4>
                <p className="text-coral-500 font-light italic">{video.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-sage-50 rounded-3xl p-8">
        <h4 className="text-2xl font-light text-sage-800 mb-4">
          Want to be the next success story?
        </h4>
        <p className="text-sage-600 mb-6">
          Share your transformation journey and inspire others on their yoga path
        </p>
        <button 
          className="bg-coral-400 hover:bg-coral-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          onClick={() => window.open('https://forms.gle/YOUR_GOOGLE_FORM_LINK', '_blank')}
        >
          Share Your Story
        </button>
      </div>

      {/* Video Popup */}
      <Dialog open={!!selectedVideo} onOpenChange={handleCloseVideo}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
          <div className="relative bg-black rounded-lg overflow-hidden">
            <DialogClose className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
              <X className="w-5 h-5 text-white" />
            </DialogClose>
            {selectedVideo && (
              <iframe
                src={selectedVideo}
                title="Video Testimonial"
                className="w-full h-[300px] md:h-[500px]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoTestimonials;
