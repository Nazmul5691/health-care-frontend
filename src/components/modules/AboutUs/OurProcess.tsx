"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Calendar, MessageSquare, ClipboardCheck, ArrowRight } from "lucide-react"

const OurProcess = () => {
  const processSteps = [
    {
      title: "Search A Doctor",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      icon: <Search className="w-6 h-6 text-white" />,
    },
    {
      title: "Schedule an Appointment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      icon: <Calendar className="w-6 h-6 text-white" />,
    },
    {
      title: "Start Consultation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      icon: <MessageSquare className="w-6 h-6 text-white" />,
    },
    {
      title: "Get You Solution",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      icon: <ClipboardCheck className="w-6 h-6 text-white" />,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image with Floating Card */}
          <div className="relative group">
            <div className="relative aspect-[4/4.5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/bannerDoctor.jpg"
                alt="Doctor working on laptop"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating White Card */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute bottom-10 left-6 right-6 md:right-auto md:w-[320px] bg-white p-8 rounded-2xl shadow-2xl border-l-8 border-[#00A8CC]"
            >
              <h4 className="text-[#1E293B] font-bold text-xl mb-4 leading-tight">
                Connect Online & Get Best Solutions From Our Doctor
              </h4>
              <button className="flex items-center gap-2 text-[#00A8CC] font-bold hover:gap-4 transition-all uppercase text-xs tracking-widest">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              {/* Triangle pointer */}
              <div className="absolute -bottom-4 left-10 w-0 h-0 border-l-15 border-l-transparent border-t-15 border-t-white border-r-15 border-r-transparent"></div>
            </motion.div>
          </div>

          {/* Right Side: Process Content */}
          <div className="space-y-8">
            <div className="mb-12">
              <span className="text-[#00A8CC] font-bold tracking-widest uppercase text-sm">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#001D4A] mt-4 mb-6 leading-tight">
                4 Steps To Get Your Solutions
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Vertical Steps */}
            <div className="relative space-y-10">
              {/* Dotted Connection Line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 border-l-2 border-dotted border-gray-200 z-0"></div>

              {processSteps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex gap-8 group">
                  {/* Icon with Cyan Background */}
                  <div className="shrink-0 w-14 h-14 bg-[#00A8CC] rounded-lg flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
                    {step.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#1E293B] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default OurProcess