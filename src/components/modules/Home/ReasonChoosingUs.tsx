/* eslint-disable react/no-unescaped-entities */
"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Eye, ShieldCheck, ArrowUpRight } from "lucide-react"

const ReasonChoosingUs = () => {
  const features = [
    { title: "Personalized Care", icon: <Heart className="w-5 h-5 text-white" /> },
    { title: "Expert Specialists", icon: <Eye className="w-5 h-5 text-white" /> },
    { title: "Trusted by Thousands", icon: <ShieldCheck className="w-5 h-5 text-white" /> },
  ]

  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-[#0F172A] leading-tight">
                Reason for <br /> choosing us
              </h2>
              <p className="text-gray-500 mt-6 leading-relaxed max-w-sm">
                From consultation to recovery, we're here to support every step of your health journey.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-full shadow-sm border border-gray-100 cursor-pointer"
                >
                  <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <span className="font-bold text-[#0F172A]">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[350px] aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://res.cloudinary.com/dh3ej57qw/image/upload/v1769356143/doctor6_gwtkkq.jpg" 
                alt="Doctor Portrait"
                fill
                className="object-cover mt-2"
              />
            </div>
          </div>

          {/* RIGHT CONTENT - INFO CARDS */}
          <div className="lg:col-span-4 space-y-6">
            {/* Top Card */}
            <div className="bg-[#EFEEFF] p-8 rounded-4xl space-y-6">
              <p className="text-[#0F172A] leading-relaxed">
                Modern medical knowledge guarantees that each patient enjoys the highest quality.
              </p>
              <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full font-bold text-sm text-[#0F172A] hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
                See How It Works
              </button>
            </div>

            {/* Bottom Card */}
            <div className="bg-[#FFF4F2] p-8 rounded-4xl space-y-6">
              <p className="text-[#0F172A] leading-relaxed">
                Our commitment goes beyond medicine — we focus on your overall well-being.
              </p>
              <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full font-bold text-sm text-[#0F172A] hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
                Consult With Our Doctor
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ReasonChoosingUs