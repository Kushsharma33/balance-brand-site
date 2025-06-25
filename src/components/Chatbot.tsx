
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  buttons?: string[];
}

interface UserInfo {
  countryCode: string;
  phone: string;
  name: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "🌿 Namaste! I'm Sis Kush — your personal yoga assistant.\nLet's get started 🌞 How would you like to proceed?",
      isUser: false,
      timestamp: new Date(),
      buttons: ["Share My Info", "Learn About Yoga Services", "Connect on WhatsApp/Messenger/WeChat"]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [currentFlow, setCurrentFlow] = useState<string>('main');
  const [userInfo, setUserInfo] = useState<UserInfo>({ countryCode: '', phone: '', name: '' });
  const [showInput, setShowInput] = useState(false);
  const [inputType, setInputType] = useState<'phone' | 'name' | null>(null);

  const handleButtonClick = (buttonText: string) => {
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: buttonText,
      isUser: true,
      timestamp: new Date()
    };

    let botResponse: Message | null = null;

    if (currentFlow === 'main') {
      if (buttonText === "Share My Info") {
        setCurrentFlow('contact-country');
        botResponse = {
          id: messages.length + 2,
          text: "Please select your country code:",
          isUser: false,
          timestamp: new Date(),
          buttons: ["+91", "+1", "+44", "Other"]
        };
      } else if (buttonText === "Learn About Yoga Services") {
        setCurrentFlow('services');
        botResponse = {
          id: messages.length + 2,
          text: "🧘 What would you like to explore?",
          isUser: false,
          timestamp: new Date(),
          buttons: ["Yoga for Beginners", "Weight Loss Yoga", "Back Pain Relief Yoga", "Online Yoga Sessions", "Timings & Pricing"]
        };
      } else if (buttonText === "Connect on WhatsApp/Messenger/WeChat") {
        setCurrentFlow('connect');
        botResponse = {
          id: messages.length + 2,
          text: "📲 You can reach us directly here:\n\n• WhatsApp: https://wa.me/9717303190\n• Messenger: https://m.me/YOUR_PAGE\n• WeChat ID: your_wechat_id\n\nFeel free to chat there for faster help 🌟",
          isUser: false,
          timestamp: new Date(),
          buttons: ["Back to Main Menu"]
        };
      }
    } else if (currentFlow === 'contact-country') {
      setUserInfo(prev => ({ ...prev, countryCode: buttonText }));
      setCurrentFlow('contact-phone');
      setShowInput(true);
      setInputType('phone');
      botResponse = {
        id: messages.length + 2,
        text: "Please enter your phone number:",
        isUser: false,
        timestamp: new Date()
      };
    } else if (currentFlow === 'services') {
      setCurrentFlow('main');
      let serviceResponse = "";
      
      switch (buttonText) {
        case "Yoga for Beginners":
          serviceResponse = "Perfect choice! Beginner yoga mai hum basic poses aur breathing techniques sikhate hain. Step by step progress karte hain, bilkul gentle approach.";
          break;
        case "Weight Loss Yoga":
          serviceResponse = "Excellent! Weight loss yoga combines dynamic flows with cardio elements. Fat burn karne ke saath flexibility bhi improve hoti hai!";
          break;
        case "Back Pain Relief Yoga":
          serviceResponse = "Great choice! Back pain relief yoga focuses on gentle stretches and breathing to release pressure. We offer online + offline options too.";
          break;
        case "Online Yoga Sessions":
          serviceResponse = "Wonderful! Online sessions ki convenience with live interaction. Ghar baithe personalized guidance milti hai with flexible timings.";
          break;
        case "Timings & Pricing":
          serviceResponse = "Perfect! We have morning (6-8 AM) and evening (6-8 PM) slots. Pricing starts from ₹1500/month. Package deals bhi available hain!";
          break;
        default:
          serviceResponse = "Thanks for your interest! How else can I help you today?";
      }
      
      botResponse = {
        id: messages.length + 2,
        text: serviceResponse,
        isUser: false,
        timestamp: new Date(),
        buttons: ["Learn More Services", "Share My Info", "Back to Main Menu"]
      };
    } else if (currentFlow === 'connect') {
      if (buttonText === "Back to Main Menu") {
        setCurrentFlow('main');
        botResponse = {
          id: messages.length + 2,
          text: "🌿 How would you like to proceed?",
          isUser: false,
          timestamp: new Date(),
          buttons: ["Share My Info", "Learn About Yoga Services", "Connect on WhatsApp/Messenger/WeChat"]
        };
      }
    }

    // Handle "Back to Main Menu" and "Learn More Services" from any flow
    if (buttonText === "Back to Main Menu" || buttonText === "Learn More Services") {
      setCurrentFlow('main');
      botResponse = {
        id: messages.length + 2,
        text: "🌿 How would you like to proceed?",
        isUser: false,
        timestamp: new Date(),
        buttons: ["Share My Info", "Learn About Yoga Services", "Connect on WhatsApp/Messenger/WeChat"]
      };
    }

    // Only add messages if botResponse is not null
    if (botResponse) {
      setMessages(prev => [...prev, userMessage, botResponse]);
    } else {
      setMessages(prev => [...prev, userMessage]);
    }
  };

  const handleInputSubmit = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    let botResponse: Message | null = null;

    if (currentFlow === 'contact-phone' && inputType === 'phone') {
      setUserInfo(prev => ({ ...prev, phone: inputText }));
      setCurrentFlow('contact-name');
      setInputType('name');
      botResponse = {
        id: messages.length + 2,
        text: "Please enter your full name:",
        isUser: false,
        timestamp: new Date()
      };
    } else if (currentFlow === 'contact-name' && inputType === 'name') {
      setUserInfo(prev => ({ ...prev, name: inputText }));
      setCurrentFlow('main');
      setShowInput(false);
      setInputType(null);
      botResponse = {
        id: messages.length + 2,
        text: `Thank you ${inputText}! 🙏 Your details have been saved. Our team will connect with you soon.\n\nHow else can I help you today?`,
        isUser: false,
        timestamp: new Date(),
        buttons: ["Learn About Yoga Services", "Connect on WhatsApp/Messenger/WeChat"]
      };
    }

    // Only add messages if botResponse is not null
    if (botResponse) {
      setMessages(prev => [...prev, userMessage, botResponse]);
    } else {
      setMessages(prev => [...prev, userMessage]);
    }
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleInputSubmit();
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
                <h3 className="font-medium">Sis Kush</h3>
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
                
                {/* Buttons */}
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

          {/* Input */}
          {showInput && (
            <div className="p-4 border-t border-sage-100">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={inputType === 'phone' ? "Enter phone number..." : "Enter your name..."}
                  className="flex-1 p-2 border border-sage-200 rounded-full focus:outline-none focus:ring-2 focus:ring-sage-300 text-sm"
                />
                <button
                  onClick={handleInputSubmit}
                  className="bg-sage-400 hover:bg-sage-500 text-white p-2 rounded-full transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;
