// src/components/home/About.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-white to-secondary/50" />
      <div className="absolute inset-0 bg-chinese-texture opacity-5" />
      
      {/* 装饰元素 */}
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
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#29BB89] to-[#3ED9A7] bg-clip-text text-transparent">
            關於我們
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            一群充滿熱情的舞者，用心傳遞中國傳統文化之美
          </p>
        </motion.div>

        {/* 主要内容 */}
        <div className="space-y-24">
          {/* 第一部分 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/Jiangjunao.jpg"
                  alt="青白藝術工作室表演照片"
                  width={600}
                  height={400}
                  className="object-cover w-full aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -z-10 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">專業的藝術團隊</h3>
              <p className="text-gray-600 leading-relaxed">
                青白藝術工作室匯聚了一群充滿熱情和才華的舞者。我們不僅致力於為觀眾呈現精彩的演出，更重視每一位成員的藝術成長。在這裡，專業與熱情相輔相成，每一次排練都是一次藝術的昇華。
              </p>
            </div>
          </motion.div>

          {/* 第二部分 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 lg:order-2">
              <h3 className="text-3xl font-bold text-primary">快樂的大家庭</h3>
              <p className="text-gray-600 leading-relaxed">
                在青白，我們不僅是同事，更是一個溫暖的大家庭。除了日常的排練和演出，我們經常組織各種團建活動，一起出遊踏青、享受美食、分享生活。這些歡樂的時光讓我們的情誼更加深厚，也為艱苦的訓練增添了許多歡笑。
              </p>
            </div>
            <div className="relative group lg:order-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/Halloween.jpg"
                  alt="青白藝術工作室團建照片"
                  width={600}
                  height={400}
                  className="object-cover w-full aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -z-10 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>
          </motion.div>

          {/* 底部装饰 */}
          <div className="relative mt-16 pt-16 text-center">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 italic"
            >
              &ldquo;舞動青春，綻放藝術之美&rdquo;
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
