// src/components/common/Footer.tsx
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

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
    name: 'Xiaohongshu',
    href: '#',
    icon: (
      <img src="/qr-xiaohongshu.png" alt="小红书二维码" className="w-7 h-7 rounded" />
    )
  },
  {
    name: 'WeChat',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098c.931.255 1.96.396 3.038.396h.305a7.254 7.254 0 0 1-.181-1.6c0-4.053 3.89-7.341 8.69-7.341.326 0 .646.019.962.048C17.916 4.289 13.69 2.188 8.691 2.188zm1.493 4.498a1.052 1.052 0 1 1 0 2.104 1.052 1.052 0 0 1 0-2.104zm5.062 0a1.052 1.052 0 1 1 .002 2.104 1.052 1.052 0 0 1-.002-2.104zm-1.293 9.545c-4.801 0-8.692 3.288-8.692 7.341 0 2.213 1.17 4.204 3.002 5.551a.59.59 0 0 1 .213.664l-.39 1.48c-.019.071-.048.141-.048.214 0 .163.13.294.294.294a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098c.93.255 1.96.397 3.038.397 4.801 0 8.692-3.289 8.692-7.341 0-4.053-3.89-7.341-8.692-7.341zm-3.77 4.498a1.052 1.052 0 1 1 0 2.104 1.052 1.052 0 0 1 0-2.104zm5.063 0a1.052 1.052 0 1 1 0 2.104 1.052 1.052 0 0 1 0-2.104z"/>
      </svg>
    )
  }
]

export default function Footer() {
  const [showIGQR, setShowIGQR] = useState(false)
  const [showXHSQR, setShowXHSQR] = useState(false)
  const [showWXQR, setShowWXQR] = useState(false)
  return (
    <footer className="relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#29BB89]/5 to-[#3ED9A7]/10" />
      <div className="absolute inset-0 bg-chinese-texture opacity-5" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#29BB89]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#3ED9A7]/5 rounded-full blur-3xl" />
      
      {/* IG二维码弹窗 */}
      {showIGQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setShowIGQR(false)}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 relative max-w-xs w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-400 hover:text-primary text-2xl" onClick={() => setShowIGQR(false)}>&times;</button>
            <img src="/images/IG.png" alt="Instagram二维码" className="w-56 h-56 rounded mb-4" />
          </div>
        </div>
      )}
      {/* 小红书二维码弹窗 */}
      {showXHSQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setShowXHSQR(false)}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 relative max-w-xs w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-400 hover:text-primary text-2xl" onClick={() => setShowXHSQR(false)}>&times;</button>
            <img src="/images/小红书.png" alt="小红书二维码" className="w-56 h-56 rounded mb-4" />
          </div>
        </div>
      )}
      {/* 微信二维码弹窗 */}
      {showWXQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setShowWXQR(false)}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 relative max-w-xs w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-400 hover:text-primary text-2xl" onClick={() => setShowWXQR(false)}>&times;</button>
            <img src="/images/微信.jpg" alt="微信二维码" className="w-56 h-56 rounded mb-4" />
          </div>
        </div>
      )}
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
                <span>+852 9513 1120</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-primary transition-colors">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>qingbai122@outlook.com</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-primary transition-colors">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>7F, No.345-351, Hennessy Road, Wanchai, Hong Kong</span>
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
              {/* Instagram按钮自定义弹窗，青白主题icon */}
              <button
                className="p-2 rounded-full hover:bg-primary/10 transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => setShowIGQR(true)}
                aria-label="Instagram二维码"
              >
                {/* 青白主题圆形背景+白色Instagram图标 */}
                <span className="inline-block w-6 h-6 rounded-full bg-gradient-to-br from-[#29BB89] to-[#3ED9A7] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <rect width="24" height="24" rx="6" fill="none" />
                    <path d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 7.4a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8zm5.2-7.6a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" fill="#fff" />
                    <rect x="5" y="5" width="14" height="14" rx="5" stroke="#fff" strokeWidth="1.5" fill="none" />
                  </svg>
                </span>
              </button>
              {/* 小红书按钮自定义弹窗，青白主题icon */}
              <button
                className="p-2 rounded-full hover:bg-primary/10 transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => setShowXHSQR(true)}
                aria-label="小红书二维码"
              >
                <span className="inline-block w-6 h-6 rounded-full bg-gradient-to-br from-[#29BB89] to-[#3ED9A7] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <rect width="24" height="24" rx="6" fill="none" />
                    <text x="12" y="17" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">小红书</text>
                  </svg>
                </span>
              </button>
              {/* 微信按钮自定义弹窗，青白主题icon */}
              <button
                className="p-2 rounded-full hover:bg-primary/10 transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => setShowWXQR(true)}
                aria-label="微信二维码"
              >
                <span className="inline-block w-6 h-6 rounded-full bg-gradient-to-br from-[#29BB89] to-[#3ED9A7] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <circle cx="9" cy="15" r="5" fill="#fff" />
                    <circle cx="15" cy="10" r="6" fill="#fff" />
                    <circle cx="8" cy="15" r="0.8" fill="#29BB89" />
                    <circle cx="11" cy="15" r="0.8" fill="#29BB89" />
                    <circle cx="13.5" cy="10" r="0.8" fill="#29BB89" />
                    <circle cx="17" cy="10" r="0.8" fill="#29BB89" />
                  </svg>
                </span>
              </button>
              {/* 其余社交媒体 */}
              {socialLinks.filter(item => item.name !== 'Instagram' && item.name !== 'Xiaohongshu' && item.name !== 'WeChat').map((item) => (
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
              © 2025 青白藝術工作室. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}