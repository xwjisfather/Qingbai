'use client'

import { motion } from 'framer-motion'

const futureVisions = [
  {
    id: '01',
    title: '原創作品',
    description: '青白致力於製作音樂、戲劇、舞蹈等原創作品，以藝術巧思傳達生活感悟、文化視野、哲學思考等主題，並致力於培養推廣新一代傑出創作者，將藝術創作的樂趣及審美帶給大眾',
    color: 'from-[#29BB89] to-[#3ED9A7]'
  },
  {
    id: '02',
    title: '藝術賦能',
    description: '立足職場人文關懷，通過藝術療癒課程、非暴力工作坊、節氣文化沙龍及美學團建活動、系統提升員工藝術感知力與心理韌性，以沉浸式體驗緩解壓力，以文化實踐喚醒創造力，以團隊協作深化價值認同，助力企業在培育複合型人才的同時，打造兼具健康活力與文化厚度的組織生態，實現員工成長與企業發展的雙向賦能。',
    color: 'from-[#F59E0B] to-[#F97316]'
  },
  {
    id: '03',
    title: '回饋社區',
    description: '青白始終堅持服務社會、回饋社區，持續參與及組織環保、義工、社會相關活動，深入服務本地社區及新港人。以文藝活動提升生活幸福指數，共促社會福利發展',
    color: 'from-[#29BB89] to-[#3ED9A7]'
  },
  {
    id: '04',
    title: '文化傳承',
    description: '致力於創建全港最大的藝術愛好者社群，促進不同領域、背景的愛好者間的分享交流、學習成長，提供集傳授、演出、創作、媒體於一體的平臺',
    color: 'from-[#F59E0B] to-[#F97316]'
  },
  {
    id: '05',
    title: '商業共生',
    description: '以創新途徑促進文化藝術活動商業化，促進文藝領域人才長遠發展，同時為香港文化與創意產業發展注入新鮮活力，提升香港軟實力。',
    color: 'from-[#29BB89] to-[#3ED9A7]'
  }
]

const humanCare = [
  {
    icon: '📷',
    title: '致力原創',
    description: '青白致力於製作音樂、戲劇、舞蹈等原創作品，以藝術巧思傳達生活感悟、文化視野、哲學思考等主題，並致力於培養推廣新一代傑出創作者，將藝術創作的樂趣及審美帶給大眾'
  },
  {
    icon: '🏠',
    title: '立足社區',
    description: '青白始終以「服務社會、回饋社區」為運營宗旨，通過「扎根社區服務」「賦能本地機構」「創辦度實踐社會責任」三維度踐行社會責任。例如，持續組織民生關懷項目，以多元文藝活動為載體打造跨領域展演、工作坊及公共文化空間；創建全港包容性最強的藝術平臺，整合「傳授-創作-展演-傳播」全鏈條資源，促進愛好者深度交流與跨界成長，驅動社會文化資本的可持續增值。'
  },
  {
    icon: '📦',
    title: '商業共生',
    description: '以創新途徑促進文化藝術活動商業化，促進文藝領域人才長遠發展，同時為香港文化與創意產業發展注入新鮮活力，提升香港軟實力'
  },
  {
    icon: '💬',
    title: '藝術賦能',
    description: '立足職場人文關懷，通過藝術療癒、非道工坊、節氣文化沙龍及美學團建，系統提升員工藝術感知力與心理韌性，助力企業在培育複合型人才的同時，打造兼具健康活力與文化厚度的組織生態，實現員工成長與企業發展的雙向賦能'
  }
]

