"use client"

import React from "react"
import { motion } from "framer-motion"

const WorkingProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Fill The Form",
      description: "Provide your basic information and health concerns to help us understand your needs before the consultation.",
      color: "bg-[#22C55E]", // Green
    },
    {
      id: "02",
      title: "Book An Appointment",
      description: "Choose your preferred doctor, select a suitable time, and confirm your appointment in just a few clicks.",
      color: "bg-[#0EA5E9]", // Blue
    },
    {
      id: "03",
      title: "Check-Ups",
      description: "Consult with the doctor through a secure phone or video call for proper evaluation and medical advice.",
      color: "bg-[#F43F5E]", // Pink
    },
    {
      id: "04",
      title: "Get Reports",
      description: "Receive your digital prescription, consultation notes, or medical reports directly after the session.",
      color: "bg-[#FBBF24]", // Yellow
    },
  ];


  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#0b0ed4] font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2">
            <span className="w-1 h-4 bg-[#0b0ed4] inline-block"></span>
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-4">
            Our Working Process
          </h2>
        </div>

        <div className="relative">
          {/* Sinuosity Dotted Line (Desktop only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-24 -z-10">
            <svg width="100%" height="100%" viewBox="0 0 1200 100" fill="none" preserveAspectRatio="none">
              <path
                d="M50 50 C 200 -20, 400 120, 600 50 C 800 -20, 1000 120, 1150 50"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Number Circle */}
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg`}>
                  {step.id}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkingProcess