"use client"; 
import { useState, useRef } from "react";
import { Mail, ExternalLink, Download, Bot, Shield, Zap, Code2 } from "lucide-react";
import ChatWidget from "../components/ChatWidget";
import ContactForm from "../components/ContactForm";

export default function Home() {
  // Video Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const skills = [
    { image: "/images/frontend.png", title: "Frontend", desc: "Next.js, React, TypeScript, Tailwind CSS" },
    { image: "/images/backend.png", title: "Backend", desc: "Node.js, Supabase, PostgreSQL, REST APIs" },
    { image: "/images/ai.png", title: "AI Integration", desc: "OpenAI, Groq API, LLM Prompt Engineering" },
    { image: "/images/devops.png", title: "DevOps", desc: "Netlify, Vercel, Git, CI/CD" },  
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-secondary z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">NK.</h1>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <a href="#skills" className="hover:text-primary transition">Skills</a>
            <a href="#projects" className="hover:text-primary transition">Projects</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Profile & Info */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-8">
              <img 
                src="/images/profile.jpg" 
                alt="Noah Kipkoech" 
                className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg shadow-primary/20"
              />
            </div>
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
              Available for Freelance Work
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-slide-continuous rainbow">
              Building <span className="text-primary">Intelligent</span> <br /> Web Experiences.
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              I am a Full-Stack Developer based in Nairobi, Kenya, specializing in Next.js, React, and AI integrations. I build fast, secure, and scalable web applications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#projects" className="px-8 py-3 bg-primary text-background font-bold rounded-lg hover:bg-cyan-400 transition flex items-center justify-center gap-2">
                View My Work <ExternalLink size={18} />
              </a>
              <a href="#contact" className="px-8 py-3 border border-secondary text-foreground font-medium rounded-lg hover:bg-secondary transition">
                Get In Touch
              </a>
              <a 
                href="/noah-cv.pdf" 
                download="Noah_Kipkoech_CV.pdf"
                className="px-8 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-background transition flex items-center justify-center gap-2"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </div>

          {/* Right Side - Talking Video Introduction */}
          <div className="relative overflow-hidden rounded-2xl border border-secondary shadow-2xl shadow-primary/20 group">
            <video
              ref={videoRef}
              src="/images/working-talk.mp4"
              poster="/images/working.png"
              className="w-full h-[300px] sm:h-[350px] lg:h-[450px] object-cover rounded-2xl"
              playsInline
              onEnded={() => setIsPlaying(false)}
            />
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-all"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-primary/50">
                  <svg className="w-10 h-10 text-background ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-secondary/30 border-y border-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-slide-continuous">Technical Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 bg-background border border-secondary rounded-xl hover:border-primary/50 transition duration-300 flex flex-col items-center text-center">
                <img src={skill.image} alt={skill.title} className="w-full h-40 mb-4 rounded-lg object-cover" />
                <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Projects Case Study Section */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center animate-slide-continuous">Featured Case Study</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">A deep dive into a production-ready, full-stack application I built from scratch.</p>

        {/* Main Project Card */}
        <div className="bg-secondary/30 border border-secondary rounded-2xl overflow-hidden p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Bot className="text-primary" size={28} /> 
                AI-Powered Customer Support Widget
              </h3>
              <p className="text-gray-400">A full-stack AI chat application with secure authentication, real-time responses, and automated email notifications.</p>
            </div>
            <div className="flex gap-3">
              <a href="https://customer-support-widget.netlify.app" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-primary text-background font-semibold rounded-lg hover:bg-cyan-400 transition flex items-center gap-2">
                Live Demo <ExternalLink size={16} />
              </a>
              <a href="https://github.com/neutralizernoahkipkoech-eng/customer-support-widget" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-secondary rounded-lg hover:bg-secondary transition flex items-center gap-2">
                Source Code <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Key Technical Achievements Grid */}
        <h3 className="text-xl font-bold mb-6 text-center">Key Technical Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-background border border-secondary rounded-xl hover:border-primary/50 transition duration-300">
            <Bot className="text-primary mb-4" size={32} />
            <h4 className="text-lg font-bold mb-2">AI & LLM Integration</h4>
            <p className="text-sm text-gray-400">Implemented real-time intelligent responses using the Groq API with optimized prompt engineering for high accuracy.</p>
          </div>
          <div className="p-6 bg-background border border-secondary rounded-xl hover:border-primary/50 transition duration-300">
            <Shield className="text-primary mb-4" size={32} />
            <h4 className="text-lg font-bold mb-2">Secure Authentication</h4>
            <p className="text-sm text-gray-400">Built a robust user management system with Supabase, implementing Row Level Security (RLS) to protect sensitive data.</p>
          </div>
          <div className="p-6 bg-background border border-secondary rounded-xl hover:border-primary/50 transition duration-300">
            <Zap className="text-primary mb-4" size={32} />
            <h4 className="text-lg font-bold mb-2">Performance & UX</h4>
            <p className="text-sm text-gray-400">Designed a responsive, accessible interface using Next.js and Tailwind CSS with optimized loading states and smooth transitions.</p>
          </div>
        </div>

        {/* Tech Stack & Lessons Learned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tech Stack */}
          <div className="p-6 bg-secondary/30 border border-secondary rounded-xl">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Code2 className="text-primary" size={20} /> Tech Stack Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Supabase", "Groq API", "Tailwind CSS", "Resend", "React", "PostgreSQL"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="p-6 bg-secondary/30 border border-secondary rounded-xl">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Zap className="text-primary" size={20} /> Lessons Learned
            </h4>
            <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
              <li>Managing API rate limits and optimizing token usage for LLMs.</li>
              <li>Structuring complex database relationships in PostgreSQL.</li>
              <li>Building seamless, real-time user experiences without page reloads.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-secondary/30 border-t border-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 animate-slide-continuous">Let's Build Something Great</h2>
          <p className="text-gray-400 mb-10">
            I'm currently available for freelance projects and full-time opportunities. 
            If you need a reliable developer to bring your idea to life, let's talk.
          </p>
          
          <ContactForm />
          
          <div className="mt-12 pt-8 border-t border-secondary">
            <p className="text-gray-400 mb-4">Or reach me directly:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:neutralizernoahkipkoech@gmail.com" className="px-8 py-3 bg-primary text-background font-bold rounded-lg hover:bg-cyan-400 transition flex items-center justify-center gap-2">
                <Mail size={18} /> Email Me
              </a>
              <a 
                href="https://wa.me/254757034155?text=Hi%20Noah,%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20working%20with%20you!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Me
              </a>
              <a href="https://www.linkedin.com/in/noah-kipkoech" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-secondary text-foreground font-medium rounded-lg hover:bg-secondary transition flex items-center justify-center gap-2">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500 border-t border-secondary">
        <p>© {new Date().getFullYear()} Noah Kipkoech. Built with Next.js & Tailwind CSS.</p>
      </footer>

      {/* AI Chat Widget */}
      <ChatWidget />
    </main>
  );
}