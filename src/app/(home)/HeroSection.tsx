"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import Link from 'next/link'
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight'
import { ProfilePicture } from "./PofilePicture";

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <HeroHighlight containerClassName="min-h-screen">
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 min-h-screen py-8 md:py-16">
          {/* Left content */}
          <motion.div
            className="flex flex-col justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Role badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4 lg:mb-6 sit-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-2xl text-white/80"><b>SIT</b> - <b>S</b>hivam <b>I</b>n <b>T</b>ech</span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              className="space-y-3 lg:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight hero-head">
                <span className="block text-white">Transforming</span>
                <span className="block">
                  <Highlight className="text-black dark:text-white">
                    Ideas
                  </Highlight> into Scalable
                </span>
                <span className="block text-white">Digital Solutions</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base lg:text-lg text-gray-300 mt-4 lg:mt-6 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Engineering reliable, <u>high-performance applications</u> that deliver measurable impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-6 lg:mt-8 button-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link
                href="#projects"
                className="group relative px-5 py-2.5 lg:px-6 lg:py-3 rounded-xl overflow-hidden color-btn-wrapper"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-110 color-btn" />
                <span className="relative text-white font-medium text-sm lg:text-base">Explore My Work</span>
              </Link>
              <Link
                href="#contact"
                className="group relative px-5 py-2.5 lg:px-6 lg:py-3 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative text-white font-medium text-sm lg:text-base">Let&apos;s Collaborate</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right content - Profile Image */}
          <ProfilePicture />
        </div>
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
        style={{ scaleX }}
      />
    </HeroHighlight>
  )
}