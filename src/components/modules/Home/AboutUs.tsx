"use client"


import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, Users } from "lucide-react"

const AboutUs = () => {
    const stats = [
        { label: "Save More Times", value: 92 },
        { label: "Integrated Labs", value: 89 },
    ]

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE: OVERLAPPING IMAGES */}
                    <div className="relative h-[500px] md:h-[600px]">
                        {/* Top Left Image */}
                        <div className="absolute top-0 left-0 w-2/3 aspect-square rounded-2xl overflow-hidden z-20 shadow-xl">
                            <Image
                                src="/aboutUs1.jpg"
                                alt="Patient consultation"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Cyan Decorative Semi-circle (Top Right) */}
                        <div className="absolute top-10 right-10 w-48 h-48 bg-[#00B4D8] rounded-tl-full -z-10 opacity-90" />

                        {/* Bottom Right Image */}
                        <div className="absolute bottom-0 right-0 w-2/3 aspect-square rounded-2xl overflow-hidden z-20 shadow-xl border-8 border-white">
                            <Image
                                src="/aboutUs2.jpg"
                                alt="Doctor working"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Satisfied Patients Card (Bottom Left) */}
                        <div className="absolute bottom-10 left-0 bg-white p-6 rounded-2xl shadow-2xl z-30 flex flex-col items-center min-w-[180px]">
                            <div className="relative w-full h-full">
                                {/* Cyan Background Shape */}
                                <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#00B4D8] rounded-full opacity-20" />
                                <Users className="w-10 h-10 text-[#00B4D8] mb-2" />
                                <h3 className="text-3xl font-bold text-[#0F172A]">2,200 +</h3>
                                <p className="text-gray-500 text-sm font-medium">Satisfied Patients</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: CONTENT */}
                    <div className="flex flex-col">
                        <span className="text-[#0b0ed4] font-bold tracking-wider mb-4 uppercase text-sm">
                            About Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
                            We Provide Best Online Doctor Consultation For You
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-8 max-w-xl">
                            Connect with qualified doctors through secure phone and video calls. Get expert
                            medical advice, diagnosis, and follow-up care anytime, anywhere.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div className="flex flex-col space-y-3">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#0b0ed4]" />
                                    <span className="font-bold text-[#0b0ed4]">All Types of Doctors</span>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Consult experienced general physicians and specialist doctors across multiple
                                    medical departments from one platform.
                                </p>
                            </div>

                            <div className="flex flex-col space-y-3">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#0b0ed4]" />
                                    <span className="font-bold text-[#0b0ed4]">Get an E-Prescription</span>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Receive verified digital prescriptions after consultation for easy access to
                                    medicines and ongoing treatment.
                                </p>
                            </div>
                        </div>

                        {/* Progress Bars */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between text-sm font-bold text-[#0F172A]">
                                        <span>{stat.label}</span>
                                        <span>{stat.value}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${stat.value}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-[#0b0ed4]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Founder Info & Signature */}
                        <div className="flex items-center justify-between border-t pt-8">
                            <div className="flex items-center gap-4">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100">
                                    <Image src="/doctor1.jpg" alt="Founder" fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0F172A]">Dr. Marlie Varga</h4>
                                    <p className="text-xs text-gray-400">Founder, Doctorate</p>
                                </div>
                            </div>

                            {/* Signature Placeholder */}
                            <div className="hidden md:block">
                                <span className="text-4xl font-serif italic text-gray-200 select-none">
                                    Marlie Varga
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutUs