
/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client"


// import Image from "next/image"
// import { motion } from "framer-motion"
// import { ArrowRight, BadgeCheck } from "lucide-react"

// const MeetDoctors = () => {
//   const doctors = [
//     {
//       name: "Dr. Alex Dolmand",
//       specialty: "Cardiologist",
//       image: "/doctor1.jpg", // Public folder এ আপনার ইমেজগুলো রাখুন
//     },
//     {
//       name: "Dr. Emily Ross",
//       specialty: "Cardiologist",
//       image: "/doctor3.jpg",
//     },
//     {
//       name: "Dr. Ben Carter",
//       specialty: "Cardiologist",
//       image: "/doctor2.jpg",
//     },
//   ]

//   return (
//     <section className="py-20 bg-gray-200">
//       <div className="container mx-auto px-6">

//         {/* Section Header */}
//         <div className="mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0F172A] leading-tight">
//             Meet Our Experienced <br /> Doctors
//           </h2>
//         </div>

//         {/* Doctors Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {doctors.map((doctor, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group relative bg-[#F8FAFC] rounded-4xl p-6 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100 border border-transparent hover:border-blue-50"
//             >
//               {/* Doctor Image Container */}
//               <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-200">
//                 <Image
//                   src={doctor.image}
//                   alt={doctor.name}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Doctor Info */}
//               <div className="flex justify-between items-end">
//                 <div>
//                   <h3 className="text-xl font-bold text-[#0F172A] mb-1">
//                     {doctor.name}
//                   </h3>
//                   <p className="text-gray-500 text-sm font-medium">
//                     {doctor.specialty}
//                   </p>
//                 </div>
//                 <div className="text-blue-500">
//                   <BadgeCheck className="w-6 h-6 fill-blue-50" />
//                 </div>
//               </div>

//               {/* Hover Appointment Button (Bottom-up slide) */}
//               <motion.div 
//                 className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
//               >
//                 <button className="w-full bg-[#0b0ed4] text-white py-4 rounded-xl font-bold flex items-center justify-center hover:cursor-pointer gap-2 shadow-lg shadow-blue-200 hover:bg-[#0205a3] transition-colors">
//                   Appointment
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

// export default MeetDoctors





// import Image from "next/image"
// import { ArrowRight, BadgeCheck } from "lucide-react"
import { getDoctors } from "@/services/admin/doctorManagement"
import DoctorCard from "../Consultation/DoctorCard"
import Link from "next/link"

const MeetDoctors = async () => {
  // Same API, just limit 3
  const doctorsResponse = await getDoctors("limit=3&sortBy=createdAt&sortOrder=asc")
  const doctors = doctorsResponse?.data || []

  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0F172A] leading-tight">
            Meet Our Experienced <br /> Doctors
          </h2>
        </div>

        {/* Doctors Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor: any) => (
            <div
              key={doctor._id}
              className="group relative bg-[#F8FAFC] rounded-4xl p-6 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100"
            >
              
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-200">
                <Image
                  src={doctor.profilePhoto}
                  alt={doctor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-1">
                    {doctor.name}
                  </h3>

                  <p className="text-gray-500 text-sm font-medium">
                    {doctor.doctorSpecialties?.length > 0
                      ? doctor.doctorSpecialties
                          .map(
                            (ds: any) =>
                              ds.specialities?.title
                          )
                          .filter(Boolean)
                          .join(", ")
                      : "Specialist"}
                  </p>
                </div>

                <BadgeCheck className="w-6 h-6 text-blue-500 fill-blue-50" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button className="w-full bg-[#0b0ed4] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200 hover:bg-[#0205a3]">
                  Appointment
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor: any) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

      </div>
      <div>
        <Link href="/consultation" className="flex justify-center">
          <button className="mt-10 bg-[#0b0ed4] cursor-pointer text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200 hover:bg-[#0205a3] transition-colors mx-auto">
            View All Doctors
          </button>
        </Link>
      </div>
    </section>
  )
}

export default MeetDoctors
