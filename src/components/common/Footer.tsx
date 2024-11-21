// src/components/common/Footer.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
      </svg>
    )
  },
  {
    name: 'WeChat',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098c.931.255 1.96.396 3.038.396h.305a7.254 7.254 0 0 1-.181-1.6c0-4.053 3.89-7.341 8.69-7.341.326 0 .646.019.962.048C17.916 4.289 13.69 2.188 8.691 2.188zm1.493 4.498a1.052 1.052 0 1 1 0 2.104 1.052 1.052 0 0 1 0-2.104zm5.062 0a1.052 1.052 0 1 1 .002 2.104 1.052 1.052 0 0 1-.002-2.104zm-1.293 9.545c-4.801 0-8.692 3.288-8.692 7.341 0 2.213 1.17 4.204 3.002 5.551a.59.59 0 0 1 .213.664l-.39 1.48c-.019.071-.048.141-.048.214 0 .163.13.294.29.294a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098c.93.255 1.96.397 3.038.397 4.801 0 8.692-3.289 8.692-7.341 0-4.053-3.89-7.341-8.692-7.341zm-3.77 4.498a1.052 1.052 0 1 1 0 2.104 1.052 1.052 0 0 1 0-2.104zm5.063 0a1.052 1.052 0 1 1 0 2.104 1.052 1.052 0 0 1 0-2.104z"/>
      </svg>
    )
  }
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#29BB89]/5 to-[#3ED9A7]/10" />
      <div className="absolute inset-0 bg-chinese-texture opacity-5" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#29BB89]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#3ED9A7]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo部分 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#29BB89] to-[#3ED9A7] bg-clip-text text-transparent">
              青白藝術工作室
            </h3>
            <p className="text-gray-600 leading-relaxed">
              港大畢業生創業團隊<br />
              全港最靚的藝術團體
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-[#29BB89] to-[#3ED9A7] rounded-full" />
          </motion.div>

          {/* 联系信息 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-800">聯繫我們</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-3 hover:text-primary transition-colors">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>+852 XXXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-primary transition-colors">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>info@qingbai.com</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-primary transition-colors">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>香港XX區XX街XX號</span>
              </li>
            </ul>
          </motion.div>

          {/* 社交媒体 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-800">關注我們</h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 
                           transform hover:-translate-y-1 transition-all duration-300
                           text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 底部版权信息 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2024 青白藝術工作室. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                隱私政策
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                服務條款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}