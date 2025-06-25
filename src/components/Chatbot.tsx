
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  buttons?: string[];
  socialLinks?: boolean;
  bookingConfirmation?: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "🌿 Namaste, welcome to our peaceful space!\nI'm Kush — here to guide you on your yoga journey. How would you like to start?",
      isUser: false,
      timestamp: new Date(),
      socialLinks: true
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleButtonClick = (buttonText: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: buttonText,
      isUser: true,
      timestamp: new Date()
    };

    let botResponse: Message | null = null;

    if (buttonText === "Book Now") {
      // Open Google Form in new tab
      window.open('https://forms.gle/YOUR_GOOGLE_FORM_LINK', '_blank');
      
      botResponse = {
        id: messages.length + 2,
        text: "🌟 Thank you for registering! You can now follow Ankit Sharma and stay connected:",
        isUser: false,
        timestamp: new Date(),
        bookingConfirmation: true
      };
    } else if (buttonText === "Back to Main") {
      botResponse = {
        id: messages.length + 2,
        text: "🌿 How would you like to start?",
        isUser: false,
        timestamp: new Date(),
        socialLinks: true
      };
    }

    if (botResponse) {
      setMessages(prev => [...prev, userMessage, botResponse]);
    } else {
      setMessages(prev => [...prev, userMessage]);
    }
  };

  const handleSocialClick = (platform: string, url: string) => {
    window.open(url, '_blank');
    
    const userMessage: Message = {
      id: messages.length + 1,
      text: `Connected via ${platform}`,
      isUser: true,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: "🙏 Perfect! Feel free to message me there anytime. Anything else I can help you with?",
      isUser: false,
      timestamp: new Date(),
      buttons: ["Book Now", "Back to Main"]
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // Handle any text input if needed
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
            {messages.filter(message => message && typeof message === 'object').map((message) => (
              <div key={message.id} className="space-y-2">
                <div
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-sage-400 text-white'
                        : 'bg-sage-50 text-sage-800 border border-sage-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
                
                {/* Social Media Links */}
                {message.socialLinks && !message.isUser && (
                  <div className="flex flex-col space-y-2">
                    <p className="text-xs text-sage-600 text-center">📲 Connect directly with me here:</p>
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => handleSocialClick('WhatsApp', 'https://wa.me/9717303190')}
                        className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors overflow-hidden"
                        title="WhatsApp"
                      >
                        <img 
                          src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg" 
                          alt="WhatsApp" 
                          className="w-6 h-6 filter invert"
                        />
                      </button>
                      <button
                        onClick={() => handleSocialClick('Messenger', 'https://m.me/YOUR_PAGE')}
                        className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors overflow-hidden"
                        title="Messenger"
                      >
                        <img 
                          src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/messenger.svg" 
                          alt="Messenger" 
                          className="w-6 h-6 filter invert"
                        />
                      </button>
                      <button
                        onClick={() => handleSocialClick('WeChat', 'YOUR_WECHAT_LINK')}
                        className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors overflow-hidden"
                        title="WeChat"
                      >
                        <img 
                          src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wechat.svg" 
                          alt="WeChat" 
                          className="w-6 h-6 filter invert"
                        />
                      </button>
                    </div>
                    <div className="flex justify-center mt-3">
                      <button
                        onClick={() => handleButtonClick('Book Now')}
                        className="bg-sage-400 hover:bg-sage-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                      >
                        ✨ Book Now
                      </button>
                    </div>
                  </div>
                )}

                {/* Booking Confirmation Links */}
                {message.bookingConfirmation && !message.isUser && (
                  <div className="flex justify-center space-x-4 mt-2">
                    <button
                      onClick={() => window.open('https://www.instagram.com/ankitsharmaofficial', '_blank')}
                      className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors overflow-hidden"
                      title="Instagram"
                    >
                      <img 
                        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" 
                        alt="Instagram" 
                        className="w-6 h-6 filter invert"
                      />
                    </button>
                    <button
                      onClick={() => window.open('https://www.linkedin.com/in/ankitsharmaofficial', '_blank')}
                      className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors overflow-hidden"
                      title="LinkedIn"
                    >
                      <img 
                        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" 
                        alt="LinkedIn" 
                        className="w-6 h-6 filter invert"
                      />
                    </button>
                    <button
                      onClick={() => window.open('https://www.youtube.com/@ankitsharmaofficial', '_blank')}
                      className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors overflow-hidden"
                      title="YouTube"
                    >
                      <img 
                        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg" 
                        alt="YouTube" 
                        className="w-6 h-6 filter invert"
                      />
                    </button>
                  </div>
                )}
                
                {/* Regular Buttons */}
                {message.buttons && !message.isUser && (
                  <div className="flex flex-col space-y-1">
                    {message.buttons.map((button, index) => (
                      <button
                        key={index}
                        onClick={() => handleButtonClick(button)}
                        className="bg-sage-100 hover:bg-sage-200 text-sage-800 px-3 py-2 rounded-xl text-sm transition-colors border border-sage-300"
                      >
                        👉 {button}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
