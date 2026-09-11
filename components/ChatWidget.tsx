"use client";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Mail, Globe, Link } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: "ai", 
      text: "Hi! I am Noah Kipkoech 🤖. I'm a Full-Stack Developer based in Nairobi, Kenya, specializing in Next.js, React, and AI integrations. Ask me about my skills, projects, or services!" 
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Smart response generator
  const generateResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    // Skills/Technologies
    if (msg.includes("skill") || msg.includes("tech") || msg.includes("offer") || msg.includes("do") || msg.includes("know")) {
      return "I specialize in:\n\n📱 **Frontend:** Next.js, React, TypeScript, Tailwind CSS\n️ **Backend:** Node.js, Supabase, PostgreSQL, REST APIs\n🤖 **AI:** OpenAI, Groq API, LLM Integration\n🚀 **DevOps:** Netlify, Vercel, Git, CI/CD\n\nI build fast, secure, and scalable web applications!";
    }
    
    // Projects
    if (msg.includes("project") || msg.includes("work") || msg.includes("built") || msg.includes("portfolio")) {
      return "My featured project is the **AI-Powered Customer Support Widget** - a full-stack chat application with:\n\n✅ Secure authentication\n✅ Real-time AI responses\n✅ Automated email notifications\n✅ Built with Next.js, TypeScript, Supabase, and Groq API\n\nCheck it out at: https://noahkipkkoech.com";
    }
    
    // Contact/Hiring
    if (msg.includes("contact") || msg.includes("hire") || msg.includes("available") || msg.includes("work") || msg.includes("email")) {
      return "I'm currently **available for freelance projects** and full-time opportunities!\n\n Email: neutralizernoahkipkoech@gmail.com\n💼 LinkedIn: linkedin.com/in/noah-kipkoech\n\nI respond within 24 hours. Let's build something amazing together!";
    }
    
    // Location
    if (msg.includes("where") || msg.includes("location") || msg.includes("based") || msg.includes("from")) {
      return "I'm based in **Nairobi, Kenya** 🇰🇪 and available for remote work worldwide. I've worked with clients across different time zones and am flexible with communication.";
    }
    
    // Pricing
    if (msg.includes("price") || msg.includes("cost") || msg.includes("charge") || msg.includes("rate")) {
      return "My rates vary based on project complexity and scope. I offer:\n\n💰 **Hourly rates** for smaller tasks\n📦 **Fixed-price** for well-defined projects\n🤝 **Retainer agreements** for ongoing work\n\nLet's discuss your specific needs via email!";
    }
    
    // Experience
    if (msg.includes("experience") || msg.includes("year") || msg.includes("long")) {
      return "I'm a passionate Full-Stack Developer with experience in building:\n\n✨ AI-powered applications\n✨ E-commerce platforms\n✨ Customer support systems\n✨ Real-time web applications\n\nI focus on clean code, modern technologies, and delivering exceptional results!";
    }
    
    // Services
    if (msg.includes("service") || msg.includes("provide") || msg.includes("can you")) {
      return "I offer:\n\n🎨 **Web Development** - Custom websites & web apps\n **AI Integration** - Chatbots, automation, LLMs\n📱 **Responsive Design** - Mobile-first approach\n⚡ **Performance Optimization** - Fast, SEO-friendly sites\n🔧 **Maintenance & Support** - Ongoing updates\n\nWhat do you need help with?";
    }
    
    // Education/Background
    if (msg.includes("education") || msg.includes("study") || msg.includes("learn") || msg.includes("background")) {
      return "I'm a self-taught developer who's passionate about continuous learning. I've mastered modern web technologies through hands-on projects and stay updated with the latest industry trends. I specialize in the JavaScript/TypeScript ecosystem!";
    }
    
    // Thank you
    if (msg.includes("thank") || msg.includes("thanks")) {
      return "You're welcome! 😊 Feel free to ask anything else, or reach out via email if you're ready to start a project. I'm here to help!";
    }
    
    // Default response
    return "Great question! I'm a Full-Stack Developer specializing in Next.js, React, and AI integrations. \n\nFor specific inquiries about:\n• Projects & collaboration\n• Pricing & availability\n• Technical details\n\nPlease email me at: neutralizernoahkipkoech@gmail.com\n\nI'd love to hear about your project! 🚀";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = input;
    
    // Add user message
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true);

    // Generate smart response
    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages(prev => [...prev, { role: "ai", text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-background border border-secondary rounded-2xl shadow-2xl shadow-primary/20 overflow-hidden animate-in slide-in-from-right-10 fade-in duration-300">
          
          <div className="bg-secondary/50 p-4 border-b border-secondary flex justify-between items-center backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-bold text-primary text-sm">Noah AI Assistant</span>
            </div>
            <div className="flex gap-1">
              <a href="mailto:neutralizernoahkipkoech@gmail.com" className="p-1.5 hover:bg-primary/20 rounded-full transition text-gray-400 hover:text-primary" title="Email Noah">
                <Mail size={16} />
              </a>
              <a href="https://www.linkedin.com/in/noah-kipkoech" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-primary/20 rounded-full transition text-gray-400 hover:text-primary" title="LinkedIn">
                <Globe size={16} />
              </a>
              <a href="https://github.com/neutralizernoahkipkoech-eng" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-primary/20 rounded-full transition text-gray-400 hover:text-primary" title="GitHub">
                <Link size={16} />
              </a>
            </div>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background/95">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user" 
                    ? "bg-primary text-background rounded-br-none font-medium" 
                    : "bg-secondary text-foreground rounded-bl-none border border-secondary/50"
                }`}>
                  {msg.text.split('\n').map((line, i) => (
                    <p key={i} className={i > 0 ? "mt-2" : ""}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary text-foreground p-3 rounded-2xl rounded-bl-none border border-secondary/50 flex gap-1.5 items-center h-10">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:100ms]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:200ms]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-secondary bg-secondary/30 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-background border border-secondary rounded-full px-4 py-2.5 text-sm text-foreground placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
            />
            <button 
              onClick={handleSend}
              className="bg-primary text-background p-2.5 rounded-full hover:bg-cyan-400 transition shadow-lg shadow-primary/20"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center w-14 h-14 bg-primary text-background rounded-full shadow-lg shadow-primary/30 hover:scale-110 hover:shadow-primary/50 transition-all duration-300"
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:animate-pulse" />}
      </button>
    </div>
  );
}