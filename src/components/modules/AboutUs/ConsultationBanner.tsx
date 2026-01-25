"use client"

import React from "react"
import { Play } from "lucide-react"

const ConsultationBanner = () => {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/consultation.jpg')`, 
        }}
      >
        {/* Dark Blueish Overlay */}
        <div className="absolute inset-0 bg-[#001D4A]/80 backdrop-blur-[1px]"></div>
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        
        {/* Play Button with Pulse Effect */}
        <div className="flex justify-center mb-8">
          <button className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center group transition-transform hover:scale-110">
            {/* Inner Play Icon */}
            <Play className="w-8 h-8 text-[#00A8CC] fill-[#00A8CC] ml-1" />
            
            {/* Pulse Animation Layers */}
            <span className="absolute inset-0 rounded-full bg-white/30 animate-ping"></span>
          </button>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
          Start An Online Chat Consultation With Our Doctor
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* CTA Button */}
        <button className="bg-[#00A8CC] hover:bg-[#008FB0] text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-900/20 active:scale-95">
          Start Consultation
        </button>
      </div>
    </section>
  )
}

export default ConsultationBanner