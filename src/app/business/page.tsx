'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const businessCategories = [
  {
    id: 'cultural',
    title: 'Cultural Continuity',
    subtitle: '文化傳承',
    color: 'from-[#29BB89] to-[#3ED9A7]',
    activities: [
      {
        date: '2024.10.28',
        title: '將軍澳藍塘匯中國文化體驗市集',
        description: '與中外友人一起感受中華文化的魅力',
        image: '/images/2024 10.28 将军澳.JPG'
      },
      {
        date: '2024.12.4',
        title: '港大LSR國際學術會議',
        description: '為研究太空垃圾的全球學者們帶去了一場別開生面的中國風表演',
        image: '/images/2024 12.4 学术会议.JPG'
      },
      {
        date: '2025.2.21',
        title: 'OASA教育機構週年晚會',
        description: '當國風遇見太空，碰撞出別具一格的火花，為在場各國嘉賓帶來一場精彩的中華文化盛宴。',
        image: '/images/2025 2.21 中环年会.jpg'
      }
    ]
  },
  {
    id: 'artistic',
    title: 'Artistic Revolution',
    subtitle: '藝術創新',
    color: 'from-[#F59E0B] to-[#F97316]',
    activities: [
      {
        date: '2024.11',
        title: '中國舞workshop開課',
        description: '開創學+演的教學模式，舞種豐富，課程吸引30+學員參加\n旗袍舞《多情種》/現代舞《大魚海棠》/古典舞《醉平江》',
        image: '/images/2025 2.16 公开课.jpg'
      },
      {
        date: '2024.12.7',
        title: '原創歌舞劇《LaLaLand》首演順利',
        description: '舞台閃耀著凝結年輕的力量，一場觀眾反響熱烈的演出圓滿落幕。',
        image: '/images/2024 12.7 lalaland.jpg'
      },
      {
        date: '2025.3',
        title: '劇目基訓課再開啟',
        description: '業務升級，教師團隊擴大，開創國風爵士，聲樂課等特色課程教學，吸引30+學員參加',
        image: '/images/2025 国风爵士.jpg'
      }
    ]
  },
  {
    id: 'altruism',
    title: 'Responsible Altruism',
    subtitle: '責任公益',
    color: 'from-[#29BB89] to-[#3ED9A7]',
    activities: [
      {
        date: '2024.12.12',
        title: '灣景匯Christmas Vibes聖誕風主題晚會',
        description: '首次承辦的大型文藝活動，20+節目編排與串聯，把節日氣氛渲染到極致。',
        image: '/images/2024 12.12 会展圣诞show.JPG'
      },
      {
        date: '2024.12.14-15',
        title: '藍塘匯聖誕風主題路演',
        description: '聖誕週路演活動圓滿收官，吸引了國內外友人的關注，傳遞了極具藝術特色的年輕與活力。',
        image: '/images/2024 12.15 蓝塘圣诞show.JPG'
      },
      {
        date: '2025.2.15',
        title: '香港大學公益舞蹈公開課',
        description: '強身健體，修養身心，傳播中華傳統舞蹈文化、傣族文化、漢唐文化等。',
        image: '/images/2025-02-16 公开课.jpg'
      },
      {
        date: '2025.3.15',
        title: '方大同歌友會協辦組織',
        description: '',
        image: '/images/2025 0315方大同歌友会.jpg'
      }
    ]
  },
  {
    id: 'community',
    title: 'Engaged Community',
    subtitle: '社交參與',
    color: 'from-[#F59E0B] to-[#F97316]',
    activities: [
      {
        date: '2024.10.31',
        title: '堅尼地城萬聖節路演',
        description: '帶領香港的小朋友們一起沉浸於音樂與舞蹈的世界，感動的瞬間成為永恆的回憶',
        image: '/images/2024 10.31 坚尼地城.jpg'
      },
      {
        date: '2024.11.15/22',
        title: '華潤隆地灣景匯corner spark路演',
        description: '在香港街頭的悅動時刻，讓匆匆趕路的行人感受一刻藝術的魅力',
        image: '/images/2024 11月华润路演.jpg'
      },
      {
        date: '2025.2.14',
        title: '情人節東岸公園特別主題路演',
        description: '在海風中集結浪漫，與路人一起分享青春無限的激情瞬間',
        image: '/images/2025-02-14 情人节.jpg'
      },
      {
        date: '2025.4.11',
        title: 'Bamboo酒吧駐唱',
        description: '青白liveband成立，入駐蘭桂坊，把音樂和快樂帶到最繁華熱鬧的街市，給更多朋友帶去驚喜。',
        image: '/images/2025 4.11 bamboo.jpg'
      }
    ]
  }
]

