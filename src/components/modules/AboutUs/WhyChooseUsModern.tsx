"use client"

import React from "react"
import Image from "next/image"
import {  UserCheck,  Clock, ShieldCheck, Play } from "lucide-react"
import { FaHeartPulse } from "react-icons/fa6"

const WhyChooseUsModern = () => {
  const features = [
    {
      title: "Qualified Doctors",
      desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt",
      icon: <UserCheck className="w-6 h-6 text-[#00E5FF]" />,
    },
    {
      title: "Range of Specialities",
      desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt",
      icon: <FaHeartPulse className="w-6 h-6 text-[#00E5FF]" />,
    },
    {
      title: "24/7 Availability",
      desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt",
      icon: <Clock className="w-6 h-6 text-[#00E5FF]" />,
    },
    {
      title: "Quality Service",
      desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt",
      icon: <ShieldCheck className="w-6 h-6 text-[#00E5FF]" />,
    },
  ]

  return (
    <section className="py-24 bg-[#001233] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <span className="text-[#00E5FF] font-medium tracking-wider text-sm uppercase">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              We Offer A Complete Range Of <br /> Online Doctor Consultation
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="text-gray-400 leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo.
            </p>
          </div>
        </div>

        {/* Bottom Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {features.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center bg-[#001D4A]">
                   {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: Video Thumbnail */}
          <div className="relative group cursor-pointer">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden border-4 border-white/5 shadow-2xl">
              <Image 
                src="/bannerVideo2.jpg" 
                alt="Doctor Consultation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                <div className="w-20 h-20 bg-[#00E5FF] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.5)] animate-pulse">
                  <Play className="w-8 h-8 text-[#001233] fill-[#001233]" />
                </div>
              </div>
            </div>
            {/* Background Decorative Dots */}
            <div className="absolute -top-6 -right-6 w-32 h-32 grid grid-cols-5 gap-2 opacity-20 -z-10">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white rounded-full" />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsModern