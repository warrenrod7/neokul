"use client";
import { redirect } from 'next/navigation'

import React from "react";
import { FaGithub } from "react-icons/fa";



const ProfilePage = () => {
  const user = {
    name: "Warren Rodrigues",
    about:
      "A passionate Computer Engineering undergraduate driven by a deep fascination with technology and programming. Skilled in both hardware and software development, with a robust understanding of engineering principles that bridge the gap between physical devices and digital systems. Enthusiastic about the limitless possibilities of coding and consistently seeking opportunities to deepen expertise and push the boundaries of innovation. Committed to lifelong learning and growth, with a goal to create impactful and cutting-edge solutions through technical excellence and creativity.",
    skills: ["UI/UX", "Web-design", "Marketing", "Finance"],
    projects: [
      {
        title: "Smart Home Automation System",
        description:
          "Developed a comprehensive IoT-based smart home automation system that allows users to control and monitor household devices remotely through a mobile app. The project integrates sensors and actuators to manage lighting, temperature, and security systems, providing both energy efficiency and convenience. Built using Raspberry Pi, Node.js, and a Firebase backend for real-time data synchronization.",
      },
      {
        title: "AI-Powered Image Recognition for Wildlife Conservation",
        description:
          "Created an AI-driven image recognition system to help researchers identify animal species from camera trap images in conservation areas. The system uses a convolutional neural network (CNN) model trained on thousands of images to achieve high accuracy in detecting and classifying wildlife. This project aids in tracking animal populations and studying biodiversity.",
      },
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/example",
      instagram: "https://instagram.com/example",
      youtube: "https://youtube.com/example",
    },
  };

  return (
    <div className="flex min-h-screen bg-gray-50 ml-60 ">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-white shadow-md p-4">
        <div className="text-center">
          <img
            src="/avatar-placeholder.png"
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
          <button className="mt-2 text-blue-600 border border-blue-600 px-4 py-1 rounded">
            Edit Profile
          </button>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Social Media</h3>
          <div className="flex gap-4">
            <a href={user.socialMedia.linkedin} target="_blank" rel="noreferrer">
              <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href={user.socialMedia.instagram} target="_blank" rel="noreferrer">
              <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href={user.socialMedia.youtube} target="_blank" rel="noreferrer">
              <img src="/youtube-icon.png" alt="YouTube" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        {/* About */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p className="text-gray-700">{user.about}</p>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          {user.projects.map((project, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;