export default function BusinessPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [previewImg, setPreviewImg] = useState<string|null>(null)
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#e6faf4] relative overflow-hidden">
      {/* 图片预览弹窗 */}
      {previewImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setPreviewImg(null)}>
          <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white/80 hover:text-primary text-3xl z-10" onClick={() => setPreviewImg(null)}>&times;</button>
            <div className="relative w-full h-64 overflow-hidden rounded-lg">
              <Image
                src={previewImg}
                alt="Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#3ED9A7]/20 to-[#29BB89]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-[#F59E0B]/20 to-[#F97316]/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* 标题部分 */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              過往業務
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-1 bg-gradient-to-r from-[#29BB89] to-[#3ED9A7] rounded-full mx-auto mb-8"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              回顧青白的成長歷程，每一次活動都是我們與社區共同創造的美好記憶
            </p>
          </div>
          
          {/* 分类筛选按钮 */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#29BB89] to-[#3ED9A7] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:shadow-md'
              }`}
            >
              全部展示
            </motion.button>
            {businessCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white text-gray-600 hover:shadow-md'
                }`}
              >
                {category.subtitle}
              </motion.button>
            ))}
          </div>
          
          {/* 活动展示区域 */}
          <div className="space-y-24">
            {businessCategories
              .filter(cat => selectedCategory === 'all' || selectedCategory === cat.id)
              .map((category, catIndex) => (
                <motion.section
                  key={category.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: catIndex * 0.2 }}
                  className="relative"
                >
                  {/* 分类标题 */}
                  <div className="flex items-center mb-12">
                    <div className="flex-1">
                      <h2 className="text-4xl font-bold text-gray-800 mb-2">{category.title}</h2>
                      <p className="text-2xl text-gray-600">{category.subtitle}</p>
                    </div>
                    <div className={`w-24 h-1 bg-gradient-to-r ${category.color} rounded-full`} />
                  </div>
                  
                  {/* 活动卡片 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.activities.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group"
                      >
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full hover:shadow-2xl transition-all duration-300">
                          {/* 实际图片展示 */}
                          <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden cursor-pointer" onClick={() => setPreviewImg(activity.image)}>
                            <div className="relative w-full h-full">
                              <Image
                                src={activity.image}
                                alt={activity.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            {/* 日期标签 */}
                            <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${category.color} text-white text-sm font-medium rounded-full shadow-lg`}>
                              {activity.date}
                            </div>
                          </div>
                          {/* 内容区域 */}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                              {activity.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                              {activity.description}
                            </p>
                          </div>
                          {/* 底部装饰线 */}
                          <div className={`h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              ))}
          </div>
          
          {/* 底部统计 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-24 text-center"
          >
            <div className="bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden">
              {/* 装饰元素 */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#29BB89]/10 to-[#3ED9A7]/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-[#F59E0B]/10 to-[#F97316]/5 rounded-full blur-2xl" />
              
              <h3 className="text-3xl font-bold text-gray-800 mb-8 relative z-10">我們的足跡</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-gray-600">精彩活動</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-gray-600">參與人次</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4</div>
                  <div className="text-gray-600">核心領域</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">∞</div>
                  <div className="text-gray-600">無限可能</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 