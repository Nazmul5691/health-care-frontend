// "use client"

// import React from "react"
// import { motion } from "framer-motion"
// import { Search } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// // import { LargeSparkleIcon } from "@/assets/icons/SparkleIcon"

// const AISuggestionSection = () => {
//   const formCard = {
//     title: "AI Doctor Finder",
//     symptomLabel: "What are your symptoms?",
//     symptomPlaceholder: "e.g., headache, fever, cough",
//     submitText: "Get AI Recommendations",
//     footerText: "✨ Powered by advanced AI algorithms for accurate doctor matching",
//   }

//   return (
//     <section className="relative py-20 overflow-hidden bg-[#050B1A]">
//       {/* Background Decorative Blobs for Glass Effect Reflection */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
//       <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

//       <div className="container mx-auto px-6 flex justify-center">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="w-full max-w-[600px] relative"
//         >
//           {/* Main Glass Card */}
//           <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">

//             {/* Glossy Overlay Reflection */}
//             <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-linear-to-br from-white/10 via-transparent to-transparent rotate-45 pointer-events-none" />

//             {/* Card Header */}
//             <div className="mb-8 flex items-center justify-between relative z-10">
//               <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
//                 {formCard.title}
//               </h2>
//               <div className="p-2 bg-blue-500/20 rounded-lg backdrop-blur-md border border-blue-400/30">
//                 {/* <LargeSparkleIcon /> */}
//               </div>
//             </div>

//             {/* Form Content */}
//             <form className="space-y-6 relative z-10">
//               <div className="space-y-3">
//                 <Label
//                   htmlFor="symptoms"
//                   className="text-sm font-medium text-blue-200/80 ml-1"
//                 >
//                   {formCard.symptomLabel}
//                 </Label>
//                 <div className="relative group">
//                   <Input
//                     id="symptoms"
//                     name="symptoms"
//                     placeholder={formCard.symptomPlaceholder}
//                     className="h-14 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all pl-5"
//                   />
//                   <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
//                 </div>
//               </div>

//               {/* Submit Button with Hover Effect */}
//               <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                 <Button
//                   type="submit"
//                   className="h-14 w-full rounded-2xl bg-[#0b0ed4] text-white font-bold text-lg hover:bg-[#0306ac] shadow-lg shadow-blue-600/30 gap-3 transition-all"
//                 >
//                   <Search className="size-5" />
//                   {formCard.submitText}
//                 </Button>
//               </motion.div>
//             </form>

//             {/* Footer with subtle glass effect */}
//             <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
//               <p className="text-center text-xs md:text-sm leading-relaxed text-blue-200/50 italic">
//                 {formCard.footerText}
//               </p>
//             </div>
//           </div>

//           {/* Decorative Elements outside the card */}
//           <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full" />
//           <div className="absolute -top-6 -left-6 w-16 h-16 bg-cyan-500/20 blur-xl rounded-full" />
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default AISuggestionSection










// AISuggestionSection.tsx

"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import AISearchDialog from "@/components/shared/AISSearchDialog"

const AISuggestionSection = () => {
  const [symptoms, setSymptoms] = useState("")
  const [openDialog, setOpenDialog] = useState(false)

  const formCard = {
    title: "AI Doctor Finder",
    symptomLabel: "What are your symptoms?",
    symptomPlaceholder: "e.g., headache, fever, cough",
    submitText: "Get AI Recommendations",
    footerText: "✨ Powered by advanced AI algorithms for accurate doctor matching",
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (symptoms.trim().length >= 5) {
      setOpenDialog(true)
    }
  }

  return (
    <section className="relative py-20 overflow-hidden bg-[#050B1A]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

      
      <div className="hidden">
        <AISearchDialog
          externalOpen={openDialog}
          onOpenChange={setOpenDialog}
          initialSymptoms={symptoms}
          onSearchComplete={() => {
            setOpenDialog(false)
            setSymptoms("") 
          }}
        />
      </div>

      <div className="container mx-auto px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[600px] relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
            <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-linear-to-br from-white/10 via-transparent to-transparent rotate-45 pointer-events-none" />

            <div className="mb-8 flex items-center justify-between relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {formCard.title}
              </h2>
            </div>

            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="space-y-3">
                <Label htmlFor="symptoms" className="text-sm font-medium text-blue-200/80 ml-1">
                  {formCard.symptomLabel}
                </Label>
                <div className="relative group">
                  <Input
                    id="symptoms"
                    name="symptoms"
                    placeholder={formCard.symptomPlaceholder}
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)} // ✅ controlled
                    className="h-14 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all pl-5"
                  />
                </div>
                {/* ✅ minimum character hint */}
                {symptoms.length > 0 && symptoms.length < 5 && (
                  <p className="text-xs text-red-400 ml-1">
                    At least 5 characters required ({symptoms.length}/5)
                  </p>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={symptoms.trim().length < 5} // 
                  className="h-14 w-full rounded-2xl bg-[#0b0ed4] text-white font-bold text-lg hover:bg-[#0306ac] shadow-lg shadow-blue-600/30 gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Search className="size-5" />
                  {formCard.submitText}
                </Button>
              </motion.div>
            </form>

            <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
              <p className="text-center text-xs md:text-sm leading-relaxed text-blue-200/50 italic">
                {formCard.footerText}
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full" />
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-cyan-500/20 blur-xl rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

export default AISuggestionSection