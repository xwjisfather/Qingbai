// src/components/home/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0">
        <Image
          src="/images/qingbai.jpg"
          alt="青蛇白蛇藝術演出"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#29BB89]/30 to-black/50" />
      </div>
      
      {/* 装饰元素 */}
      <div className="absolute inset-0 bg-chinese-texture mix-blend-soft-light opacity-20" />
      
      {/* 主要内容 */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-bold mb-8 text-white drop-shadow-2xl"
          >
            青白藝術
            <span className="block mt-2 text-[#3ED9A7]">工作室</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-white/90 mb-12 drop-shadow-lg"
          >
            全港最靚的藝術團體
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/company">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 30px -10px rgba(41, 187, 137, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#29BB89] text-white px-8 py-3 rounded-full 
                         text-lg font-medium
                         hover:bg-[#3ED9A7] transition-all duration-300 
                         shadow-xl shadow-[#29BB89]/20"
              >
                公司簡介
              </motion.button>
            </Link>
            <Link href="/business">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 30px -10px rgba(41, 187, 137, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#29BB89] text-white px-8 py-3 rounded-full 
                         text-lg font-medium
                         hover:bg-[#3ED9A7] transition-all duration-300 
                         shadow-xl shadow-[#29BB89]/20"
              >
                過往業務
              </motion.button>
            </Link>
            <Link href="/future">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 30px -10px rgba(41, 187, 137, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#29BB89] text-white px-8 py-3 rounded-full 
                         text-lg font-medium
                         hover:bg-[#3ED9A7] transition-all duration-300 
                         shadow-xl shadow-[#29BB89]/20"
              >
                未來展望
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
    </section>
  )
}