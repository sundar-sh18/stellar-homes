'use client'
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import * as motion from "motion/react-client";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I am the Stellar Assistant. Ask me anything about the location, amenities, or plots!' }
  ]);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

   const getApiUrl = () => {
    if (typeof window === "undefined") return "/api/chat";
    return `${window.location.origin}/api/chat`;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

   

    try {
      const response = await fetch(getApiUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.content }]);
      } else {
        setMessages((prev) => [...prev, { role: 'assistant', content: "I'm having trouble connecting right now. Please try again later." }]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-subHead select-text">
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-bg-1 shadow-2xl rounded-2xl w-[90vw] md:w-95 h-125 flex flex-col overflow-hidden border border-primary/20 mb-4"
        >
          
          <div className="bg-primary p-4 flex justify-between items-center text-bg-1">
            <div className="flex items-center gap-2">
              <Bot size={24} />
              <div>
                <h3 className="font-bold text-lg leading-none">Stellar Assistant</h3>
                <span className="text-xs opacity-80">Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition">
              <X size={20} />
            </button>
          </div>

          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary text-bg-1 rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-500 text-xs px-3 py-2 rounded-full animate-pulse">
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

       
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-200 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about plots..." 
              className="flex-1 bg-gray-100 text-gray-800 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <button 
              type="submit" 
              disabled={loading || !input.trim()}
              className="bg-primary text-bg-1 p-3 rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      )}

      
      {!isOpen && (
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="bg-primary text-bg-1 p-4 rounded-full shadow-bg-1 shadow-lg hover:shadow-primary transition-all duration-500 ease-in flex items-center justify-center"
        >
          <MessageCircle size={32} />
        </motion.button>
      )}
    </div>
  );
}