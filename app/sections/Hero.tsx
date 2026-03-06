'use client'

import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4">
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
          Kenechukwu Chris Chisom
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
          Full-Stack Developer
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Computer Science undergraduate at University of Ibadan with experience in building 
          responsive web applications using React, TypeScript, and Node.js. Passionate about 
          creating secure, scalable solutions with clean code.
        </p>

        {/* Location */}
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
          Based in Ibadan, Oyo State, Nigeria
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:kenechukwu@example.com"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#about')}
          className="inline-flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-xs mb-2">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
