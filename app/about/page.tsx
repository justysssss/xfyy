'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Quote } from 'lucide-react'
import Footer from '../pages/footer'
import { useState, useEffect } from 'react'

export default function About() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const blackSectionY = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%'])
  const blackSectionOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      {/* First Section */}
      <motion.section
        style={{ opacity, y }}
        className="fixed inset-0 flex flex-col items-center justify-center overflow-clip -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: loaded ? -20 : 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 text-center"
          >
            <span className="relative inline-block">
              XFYY
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 30"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              >
                <path
                  d="M5 20 Q 150 5 295 20"
                  fill="none"
                  stroke="#FF5733"
                  strokeWidth="2"
                />
              </motion.svg>
            </span>{" "}
            <span className="block sm:inline">STUDIO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="text-center text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto"
          >
            We are a creative studio dedicated to unlocking the full potential of your business.
            Our passion lies in crafting exceptional web experiences that not only captivate but also engage your audience, ensuring that your clients keep coming back for more. 
            Through innovative design and cutting-edge technology, we strive to bring your vision to life, creating lasting impressions that resonate with your customers.
          </motion.p>
        </div>
      </motion.section>

      {/* Second Section */}
      <motion.section
        style={{ 
          y: blackSectionY,
          opacity: blackSectionOpacity
        }}
        className="relative min-h-[110vh] mt-[100vh] bg-black text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="relative pt-32">
            <div className="absolute left-4 sm:left-6 lg:left-8 top-32">
              <Quote className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-white/20" />
            </div>
            
            <div className="text-center">
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-12">
                We Provide the best
                <br className="hidden sm:block" />
                for your business
              </h2>
              
              <div className="mt-12 max-w-xl mx-auto space-y-6 text-sm sm:text-base md:text-lg leading-relaxed text-white/60">
                <p>
                  It&apos;s our pleasure to present you unique and creative works 
                  and websites so that your business grows to the fullest.
                </p>
                <p>
                  As a dedicated team of web developers, we specialize in curating exceptional websites tailored to elevate your business. If you are a photographer eager to showcase your work or if you have collaboration proposals, we invite you to reach out.
                  Let&apos;s work together to create an outstanding online presence that highlights your unique vision.
                </p>
              </div> 
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black">
        <Footer />
      </footer>
    </div>
  )
}