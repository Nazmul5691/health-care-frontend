"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Stethoscope,
  Brain,
  Activity,
  Baby,
  Pill,
  ArrowRight,
  PhoneCall
} from "lucide-react"
import { FaLungs } from "react-icons/fa"
import Link from "next/link"

const Specialization = () => {
  const categories = [
    { name: "General Doctor", icon: <Stethoscope className="w-10 h-10" /> },
    { name: "Psychiatry", icon: <Brain className="w-10 h-10" /> },
    { name: "Dentist", icon: <Activity className="w-10 h-10" /> },
    { name: "Paediatrics", icon: <Baby className="w-10 h-10" /> },
    { name: "Medicine", icon: <Pill className="w-10 h-10" /> },
    { name: "Pulmonology", icon: <FaLungs className="w-10 h-10" /> },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">

        {/* TOP ICONS GRID - All cards now have the same shadow and styling */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {categories.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center justify-center p-8 rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-50 cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              <div className="text-[#0b0ed4] mb-4">
                {item.icon}
              </div>
              <span className="text-sm font-bold text-[#0F172A] whitespace-nowrap text-center">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* DIVIDER LINE */}
        <div className="w-full h-px bg-gray-100 mb-12" />

        {/* BOTTOM CTA BAR */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white p-4">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#0b0ed4] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-cyan-100">
              <PhoneCall className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-[#0F172A]">Free Online Consultation</h3>
              <p className="text-gray-400 text-sm mt-1 max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <Link href='/consultation'>
              <button className="bg-[#0b0ed4] text-white px-8 py-4 rounded-lg font-bold hover:cursor-pointer hover:bg-[#000286] transition-all shadow-md hover:shadow-cyan-200">
                Make Appointment
              </button>
            </Link>

            <Link href='/consultation'>
              <button className="flex items-center gap-2 font-bold text-[#0F172A] hover:cursor-pointer hover:text-[#0b0ed4] transition-colors group">
                All Specialist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Specialization