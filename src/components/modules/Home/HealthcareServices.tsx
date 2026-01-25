/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable react/no-unescaped-entities */
// "use client"

// import React from "react"
// import { motion } from "framer-motion"
// import { 
//   Heart, 
//   Eye, 
//   ShieldAlert, 
//   Baby, 
//   Brain, 
//   Activity, 
//   Smile, 
//   Bone, 
//   Stethoscope,
//   ChevronLeft, 
//   ChevronRight 
// } from "lucide-react"
// import { FaLungs } from "react-icons/fa"

// const HealthcareServices = () => {
//   // ১০টি ইউনিক সার্ভিসের ডাটা সেট
//   const servicesData = [
//     {
//       title: "Cardiology",
//       description: "From consultation to recovery, we're here to support every step of your health journey.",
//       icon: <Heart className="w-6 h-6 text-white" />,
//       bgColor: "bg-[#F4F7FF]",
//       iconBg: "bg-[#1D4ED8]",
//     },
//     {
//       title: "Ophthalmology",
//       description: "From consultation to recovery, we're here to support every step of your health journey.",
//       icon: <Eye className="w-6 h-6 text-white" />,
//       bgColor: "bg-[#F5F3FF]",
//       iconBg: "bg-[#1D4ED8]",
//     },
//     {
//       title: "Dermatology",
//       description: "From consultation to recovery, we're here to support every step of your health journey.",
//       icon: <ShieldAlert className="w-6 h-6 text-white" />,
//       bgColor: "bg-[#FFF5F5]",
//       iconBg: "bg-[#1D4ED8]",
//     },
//     {
//       title: "Pediatrics",
//       description: "From consultation to recovery, we're here to support every step of your health journey.",
//       icon: <Baby className="w-6 h-6 text-white" />,
//       bgColor: "bg-[#F0FDF4]",
//       iconBg: "bg-[#10B981]",
//     },
//     {
//       title: "Psychiatry",
//       description: "From consultation to recovery, we're here to support every step of your health journey.",
//       icon: <Brain className="w-6 h-6 text-white" />,
//       bgColor: "bg-[#FEFCE8]",
//       iconBg: "bg-[#F59E0B]",
//     },
//     {
//       title: "Neurology",
//       description: "From consultation to recovery, we're here to support every step of your health journey.",
//       icon: <Activity className="w-6 h-6 text-white" />,
//       bgColor: "bg-[#F5F5F7]",
//       iconBg: "bg-[#6366F1]",
//     },
//     {
//       title: "Pulmonology",
//       description: "From consultation to recovery, we're here to support every step of your health journey.",
//       icon: <FaLungs className="w-6 h-6 text-white" />,
//       bgColor: "bg-[#F0F9FF]",
//       iconBg: "bg-[#0EA5E9]",
//     },
//     {
//       title: "Dentistry",
//       description: "From consultation to recovery, we're here to support every step of your health journey.",
//       icon: <Smile className="w-6 h-6 text-white" />,
//       bgColor: "bg-[#FDF2F8]",
//       iconBg: "bg-[#EC4899]",
//     },
//     {
//       title: "Orthopedics",
//       description: "From consultation to recovery, we're here to support every step of your health journey.",
//       icon: <Bone className="w-6 h-6 text-white" />,
//       bgColor: "bg-[#FFF7ED]",
//       iconBg: "bg-[#F97316]",
//     },
//     {
//       title: "General Medicine",
//       description: "From consultation to recovery, we're here to support every step of your health journey.",
//       icon: <Stethoscope className="w-6 h-6 text-white" />,
//       bgColor: "bg-[#ECFDF5]",
//       iconBg: "bg-[#059669]",
//     },
//   ]

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-6">

//         {/* Section Header */}
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6">
//             Excellent Healthcare Services Nearby
//           </h2>
//           <p className="text-gray-500 leading-relaxed">
//             From consultation to recovery, we're here to support every step of your health journey.
//           </p>
//         </div>

//         {/* Dynamic Grid Layout for 10 Items */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
//           {servicesData.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               viewport={{ once: true }}
//               className={`${service.bgColor} p-10 rounded-[2.5rem] transition-all duration-300 border border-transparent hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-50/50 cursor-pointer`}
//             >
//               {/* Icon Holder */}
//               <div className={`${service.iconBg} w-14 h-14 rounded-full flex items-center justify-center mb-8 shadow-lg`}>
//                 {service.icon}
//               </div>

