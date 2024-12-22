"use client";
import React, { useState } from "react";

const ChatPage = () => {
  // Demo user and chat data
  const users = [
    { id: 1, name: "Warren Rodrigues", profilePicture: "/avatar-placeholder.png", lastMessage: "Hey, I've made updates to the login feature." },
    { id: 2, name: "Ruchi", profilePicture: "/avatar-placeholder.png", lastMessage: "I fixed the bug in the payment gateway." },
    { id: 3, name: "Siddhant Prabhudesai", profilePicture: "/avatar-placeholder.png", lastMessage: "I'm working on session handling." },
  ];

  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState([
    { sender: "Warren Rodrigues", content: "Hey, I've made updates to the login feature.", timestamp: "10:00 AM" },
    { sender: "You", content: "Thanks! I'll pull the changes and check for any conflicts.", timestamp: "10:02 AM" },
    { sender: "Warren Rodrigues", content: "Just fixed a bug in the payment gateway.", timestamp: "10:10 AM" },
  ]);
  const [input, setInput] = useState("");

  // Handle sending messages
  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { sender: "You", content: input, timestamp: new Date().toLocaleTimeString() },
      ]);
      setInput("");
    }
  };

  // Simulate fetching messages when a user is selected
  const handleUserSelect = (user) => {
    setSelectedUser(user);
    // Replace this with a Supabase query to fetch messages for the selected user
    setMessages([
      { sender: user.name, content: `Hello, this is ${user.name}.`, timestamp: "9:00 AM" },
      { sender: "You", content: "Hi! Nice to connect with you.", timestamp: "9:05 AM" },
    ]);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-60 bg-gray-100">{/* Sidebar already built */}</div>

      {/* User List */}
      <div className=" bg-white border-r ">
        <h3 className="text-lg font-bold p-4 border-b bg-gray-200">Users</h3>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => handleUserSelect(user)}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 ${
                selectedUser.id === user.id ? "bg-gray-100" : ""
              }`}
            >
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500 truncate">{user.lastMessage}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white shadow-md">
        {/* Header */}
        <div className="flex items-center p-4 bg-gray-200 shadow-sm">
          <img
            src={selectedUser.profilePicture}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-4"
          />
          <h2 className="text-lg font-semibold">{selectedUser.name}</h2>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.sender === "You" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  message.sender === "You"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <p>{message.content}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {message.timestamp}
              </p>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex items-center p-4 border-t">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border rounded-md"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
