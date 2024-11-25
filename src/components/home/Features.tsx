// src/components/home/Features.tsx
'use client'
import { motion } from 'framer-motion'

const features = [
  {
    title: "演出活動",
    description: "專業品質，精彩絕倫",
    items: [
      "多種形式路演",
      "承接政府/企業/民間商演",
      "提供年會/晚會節目編排",
      "量身定制表演方案"
    ],
    gradient: "from-[#29BB89] to-[#3ED9A7]",
    // 使用优雅的SVG图标替代emoji
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
              className="stroke-current" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 14C8.5 15 10 16 12 16C14 16 15.5 15 16 14" 
              className="stroke-current" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 9H9.01M15 9H15.01" 
              className="stroke-current" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "教学活動",
    description: "專業指導，因材施教",
    items: [
      "中國舞基訓/身韻/劇目",
      "各類workshop",
      "新手零基礎友好",
      "完整學完直接上台表演"
    ],
    gradient: "from-[#29BB89] to-[#3ED9A7]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M20 12V4H4V20H12" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 18C18 19.1046 17.1046 20 16 20C14.8954 20 14 19.1046 14 18C14 16.8954 14.8954 16 16 16C17.1046 16 18 16.8954 18 18Z" 
              className="stroke-current" strokeWidth="2"/>
      </svg>
    )
  }
]

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#29BB89]/5 to-[#3ED9A7]/10" />
      <div className="absolute inset-0 bg-snake-pattern opacity-5" />
      <div className="absolute inset-0 bg-chinese-texture opacity-10" />
      
      {/* 云纹装饰 */}
      <div className="absolute top-0 left-0 w-full h-20 bg-[url('/images/cloud-pattern.svg')] opacity-10" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-[url('/images/cloud-pattern.svg')] opacity-10 transform rotate-180" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* 标题部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#29BB89] to-[#3ED9A7] bg-clip-text text-transparent">
              我們的特色
            </span>
            {/* 标题装饰 */}
            <div className="absolute left-1/2 -translate-x-1/2 w-24 h-1 mt-2">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
            </div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl 
                            border border-primary/10 h-full
                            hover:shadow-2xl hover:bg-white/95
                            transition-all duration-500
                            relative overflow-hidden
                            p-8 lg:p-10">
                {/* 背景装饰 */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* 图标 */}
                <div className="relative mb-8">
                  <div className="relative z-10 w-16 h-16 flex items-center justify-center
                                bg-gradient-to-br from-[#29BB89] to-[#3ED9A7]
                                rounded-2xl shadow-lg transform group-hover:scale-110 
                                transition-transform duration-500 text-white">
                    {feature.icon}
                  </div>
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl transform group-hover:scale-150 transition-transform duration-500" />
                </div>

                {/* 标题和描述 */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-[#29BB89] to-[#3ED9A7] bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-8">{feature.description}</p>
                </div>

                {/* 列表项 */}
                <ul className="space-y-4 relative z-10">
                  {feature.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <span className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-[#29BB89] to-[#3ED9A7]
                                     group-hover/item:scale-150 transition-all duration-300" />
                      <span className="text-gray-700 group-hover/item:text-primary transition-colors duration-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* 边框装饰 */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}