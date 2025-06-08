// src/components/home/CoursesList.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const courses = [
  {
    id: 1,
    name: "舞蹈課程",
    description: "中國舞基礎訓練，身韻培養",
    features: ["基本功训练", "身韵培养", "剧目排练"],
    image: "/images/dance.jpg",
    gradient: "from-[#29BB89] to-[#3ED9A7]",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M9.5 3C4.8 3 1 6.8 1 11.5c0 2.8 1.4 5.3 3.5 6.8 1.2.9 2.7 1.4 4.3 1.4" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 13.5c2.5-1.5 4-4 4-6.8C19 3.8 16.2 1 12.5 1" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 15c-.8-.5-1.8-.8-2.8-.8-3 0-5.5 2.5-5.5 5.5" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 2,
    name: "演唱課程",
    description: "聲樂基礎，歌唱技巧",
    features: ["发声技巧", "音乐理论", "舞台表演"],
    image: "/images/singing.jpg",
    gradient: "from-[#29BB89] to-[#3ED9A7]",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 18.5V3" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 14.5a3 3 0 0 0 6 0v-3a3 3 0 0 0-6 0v3z" strokeWidth="2"/>
        <path d="M19 14.5a7 7 0 0 1-14 0" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 3,
    name: "樂器課程",
    description: "多種樂器選擇，專業指導",
    features: ["乐理基础", "演奏技巧", "乐器保养"],
    image: "/images/instrument.jpg",
    gradient: "from-[#29BB89] to-[#3ED9A7]",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M9 18V5l12-2v13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 18a3 3 0 1 0 6 0" strokeWidth="2"/>
        <path d="M18 16a3 3 0 1 0 6 0" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: 4,
    name: "話劇課程",
    description: "表演技巧，舞台表現",
    features: ["表演基础", "台词训练", "角色塑造"],
    image: "/images/drama.jpg",
    gradient: "from-[#29BB89] to-[#3ED9A7]",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 7v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" strokeWidth="2"/>
        <path d="M16.5 2H7.5l-1 5h11l-1-5z" strokeWidth="2"/>
        <path d="M12 12v3" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="10" r="1"/>
      </svg>
    )
  }
]

export default function CoursesList() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#29BB89]/5 to-[#3ED9A7]/10" />
      <div className="absolute inset-0 bg-snake-pattern opacity-5" />
      <div className="absolute inset-0 bg-chinese-texture opacity-10" />
      
      {/* 装饰圆圈 */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#29BB89]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#3ED9A7]/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* 标题部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">探索藝術之旅</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            <span className="bg-gradient-to-r from-[#29BB89] to-[#3ED9A7] bg-clip-text text-transparent">
              精選課程
            </span>
          </h2>
          {/* 装饰线 */}
          <div className="w-24 h-1 mx-auto mt-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
          </div>
        </motion.div>

        {/* 课程列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl 
                            border border-primary/10 overflow-hidden
                            transition-all duration-500
                            hover:shadow-2xl hover:bg-white/95">
                {/* 图片部分 */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* 渐变遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* 图标 */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full 
                                bg-white/90 backdrop-blur-sm flex items-center justify-center
                                text-primary transform group-hover:scale-110 transition-transform">
                    {course.icon}
                  </div>
                </div>

                {/* 内容部分 */}
                <div className="p-6 relative">
                  {/* 装饰背景 */}
                  <div className={`absolute top-0 right-0 w-32 h-32 
                                bg-gradient-to-br ${course.gradient}
                                opacity-5 rounded-full blur-2xl
                                group-hover:opacity-10 transition-opacity`} />
                  
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#29BB89] to-[#3ED9A7] 
                               bg-clip-text text-transparent">
                    {course.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  {/* 特色列表 */}
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* 了解更多按钮 */}
                  {/**
                  <Link 
                    href={`/courses/${course.id}`}
                    className="mt-6 inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                  >
                    了解更多
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                         viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                  */}

                  {/* 装饰边框 */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}