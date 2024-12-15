import React, { useState, useRef, useEffect } from 'react'
import { Send, Moon, Sun } from 'lucide-react'
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAIeshYE1lEJKJVHK6SFu2w6v8-NzRp7Eg");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });





export function Chatbot() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const messagesEndRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault();

    const prompt = input.trim().toLowerCase();
    const text = prompt + "Respond with a comforting, friendly, and explanatory tone specifically tailored to young girls aged 13-20, using simple language and showing empathy."
    

    const result = await model.generateContent(text);
    console.log(result.response.text());
    const trimmedInput = input.trim().toLowerCase()
    
    if (trimmedInput) {
      
      setMessages([...messages, { role: 'user', content: input }])
      setInput('')
      
      
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: result.response.text() }]);
      }, 1000)
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Inter:wght@400;500;600&display=swap');
      
      .flowcare-chatbot {
        --fc-bg-primary: #FFF5F7;
        --fc-bg-secondary: #FFFFFF;
        --fc-text-primary: #1A202C;
        --fc-text-secondary: #4A5568;
        --fc-accent: #FEC5D9;
        --fc-accent-dark: #F687B3;
        --fc-input-bg: #FFFFFF;
        --fc-input-text: #1A202C;
      }

      .flowcare-chatbot.dark {
        --fc-bg-primary: #1A202C;
        --fc-bg-secondary: #2D3748;
        --fc-text-primary: #FFFFFF;
        --fc-text-secondary: #A0AEC0;
        --fc-accent: #FEC5D9;
        --fc-accent-dark: #F687B3;
        --fc-input-bg: #4A5568;
        --fc-input-text: #FFFFFF;
      }

      .flowcare-chatbot {
        font-family: 'Inter', sans-serif;
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  return (
    <div className={`flowcare-chatbot ${isDarkMode ? 'dark' : ''}`}>
      <div className="fixed inset-0 flex items-center justify-center bg-[var(--fc-bg-primary)] transition-colors duration-200">
        <div className="w-full max-w-md mx-4 overflow-hidden rounded-lg bg-[var(--fc-bg-secondary)] shadow-xl transition-colors duration-200">
          <div className="flex items-center justify-between p-4 bg-[var(--fc-accent)] dark:bg-[var(--fc-accent-dark)]">
            <h2 style={{ fontFamily: 'Pacifico, cursive' }} className="text-2xl font-bold text-black">
              FlowCare Chatbot
            </h2>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-opacity-80 text-[var(--fc-text-primary)] transition-colors duration-200"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <div className="h-[60vh] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-[var(--fc-accent)] flex items-center justify-center text-black mr-2">
                    AI
                  </div>
                )}
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-[var(--fc-accent)] text-black'
                      : 'bg-[var(--fc-bg-secondary)] text-[var(--fc-text-primary)] border border-[var(--fc-accent)]'
                  }`}
                >
                  {message.content}
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-[var(--fc-accent-dark)] flex items-center justify-center text-black ml-2">
                    U
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 bg-[var(--fc-bg-secondary)] border-t border-[var(--fc-accent)]">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow p-2 rounded-md bg-[var(--fc-input-bg)] text-[var(--fc-input-text)] placeholder-[var(--fc-text-secondary)] border border-[var(--fc-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--fc-accent-dark)]"
              />
              <button
                type="submit"
                className="p-2 rounded-md bg-[var(--fc-accent)] hover:bg-[var(--fc-accent-dark)] text-[var(--fc-text-primary)] transition-colors duration-200"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}