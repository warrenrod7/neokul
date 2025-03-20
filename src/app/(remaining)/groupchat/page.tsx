"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaPaperclip, FaImage, FaBars } from "react-icons/fa";

export default function ChatDashboard() {
  const router = useRouter();

  const users = [
    { id: 1, name: "Warren Rodrigues", profilePicture: "/avatar-placeholder.png" },
    { id: 2, name: "Ruchi", profilePicture: "/avatar-placeholder.png" },
    { id: 3, name: "Siddhant Prabhudesai", profilePicture: "/avatar-placeholder.png" },
  ];

  const [messages, setMessages] = useState([
    { sender: "Warren Rodrigues", content: "Hey, I've made updates to the login feature.", type: "text", timestamp: "10:00 AM" },
    { sender: "You", content: "Thanks! I'll pull the changes and check for any conflicts.", type: "text", timestamp: "10:02 AM" },
  ]);

  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // 'all' | 'media'

  const handleSendMessage = () => {
    if (input.trim()) {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;

      setMessages([...messages, { sender: "You", content: input, type: "text", timestamp: formattedTime }]);
      setInput("");
    }
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
      
      const fileURL = URL.createObjectURL(file);
      const fileType = file.type.startsWith("image/") ? "image" : "document";

      setMessages([...messages, { sender: "You", content: fileURL, type: fileType, fileName: file.name, timestamp: formattedTime }]);
    }
  };

  const filteredMessages = messages.filter((msg) => {
    if (filter === "media") return msg.type === "image" || msg.type === "document";
    return true; // Show everything when 'all' is selected
  });
  

  return (
    <div className="flex flex-col h-screen bg-white p-4">
      {/* Header with Back Button & Search Bar */}
      <div className="flex items-center mb-2">
        <button 
          onClick={() => router.push("/myspace")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Back
        </button>
        <div className="flex flex-1 border-b p-2 items-center bg-gray-100 rounded-lg ml-4">
          <FaSearch className="text-gray-500 ml-2" />
          <input
            type="text"
            className="ml-2 flex-1 bg-transparent outline-none p-2"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
          {/* Show All Messages & Uploads */}
          <button 
  className={`px-4 py-2 p-2  rounded-md ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
  onClick={() => setFilter("all")}
>
  <FaBars />
</button>

{/* Show Only Uploaded Media (Images + Documents) */}
<button 
  className={`px-4 py-2 p-2   rounded-md ${filter === "media" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
  onClick={() => setFilter("media")}
>
  <FaImage />
</button>

      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {filteredMessages.map((msg, index) => {
          const user = users.find(user => user.name === msg.sender);
          const profilePicture = user ? user.profilePicture : "/avatar-placeholder.png";

          return (
            <div key={index} className={`flex items-end ${msg.sender === "You" ? "justify-end" : ""} space-x-2`}>
              {msg.sender !== "You" && <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full" />}
              
              {msg.type === "text" ? (
                <div className={`p-2 rounded-lg max-w-xs ${msg.sender === "You" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}>
                  <p>{msg.content}</p>
                  <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                </div>
              ) : msg.type === "image" ? (
                <div className="p-2 bg-gray-100 rounded-lg">
                  <img src={msg.content} alt="Uploaded" className="w-40 h-40 rounded-md" />
                  <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                </div>
              ) : (
                <div className="p-2 bg-gray-100 rounded-lg">
                  <a href={msg.content} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    {msg.fileName}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                </div>
              )}

              {msg.sender === "You" && <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full" />}
            </div>
          );
        })}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t flex space-x-2 items-center bg-gray-100 rounded-lg">
        {/* Upload File (Documents & Images) */}
        <label className="p-2 bg-gray-300 rounded cursor-pointer">
          <FaPaperclip />
          <input type="file" className="hidden" onChange={handleUpload} />
        </label>

      

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