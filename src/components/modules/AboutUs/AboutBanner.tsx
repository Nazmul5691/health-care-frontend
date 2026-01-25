"use client"

import React from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const AboutBanner = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-[#001233]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Large Circle */}
        <div className="absolute top-10 left-10 w-40 h-40 border border-gray-400 rounded-full" />
        
        {/* Diagonal Lines */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-gray-400 to-transparent transform rotate-45" />
        <div className="absolute bottom-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-gray-400 to-transparent transform rotate-45" />
        
        {/* Abstract Concentric Circles (Right Side) */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 border-[0.5px] border-gray-500 rounded-full opacity-30" />
        <div className="absolute -right-10 -bottom-10 w-60 h-60 border-[0.5px] border-gray-500 rounded-full opacity-30" />
        
        {/* Dot Matrix Effect */}
        <div className="absolute bottom-10 left-20 grid grid-cols-6 gap-2 opacity-40">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-400 rounded-full" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          About Us
        </h1>
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-center gap-2 text-lg md:text-xl">
          <Link 
            href="/" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <ChevronRight className="w-5 h-5 text-cyan-400 font-bold" />
          <span className="text-gray-400">About</span>
        </nav>
      </div>
    </section>
  )
}

export default AboutBanner