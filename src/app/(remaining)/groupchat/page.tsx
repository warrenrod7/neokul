"use client";

import { useState } from "react";
import { FaSearch, FaPaperclip, FaImage, FaBars } from "react-icons/fa";

export default function ChatDashboard() {
  const users = [
    { id: 1, name: "Warren Rodrigues", profilePicture: "/avatar-placeholder.png", lastMessage: "Hey, I've made updates to the login feature." },
    { id: 2, name: "Ruchi", profilePicture: "/avatar-placeholder.png", lastMessage: "Partyyy." },
    { id: 3, name: "Siddhant Prabhudesai", profilePicture: "/avatar-placeholder.png", lastMessage: "I'm working on session handling." },
  ];

  const [messages, setMessages] = useState([
    { sender: "Warren Rodrigues", content: "Hey, I've made updates to the login feature.", timestamp: "10:00 AM" },
    { sender: "You", content: "Thanks! I'll pull the changes and check for any conflicts.", timestamp: "10:02 AM" },
    { sender: "Warren Rodrigues", content: "Just fixed a bug in the payment gateway.", timestamp: "10:10 AM" },
  ]);

  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMessages = messages.filter(msg => msg.content.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSendMessage = () => {
    if (input.trim()) {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
  
      setMessages([
        ...messages,
        { sender: "You", content: input, timestamp: formattedTime },
      ]);
      setInput("");
    }
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`File uploaded: ${file.name}`);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white p-4">
      {/* Search Bar */}
      <div className="border-b p-2 flex items-center bg-gray-100 rounded-lg">
        <FaSearch className="text-gray-500 ml-2" />
        <input
          type="text"
          className="ml-2 flex-1 bg-transparent outline-none p-2"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {filteredMessages.map((msg, index) => {
          // Find the user profile picture (default if not found)
          const user = users.find(user => user.name === msg.sender);
          const profilePicture = user ? user.profilePicture : "/avatar-placeholder.png";

          return (
            <div key={index} className={`flex items-end ${msg.sender === "You" ? "justify-end" : ""} space-x-2`}>
              {msg.sender !== "You" && (
                <img src={profilePicture} alt="Profile" className="w-8 h-8 rounded-full" />
              )}
              <div className={`p-2 rounded-lg max-w-xs ${msg.sender === "You" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}>
                <p>{msg.content}</p>
                <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
              </div>
              {msg.sender === "You" && (
                <img src="/your-profile.png" alt="Profile" className="w-8 h-8 rounded-full" />
              )}
            </div>
          );
        })}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t flex space-x-2 items-center bg-gray-100 rounded-lg">
        <label className="p-2 bg-gray-300 rounded cursor-pointer">
          <FaPaperclip />
          <input type="file" className="hidden" onChange={handleUpload} />
        </label>
        <label className="p-2 bg-gray-300 rounded cursor-pointer">
          <FaImage />
          <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
        </label>
        <button className="p-2 bg-gray-300 rounded">
          <FaBars />
        </button>
        <input
          type="text"
          className="flex-1 border p-2 rounded"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSendMessage} className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md">
          Send
        </button>
      </div>
    </div>
  );
}
