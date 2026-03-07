"use client"
import Image from 'next/image'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'



const HeroSection: React.FC = () => {

    const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:kenechukwu@example.com", icon: Mail, label: "Email" }
  ];

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center mt-10 justify-between gap-8 lg:gap-12 px-4 sm:px-6 lg:px-16 xl:px-24 py-12 lg:py-0">
      
      {/* Text Content - Full width on mobile, half on large screens */}
      <div className="w-full lg:w-1/2 max-w-3xl text-center lg:text-left mt-10 lg:mt-0">
        {/* Greeting */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Kenechukwu Chris Chisom
        </motion.h1>

        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6"
        >
          Full-Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl lg:mx-0 mx-auto mb-8 leading-relaxed"
        >
          Computer Science undergraduate at University of Ibadan with experience in building
          responsive web applications using React, TypeScript, and Node.js. Passionate about
          creating secure, scalable solutions with clean code.
        </motion.p>

        {/* Location */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-gray-500 dark:text-gray-500 mb-8"
        >
          Based in Ibadan, Oyo State, Nigeria
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12"
        >
          <button
            onClick={() => scrollToSection('#projects')}
            className="w-full sm:w-auto px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="w-full sm:w-auto px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center lg:justify-start gap-6 mb-16 lg:mb-0"
        >
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Image - Hidden on mobile, visible on large screens */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="hidden lg:block lg:w-1/2 relative"
      >
        <div className="relative mx-auto max-w-md lg:max-w-full">
          {/* Optional: Add a subtle background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>
          
          <Image
            src="/hero-image.png"
            alt="Kenechukwu Chris Chisom - Full-Stack Developer"
            width={500}
            height={500}
            priority
            className="relative object-cover opacity-90 rounded-full dark:opacity-90 pointer-events-none mx-auto lg:mx-0 lg:ml-auto shadow-2xl"
          />
        </div>
      </motion.div>

      {/* Scroll Indicator - Only show on mobile/tablet */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="lg:hidden"
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="inline-flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-xs mb-2">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </button>
      </motion.div>
    </section>
  )
}

export default HeroSection