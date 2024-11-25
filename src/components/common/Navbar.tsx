// src/components/common/Navbar.tsx
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative bg-white/80 backdrop-blur-sm shadow-lg">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-snake-pattern opacity-5" />
      <div className="absolute inset-0 bg-chinese-texture opacity-10" />
      
      {/* 导航内容 */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex justify-between h-16">
          {/* Logo部分 */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold relative group"
            >
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                青白藝術
              </span>
              {/* Logo下方装饰线 */}
              <motion.div 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-300"
                whileHover={{ width: '100%' }}
              />
            </Link>
          </div>
          
          {/* 导航链接 */}
          <div className="hidden md:flex items-center space-x-12">
            {[
              { href: '/about', label: '關於我們' },
              { href: '/booking', label: '預約課程' }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group py-2"
              >
                <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                  {link.label}
                </span>
                {/* 悬浮时的装饰效果 */}
                <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-primary/20 rounded-full 
                              group-hover:w-full group-hover:left-0 group-hover:h-0.5
                              transition-all duration-300" />
                {/* 装饰点 */}
                <div className="absolute -right-4 top-1/2 w-1 h-1 bg-primary/30 rounded-full 
                              transform -translate-y-1/2" />
              </Link>
            ))}
          </div>

          {/* 移动端按钮 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative group p-2"
            >
              <div className="w-6 h-0.5 bg-primary mb-1.5 transition-all duration-300 
                            group-hover:w-8 group-hover:bg-primary-light" />
              <div className="w-8 h-0.5 bg-primary mb-1.5 transition-all duration-300 
                            group-hover:w-6 group-hover:bg-primary-light" />
              <div className="w-6 h-0.5 bg-primary transition-all duration-300 
                            group-hover:w-8 group-hover:bg-primary-light" />
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {[
                { href: '/about', label: '關於我們' },
                { href: '/booking', label: '預約課程' }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 px-4 text-gray-600 hover:text-primary hover:bg-primary/5 
                            rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}