export default function FuturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#e6faf4] relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3ED9A7]/20 to-[#29BB89]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-[#29BB89]/20 to-[#3ED9A7]/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* 标题部分 */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 relative inline-block"
            >
              未來展望
              {/* 标题装饰线 */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '120px' }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[#29BB89] to-[#3ED9A7] rounded-full"
              />
            </motion.h1>
          </div>
          
          {/* 五大展望板块 - 使用交错布局 */}
          <div className="relative mb-24">
            {/* 中心装饰元素 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-10 pointer-events-none select-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#29BB89" strokeWidth="1" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="#3ED9A7" strokeWidth="1" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="#29BB89" strokeWidth="1" />
              </svg>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
              {futureVisions.map((vision, index) => {
                // 精简高亮内容
                let desc = vision.description;
                if (vision.id === '01') desc = desc
                  .replace('原創作品', '<span class="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">原創作品</span>')
                  .replace('新一代傑出創作者', '<span class="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">新一代傑出創作者</span>')
                  .replace('藝術創作的樂趣及審美', '<span class="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">藝術創作的樂趣及審美</span>');
                if (vision.id === '02') desc = desc
                  .replace('藝術賦能', '<span class="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">藝術賦能</span>')
                  .replace('藝術療癒課程', '<span class="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">藝術療癒課程</span>')
                  .replace('雙向賦能', '<span class="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">雙向賦能</span>');
                if (vision.id === '03') desc = desc
                  .replace('回饋社區', '<span class="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">回饋社區</span>')
                  .replace('文藝活動', '<span class="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">文藝活動</span>')
                  .replace('幸福指數', '<span class="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">幸福指數</span>');
                if (vision.id === '04') desc = desc
                  .replace('文化傳承', '<span class="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">文化傳承</span>')
                  .replace('藝術愛好者社群', '<span class="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">藝術愛好者社群</span>')
                  .replace('平臺', '<span class="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">平臺</span>');
                if (vision.id === '05') desc = desc
                  .replace('商業共生', '<span class="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">商業共生</span>')
                  .replace('文化藝術活動商業化', '<span class="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">文化藝術活動商業化</span>')
                  .replace('軟實力', '<span class="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">軟實力</span>');
                return (
                  <motion.div
                    key={vision.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 h-full relative overflow-visible flex flex-col items-center gap-6 border border-[#e6faf4]">
                      {/* 编号圆点 */}
                      <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br ${vision.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-white z-20`}>
                        {vision.id}
                      </div>
                      {/* 灵性叶片装饰 */}
                      <div className="absolute -top-10 right-6 rotate-12 opacity-30">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="20" rx="16" ry="6" fill="#3ED9A7" fillOpacity="0.18"/></svg>
                      </div>
                      {/* 标题 */}
                      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-2 text-center tracking-wide relative">
                        {vision.title}
                        <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#29BB89]/50 to-transparent`} />
                      </h3>
                      {/* 渐变分割线 */}
                      <div className={`w-16 h-1 rounded-full bg-gradient-to-r ${vision.color} mx-auto mb-2`} />
                      {/* 描述重点词高亮 */}
                      <p className="text-gray-600 leading-relaxed text-base text-center px-2" style={{letterSpacing:'0.01em',lineHeight:'1.8'}}>
                        {desc.split('，').map((part, i, arr) => (
                          <span key={i} dangerouslySetInnerHTML={{__html: part}} />
                        ))}
                      </p>
                      {/* 底部灵性圆点 */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-[#29BB89] to-[#3ED9A7] rounded-full opacity-40" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
          
          {/* 人文关怀板块 - 已注释 */}
          {/* 
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">人文關懷</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {humanCare.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-[#e6faf4] to-[#f0fdf9] rounded-2xl p-8 relative overflow-hidden group"
                >
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/50 rounded-xl flex items-center justify-center text-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#29BB89] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed pr-20">{item.description}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#29BB89] to-[#3ED9A7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          */}
          
          {/* 文艺发展板块 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center py-20 bg-white rounded-3xl shadow-xl relative overflow-visible mt-20"
          >
            {/* 装饰波浪 */}
            <div className="absolute top-0 left-0 right-0">
              <svg viewBox="0 0 1200 100" className="w-full h-16 fill-[#e6faf4]">
                <path d="M0,50 Q300,0 600,50 T1200,50 L1200,0 L0,0 Z" />
              </svg>
            </div>
            {/* 灵性叶片装饰 */}
            <div className="absolute top-8 left-12 rotate-[-8deg] opacity-20">
              <svg width="60" height="30" viewBox="0 0 60 30" fill="none"><ellipse cx="30" cy="15" rx="24" ry="8" fill="#29BB89" fillOpacity="0.13"/></svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 relative z-10 tracking-wide inline-block">
              文藝發展
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#29BB89] to-[#3ED9A7] rounded-full" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto px-8 leading-relaxed relative z-10" style={{letterSpacing:'0.01em',lineHeight:'2'}}>
              <span className="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-2 py-1 rounded">青白藝術文化有限公司</span>將持續深耕香港文化土壤，以<span className="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">創新</span>為驅動，以<span className="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">傳承</span>為使命，致力打造一個綜合性藝術平臺。我們相信，通過不懈努力，定能為香港文化藝術事業注入新的活力，為市民創造更加豐富多彩的<span className="text-[#29BB89] font-bold bg-gradient-to-br from-[#e6faf4] to-[#3ED9A7]/10 px-1 rounded">精神文化生活</span>。
            </p>
            {/* 底部装饰 */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <svg width="60" height="60" viewBox="0 0 60 60" className="text-[#29BB89]/20">
                <circle cx="30" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="30" cy="30" r="15" fill="currentColor" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 