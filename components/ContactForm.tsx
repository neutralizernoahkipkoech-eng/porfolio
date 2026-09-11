"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // 1. Save to Supabase (Your existing working code)
      const { error: dbError } = await supabase
        .from("messages")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (dbError) throw dbError;

      // 2. Send email notification (NEW addition)
      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!emailResponse.ok) {
        console.error('Email failed to send');
      }

      // 3. Show success message (Your existing working code)
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto text-left">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-4 py-3 bg-background border border-secondary rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
        />
      </div>
      
      <div>
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-4 py-3 bg-background border border-secondary rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
        />
      </div>
      
      <div>
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={5}
          className="w-full px-4 py-3 bg-background border border-secondary rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`w-full px-6 py-3 rounded-lg font-bold transition flex items-center justify-center gap-2 ${
          status === "sending"
            ? "bg-gray-600 cursor-not-allowed"
            : status === "success"
            ? "bg-green-500 text-white"
            : "bg-primary text-background hover:bg-cyan-400"
        }`}
      >
        {status === "sending" ? (
          <>Sending...</>
        ) : status === "success" ? (
          <>
            <CheckCircle size={20} /> Message Sent!
          </>
        ) : (
          <>
            <Send size={18} /> Send Message
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center mt-2">
          Oops! Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}