//               {/* Title & Description */}
//               <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
//                 {service.title}
//               </h3>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 {service.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <div className="flex justify-center gap-4">
//           <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-400 hover:text-blue-600">
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-400 hover:text-blue-600">
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default HealthcareServices




"use client"

import React, { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { motion } from "framer-motion"
import {
    Heart, Eye, ShieldAlert, Baby, Brain,
    Activity, Smile, Bone, Stethoscope,
    ChevronLeft, ChevronRight
} from "lucide-react"

// Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { FaLungs } from "react-icons/fa"

const HealthcareServices = () => {
    const swiperRef = useRef<any>(null)

    const servicesData = [
        {
            title: "Cardiology",
            description: "From consultation to recovery, we're here to support every step of your health journey.",
            icon: <Heart className="w-6 h-6 text-white" />,
            bgColor: "bg-[#2563EB]", // Bright Blue
            iconBg: "bg-[#1E40AF]"
        },
        {
            title: "Ophthalmology",
            description: "From consultation to recovery, we're here to support every step of your health journey.",
            icon: <Eye className="w-6 h-6 text-white" />,
            bgColor: "bg-[#7C3AED]", // Bright Purple
            iconBg: "bg-[#5B21B6]"
        },
        {
            title: "Dermatology",
            description: "From consultation to recovery, we're here to support every step of your health journey.",
            icon: <ShieldAlert className="w-6 h-6 text-white" />,
            bgColor: "bg-[#F43F5E]", // Bright Rose
            iconBg: "bg-[#BE123C]"
        },
        {
            title: "Pediatrics",
            description: "From consultation to recovery, we're here to support every step of your health journey.",
            icon: <Baby className="w-6 h-6 text-white" />,
            bgColor: "bg-[#10B981]", // Bright Emerald
            iconBg: "bg-[#065F46]"
        },
        {
            title: "Psychiatry",
            description: "From consultation to recovery, we're here to support every step of your health journey.",
            icon: <Brain className="w-6 h-6 text-white" />,
            bgColor: "bg-[#F59E0B]", // Bright Amber
            iconBg: "bg-[#92400E]"
        },
        {
            title: "Neurology",
            description: "From consultation to recovery, we're here to support every step of your health journey.",
            icon: <Activity className="w-6 h-6 text-white" />,
            bgColor: "bg-[#6366F1]", // Bright Indigo
            iconBg: "bg-[#3730A3]"
        },
        {
            title: "Pulmonology",
            description: "From consultation to recovery, we're here to support every step of your health journey.",
            icon: <FaLungs className="w-6 h-6 text-white" />,
            bgColor: "bg-[#0EA5E9]", // Bright Sky Blue
            iconBg: "bg-[#075985]"
        },
        {
            title: "Dentistry",
            description: "From consultation to recovery, we're here to support every step of your health journey.",
            icon: <Smile className="w-6 h-6 text-white" />,
            bgColor: "bg-[#EC4899]", // Bright Pink
            iconBg: "bg-[#9D174D]"
        },
        {
            title: "Orthopedics",
            description: "From consultation to recovery, we're here to support every step of your health journey.",
            icon: <Bone className="w-6 h-6 text-white" />,
            bgColor: "bg-[#F97316]", // Bright Orange
            iconBg: "bg-[#9A3412]"
        },
        {
            title: "General Medicine",
            description: "From consultation to recovery, we're here to support every step of your health journey.",
            icon: <Stethoscope className="w-6 h-6 text-white" />,
            bgColor: "bg-[#14B8A6]", // Bright Teal
            iconBg: "bg-[#0F766E]"
        },
    ];
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6">
                        Excellent Healthcare <br /> Services Nearby
                    </h2>
                    <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        From consultation to recovery, we're here to support every step of your health journey.
                    </p>
                </div>

                {/* Swiper Slider */}
                <div className="relative px-4">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-16"
                    >
                        {servicesData.map((service, index) => (
                            <SwiperSlide key={index} className="py-8"> {/* Added py-8 to prevent shadow clipping */}
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className={`${service.bgColor} p-10 rounded-[2.5rem] h-full transition-all duration-300 border border-transparent hover:border-blue-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] cursor-grab active:cursor-grabbing`}
                                >
                                    <div className={`${service.iconBg} w-14 h-14 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-blue-200/50`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-white text-sm leading-relaxed">{service.description}</p>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Custom Navigation Buttons */}
                <div className="flex gap-4 items-center justify-center mt-4">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-gray-400 shadow-sm active:scale-95"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-gray-400 shadow-sm active:scale-95"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HealthcareServices