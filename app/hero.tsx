"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button" // Assuming this path is correct
import { useEffect, useRef, useState } from "react"

// --- Configuration (Academic English Focus) ---
const PROJECT_NAME = "Cyber Ascension"
const TOKEN_SYMBOL = "$Cyber"

// Revised Tagline - More formal and grounded
const TAGLINE = "A decentralized protocol leveraging NFTs for verifiable cognitive data representation, enabling persistent computational models and embodied interaction."

// Revised Main Description - Elaborating on the tagline academically
const DESCRIPTION = "Cyber Ascension employs NFTs for verifiable cognitive data representation, enabling computationally intensive models on a decentralized protocol to pursue digital persistence, substrate independence, and future embodied interaction via robotics/BCIs."

const WEBSITE_URL = "https://cyberascension.xyz" // Placeholder
const TWITTER_URL = "https://x.com/CyberAscensionX" // Placeholder
const GITHUB_URL = "https://github.com/CyberAscensionProtocol" // Placeholder

// Consider using videos that evoke futuristic labs, data streams, abstract neural nets, or robotics
const videoUrls = [
  "v.mp4", // Replace with actual paths
]
const placeholderPoster = "placeholder.jpg?height=1080&width=1920" // Replace with a relevant poster

// --- Component ---

export default function CyberAscensionHeroAcademic() { // Renamed component
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)

  // Video playback and looping logic (remains the same)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })

      const handleVideoEnd = () => {
        let newIndex
        do {
          newIndex = Math.floor(Math.random() * videoUrls.length)
        } while (videoUrls.length > 1 && newIndex === currentVideoIndex)
        setCurrentVideoIndex(newIndex)
      }

      const currentVideoElement = videoRef.current
      currentVideoElement.addEventListener("ended", handleVideoEnd)

      return () => {
        if (currentVideoElement) {
          currentVideoElement.removeEventListener("ended", handleVideoEnd)
        }
      }
    }
  }, [currentVideoIndex, videoUrls.length])

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Top Right Buttons (Keep placeholder or implement) */}
      {/* Video Background Section */}
      <div className="absolute inset-0 h-full w-full">
        <video
          ref={videoRef}
          key={currentVideoIndex}
          className="h-full w-full object-cover"
          autoPlay
          loop={false}
          muted={isMuted}
          playsInline
          poster={placeholderPoster}
          src={videoUrls[currentVideoIndex]}
        >
          Your browser does not support the video tag.
        </video>
        {/* Overlay - maybe slightly less intense gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        {/* Sound Toggle Button */}
        <button
          onClick={toggleSound}
          className="absolute bottom-4 right-4 z-20 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
           {/* SVG Icons remain the same */}
           {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">

        {/* Placeholder Logo Area - Kept visually similar */}
       
        {/* Project Name (English) */}
        <motion.h1
          // Slightly adjusted size, could be smaller for a more academic feel if desired
          className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-300 via-blue-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {PROJECT_NAME}
        </motion.h1>

        {/* Token Symbol (Subtle display) */}
         <motion.div
           className="mb-6 text-lg font-mono text-gray-400"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
         >
           Protocol Token: {TOKEN_SYMBOL}
         </motion.div>

        {/* Academic Description */}
        <motion.p
          // Adjusted max-width, font size slightly for readability of denser text
          className="mb-8 max-w-[800px] text-base text-gray-200 sm:text-lg leading-relaxed font-normal" // Less bold, slightly brighter text
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {DESCRIPTION}
        </motion.p>

        {/* Tagline (Displayed smaller, after main description) */}
         <motion.div
           className="mb-8 text-sm text-cyan-300/80 italic max-w-[700px]"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
         >
           "{TAGLINE}"
         </motion.div>


        {/* Links Section - Buttons remain similar */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
        </motion.div>

      </div>
    </div>
  )
}