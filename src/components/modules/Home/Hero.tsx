"use client"

import React from "react"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { Star, PhoneCall, Users } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  const swipeLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  }

  const swipeRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  }

  return (
    <section className="relative w-full min-h-screen bg-[#050B1A] overflow-hidden flex flex-col items-center justify-center py-20">

      {/* BACKGROUND DECORATIVE CIRCULAR LINES */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white opacity-30 rounded-full"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white opacity-30 rounded-full"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white opacity-30 rounded-full"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white opacity-30 rounded-full"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white opacity-30 rounded-full"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white opacity-10 rounded-full"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white opacity-30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10 flex flex-col items-center text-center">

        {/* HEADER TEXT - SWIPE LEFT */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={swipeLeft}
          className="text-white text-xl md:text-3xl lg:text-5xl font-bold max-w-5xl leading-tight"
        >
          Consultation With Our Doctor Anywhere, <br />
          Anytime by <span className="underline decoration-cyan-400 decoration-4 underline-offset-8">Phone or Video Call</span>
        </motion.h1>

        {/* DESCRIPTION - SWIPE RIGHT */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={swipeRight}
          className="text-gray-400 text-sm md:text-base max-w-2xl mt-8 leading-relaxed"
        >
          Connect with experienced doctors from the comfort of your home. Get trusted
          medical advice, diagnosis, and follow-up care through secure phone or video
          consultations—whenever you need it, wherever you are.
        </motion.p>

        {/* BUTTONS - SWIPE LEFT & RIGHT */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <Link href='/login'>
            <motion.button
              initial="hidden"
              whileInView="visible"
              variants={swipeLeft}
              className="bg-[#0b0ed4] hover:cursor-pointer text-white px-8 py-3 rounded-md font-semibold hover:bg-[#020483]  transition-colors"
            >
              Get Started
            </motion.button>
          </Link>

          <Link href='/consultation'>
            <motion.button
              initial="hidden"
              whileInView="visible"
              variants={swipeLeft}
              className="bg-[#0b0ed4] hover:cursor-pointer text-white px-8 py-3 rounded-md font-semibold hover:bg-[#020483]  transition-colors"
            >
               Get Appointment
            </motion.button>
          </Link>
        </div>

        {/* MAIN VIDEO/IMAGE SECTION */}
        <div className="relative mt-20 w-full max-w-4xl">

          {/* Main Image from Public Folder */}
          <div className="relative rounded-2xl border-8 border-white/5 overflow-hidden shadow-2xl">
            <Image
              src="/bannerDoctor.jpg"
              alt="Doctor Consultation"
              width={1000}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* DR. MARLIE VARGA CARD - SWIPE LEFT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={swipeLeft}
            className="absolute top-1/4 -left-4 md:-left-16 bg-white p-3 rounded-lg shadow-xl flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
              <Image src="/bannerDoctor.jpg" width={40} height={40} alt="doc" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900">Dr. Marlie Varga</p>
              <p className="text-[10px] text-gray-500 font-medium">General Doctor</p>
            </div>
          </motion.div>

          {/* 24/7 SERVICE CARD - SWIPE LEFT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={swipeLeft}
            className="absolute bottom-10 -left-4 md:-left-20 bg-white p-3 rounded-lg shadow-xl flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
              <PhoneCall className="w-5 h-5 text-cyan-600" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900">24/7</p>
              <p className="text-[10px] text-gray-500 font-medium">Service Center</p>
            </div>
          </motion.div>

          {/* PATIENT REVIEWS CARD - SWIPE RIGHT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={swipeRight}
            className="absolute top-10 -right-4 md:-right-16 bg-white p-4 rounded-lg shadow-xl z-20"
          >
            <div className="flex -space-x-2 mb-2">
              {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-300" />)}
            </div>
            <p className="text-sm font-bold text-gray-900">2200+ Patient</p>
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              4.9 (2K Reviews)
            </div>
          </motion.div>

          {/* DOCTORS ONLINE CARD - SWIPE RIGHT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={swipeRight}
            className="absolute bottom-20 -right-4 md:-right-16 bg-white p-3 rounded-lg shadow-xl flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900">45+</p>
              <p className="text-[10px] text-gray-500 font-medium">Doctors Online</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero