
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Kush, your yoga assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const getKushResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('class') || message.includes('schedule')) {
      return "I'd be happy to help you with our class schedule! We offer various yoga styles throughout the week including Morning Flow, Power Yoga, Vinyasa, and Restorative classes. Check our schedule section to see all available times.";
    }
    
    if (message.includes('book') || message.includes('reserve')) {
      return "To book a class, simply click the 'Book Now' button next to any class in our schedule. It will open our booking form where you can reserve your spot.";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('membership')) {
      return "We offer flexible pricing options including drop-in rates, class packages, and monthly memberships. Check our pricing section for detailed information about all our plans.";
    }
    
    if (message.includes('beginner') || message.includes('new') || message.includes('start')) {
      return "Welcome to yoga! We have several beginner-friendly classes like Gentle Flow and Restorative Yoga. I recommend starting with our 'All Levels' classes where Sarah provides modifications for everyone.";
    }
    
    if (message.includes('instructor') || message.includes('teacher') || message.includes('sarah')) {
      return "Sarah is our experienced yoga instructor who leads all our classes. She's passionate about creating a welcoming space for practitioners of all levels and specializes in mindful movement and ancient wisdom.";
    }
    
    if (message.includes('location') || message.includes('address') || message.includes('where')) {
      return "Our peaceful studio is located at a serene location perfect for your yoga practice. You can find our contact information in the footer section of the website.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Namaste 🙏 I'm here to help you with any questions about our yoga classes, schedules, or studio. What would you like to know?";
    }
    
    return "I'm here to help with any questions about our yoga classes, schedules, pricing, or studio. Feel free to ask me anything about your yoga journey!";
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: getKushResponse(inputText),
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-sage-400 hover:bg-sage-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-sage-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-sage-400 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-sage-300 rounded-full flex items-center justify-center text-sm font-medium">
                K
              </div>
              <div>
                <h3 className="font-medium">Kush</h3>
                <p className="text-xs opacity-90">Yoga Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-sage-500 p-1 rounded transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-sage-400 text-white'
                      : 'bg-sage-50 text-sage-800 border border-sage-200'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-sage-100">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-sage-200 rounded-full focus:outline-none focus:ring-2 focus:ring-sage-300 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-sage-400 hover:bg-sage-500 text-white p-2 rounded-full transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
