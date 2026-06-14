import React from "react"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { CVDuncan } from "../constants"
import CVDoc from "../mishalBiju.pdf"

const CV = () => {
return (
  <div className="bg-black-100 rounded-[20px] p-10 shadow-lg shadow-purple-500/20 border border-[#915EFF]/20">
    
    <motion.div
      className="flex min-[850px]:flex-row flex-col justify-around items-center gap-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      {/* Left Image */}
      <div className="relative group">
        <img 
          src={CVDuncan} 
          alt="CV" 
          className="w-[260px] object-contain drop-shadow-[0_0_25px_#915EFF]"
        />

        {/* Glow ring */}
        <div className="absolute inset-0 rounded-xl blur-2xl opacity-30 bg-[#915EFF] group-hover:opacity-60 transition"></div>
      </div>

      {/* Right Button */}
      <div className="text-center">
        <a href={CVDoc} download>
          {/* Changed the solid purple button background to a sleek dark background (bg-tertiary) 
              so the neon text glow pops out cleanly, just like it does against your website background */}
          <button className="relative px-10 py-4 rounded-xl bg-tertiary border border-slate-800
            shadow-lg shadow-[#915EFF]/20
            hover:scale-105 transition duration-300
            hover:shadow-[#38bdf8]/40">
            
            {/* The Text wrapper using your exact text header styles */}
            <span className="block animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black text-lg flux tracking-wide">
              Download CV
            </span>
            
          </button>
        </a>
      </div>

    </motion.div>
  </div>
)
export default SectionWrapper(CV, "cv")
