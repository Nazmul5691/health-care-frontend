import Link from "next/link";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    FaWhatsapp,
    FaClock,
    FaArrowRight
} from "react-icons/fa";

export default function ContactPage() {
    return (
        <main className="bg-gray-50 min-h-screen">
            {/* 1. Hero Section - Healthcare Focused */}
            <section className="bg-[#001133] py-12 md:py-24 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-tight">
                        Get in Touch with Our Specialists
                    </h1>
                    <p className="text-blue-100 text-sm md:text-xl leading-relaxed">
                        Have questions about our medical services or need to book an appointment? 
                        Doctorate is committed to providing expert care and support 24/7.
                    </p>
                </div>
            </section>

            {/* 2. Contact Cards Section */}
            <section className="max-w-7xl mx-auto px-6 -mt-10 md:-mt-16 pb-16 md:pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    {/* Helpline Card */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 text-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-5 md:mb-6">
                            <FaPhoneAlt />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">24/7 Helpline</h3>
                        <div className="space-y-1 md:space-y-2">
                            <p className="text-gray-600 font-medium text-sm md:text-base">01711-677300</p>
                            <p className="text-gray-600 font-medium text-sm md:text-base">01727-992203</p>
                        </div>
                        <Link href="tel:01711677309" className="mt-5 md:mt-6 inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all text-sm md:text-base">
                            Call for Appointment <FaArrowRight className="text-xs" />
                        </Link>
                    </div>

                    {/* Support Email Card */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-red-50 text-red-500 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-5 md:mb-6">
                            <FaEnvelope />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Email Support</h3>
                        <p className="text-gray-600 font-medium break-all text-sm md:text-base">doctorateHealtCare@gmail.com</p>
                        <Link href="mailto:alheramedicalcenter@gmail.com" className="mt-5 md:mt-6 inline-flex items-center gap-2 text-red-500 font-bold hover:gap-3 transition-all text-sm md:text-base">
                            Send Inquiry <FaArrowRight className="text-xs" />
                        </Link>
                    </div>

                    {/* Location Card */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-300 lg:col-span-1 md:col-span-2 lg:md:col-span-1">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-green-50 text-green-600 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-5 md:mb-6">
                            <FaMapMarkerAlt />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Our Facility</h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            Proshika Mor (Beside Fire Service), Maona Chowrasta, Sreepur, Gazipur.
                        </p>
                        <p className="mt-4 flex items-center gap-2 text-xs md:text-sm text-green-600 font-semibold">
                            <FaClock /> Emergency Open 24 Hours
                        </p>
                    </div>

                </div>

                {/* 3. Digital Connectivity Section */}
                <div className="mt-10 md:mt-16 bg-white rounded-3xl md:rounded-[3rem] p-6 md:p-12 shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 md:mb-4">Connect Digitally</h2>
                        <p className="text-gray-600 text-sm md:text-base px-2 md:px-0">Follow our health updates on Facebook or consult via WhatsApp.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full md:w-auto">
                        <Link
                            href="#"
                            target="_blank"
                            className="flex items-center justify-center gap-3 bg-[#1877F2] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold shadow-lg shadow-blue-200 hover:scale-105 transition-all text-sm md:text-base"
                        >
                            <FaFacebook className="text-xl md:text-2xl" /> Facebook Page
                        </Link>

                        <Link
                            href="https://wa.me/01711-677300"
                            target="_blank"
                            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold shadow-lg shadow-green-200 hover:scale-105 transition-all text-sm md:text-base"
                        >
                            <FaWhatsapp className="text-xl md:text-2xl" /> WhatsApp Consult
                        </Link>
                    </div>
                </div>
            </section>

            
        </main>
    );
}