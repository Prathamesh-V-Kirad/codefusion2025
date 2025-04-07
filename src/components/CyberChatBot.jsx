"use client";

import { useState } from "react";

export default function CyberChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/gemini-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { sender: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="max-w-xl mx-auto p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">🛡️ Cybersecurity Expert Chatbot</h2>
      <div className="h-64 overflow-y-auto border p-3 mb-4 bg-gray-50 rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 text-sm ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-100' : 'bg-green-100'}`}>
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <p className="text-gray-500 italic text-sm">Thinking...</p>}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 border rounded-l px-3 py-2"
          placeholder="Ask about cybersecurity..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
