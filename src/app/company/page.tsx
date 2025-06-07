'use client'

import { motion } from 'framer-motion'

const timeline = [
  {
    date: '2024.10',
    title: '青白工作室誕生',
    desc: '首批活動：將軍澳聖誕匯演、中國文化體驗市集、堅尼地城萬聖節路演...'
  },
  {
    date: '2024.11',
    title: '持續壯大',
    desc: '舞蹈工作坊正式開始，華潤隆地灣景匯路演'
  },
  {
    date: '2024.12',
    title: '首批原創舞台亮相',
    desc: '港大LSR國際學術會議受邀嘉賓，原創歌舞劇《LaLaLand》首演，華潤隆地灣景匯聖誕節目承辦'
  },
  {
    date: '2025.01-02',
    title: '正式註冊公司 業務管理初見雛形',
    desc: '情人節東岸公園主題路演、港大學公益舞蹈公開課、OASA教育機構週年晚會'
  },
  {
    date: '2025.03',
    title: '發展進行中',
    desc: '方大同歌友會協辦單位，開創創新舞種及音樂類工作坊'
  },
  {
    date: '2025.04',
    title: '業務逐步拓展',
    desc: '青白liveband成立，正式進駐蘭桂坊'
  },
  {
    date: '未來',
    title: '繼續孕育無限可能',
    desc: ''
  }
]

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#e6faf4] relative overflow-x-hidden">
      {/* 顶部渐变圆点装饰 */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#3ED9A7]/30 to-[#29BB89]/10 rounded-full blur-2xl -z-10" />
      <div className="absolute top-32 right-0 w-40 h-40 bg-gradient-to-br from-[#29BB89]/20 to-[#3ED9A7]/0 rounded-full blur-2xl -z-10" />
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-24">
        {/* 公司简介 + CARE模型 */}
        <section className="bg-white/90 rounded-3xl shadow-xl px-8 py-12 md:py-16 flex flex-col md:flex-row gap-12 relative overflow-hidden">
          {/* 渐变圆点 */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#3ED9A7]/30 to-[#29BB89]/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-[#29BB89]/20 to-[#3ED9A7]/0 rounded-full blur-2xl" />
          
          {/* 装饰性叶片 - 左上角 */}
          <div className="absolute top-8 left-8 opacity-10">
            <svg width="60" height="80" viewBox="0 0 60 80">
              <path d="M30 0C30 0 60 40 30 80C0 40 30 0 30 0Z" fill="#29BB89" />
            </svg>
          </div>
          
          {/* 装饰性叶片 - 右下角 */}
          <div className="absolute bottom-8 right-8 opacity-10 rotate-180">
            <svg width="60" height="80" viewBox="0 0 60 80">
              <path d="M30 0C30 0 60 40 30 80C0 40 30 0 30 0Z" fill="#3ED9A7" />
            </svg>
          </div>
          
          <div className="flex-1 text-lg text-gray-700 leading-relaxed space-y-4 z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-primary mb-6 relative"
            >
              公司簡介
              {/* 标题装饰线 */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '60px' }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#29BB89] to-[#3ED9A7] rounded-full"
              />
            </motion.h1>
            
            {/* 引号装饰 */}
            <div className="relative">
              <div className="absolute -left-4 -top-2 text-6xl text-[#29BB89]/20 font-serif">&ldquo;</div>
              <p className="relative pl-8">
                &ldquo;青白&rdquo;全稱名叫 <b className="text-primary bg-gradient-to-r from-[#29BB89]/5 to-[#3ED9A7]/5 px-2 py-1 rounded">&ldquo;青白藝術文化有限公司&rdquo;</b>，由兩個熱愛傳統文化與藝術的香港大學畢業生於2024年創辦。有核心成員有二十餘人，年齡跨越二十至四十歲，從事各行各業，現皆常駐香港。我們始終對藝術文化的熱愛與激情，集傳承、創新、公益及社交屬性為一體，以中華文化為紐帶推動社區共融，通過多樣化及普惠性的特色活動，激發市民參與文化藝術的傳承與創新，從而最終組建一個多元共融的大家庭。
              </p>
              <div className="absolute -right-4 -bottom-2 text-6xl text-[#29BB89]/20 font-serif rotate-180">&rdquo;</div>
            </div>
          </div>
          
          {/* CARE模型 */}
          <div className="flex-1 flex flex-col items-center z-10 relative">
            {/* 装饰性圆环 */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#29BB89]/10 rounded-full"></div>
            <div className="absolute bottom-0 -left-4 w-16 h-16 border-2 border-[#3ED9A7]/10 rounded-full"></div>
            
            <h2 className="text-2xl font-bold mb-4 text-center text-primary relative">
              C.A.R.E MODEL
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-[#29BB89]/50 to-transparent"></div>
            </h2>
            <div className="grid grid-cols-2 gap-2 mb-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 flex items-center justify-center bg-primary text-white text-2xl font-bold rounded-xl shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <span className="relative">C</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 flex items-center justify-center bg-[#e6faf4] text-2xl font-bold rounded-xl shadow relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#29BB89]/10 to-transparent"></div>
                <span className="relative">A</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 flex items-center justify-center bg-[#e6faf4] text-2xl font-bold rounded-xl shadow relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3ED9A7]/10 to-transparent"></div>
                <span className="relative">R</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 flex items-center justify-center bg-primary text-white text-2xl font-bold rounded-xl shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <span className="relative">E</span>
              </motion.div>
            </div>
            <div className="grid grid-cols-2 gap-6 w-full">
              <div>
                <div className="font-bold text-lg text-gray-700 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#29BB89] rounded-full"></div>
                  Cultural Continuity
                </div>
                <div className="text-gray-500 mb-2 ml-4">文化傳承</div>
                <div className="font-bold text-lg text-primary mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3ED9A7] rounded-full"></div> Responsible Altruism
                </div>
                <div className="text-gray-500 ml-4">責任公益</div>
              </div>
              <div>
                <div className="font-bold text-lg text-primary flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3ED9A7] rounded-full"></div>
                  Artistic Revolution
                </div>
                <div className="text-primary mb-2 ml-4">藝術創新</div>
                <div className="font-bold text-lg text-gray-700 mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#29BB89] rounded-full"></div>
                  Engaged Community
                </div>
                <div className="text-gray-500 ml-4">社交參與</div>
              </div>
            </div>
          </div>
        </section>

        {/* 分割线 */}
        <div className="w-full h-1 bg-gradient-to-r from-[#29BB89]/10 via-[#3ED9A7]/30 to-[#29BB89]/10 rounded-full my-8" />

        {/* 发展节点时间线 */}
        <section>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
          >
            公司簡介 — 發展節點
          </motion.h2>
          
          {/* 桌面端横向时间轴 */}
          <div className="hidden md:block w-full overflow-x-auto py-8">
            <div className="relative min-w-[1300px] mx-auto px-32" style={{height: '500px'}}>
              {/* 主轴 */}
              <div className="absolute left-20 right-20 top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-[#29BB89] via-[#3ED9A7] to-[#29BB89] rounded-full" />
              {/* 主轴端点装饰 */}
              <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <polygon points="0,7 0,13 15,10" fill="#29BB89" />
                </svg>
              </div>
              
              {/* 节点容器 */}
              <div className="relative w-full h-full px-20">
                {timeline.map((item, idx) => {
                  const isTop = idx % 2 === 0;
                  const totalNodes = timeline.length;
                  const nodeSpacing = 100 / (totalNodes - 1);
                  const leftPosition = idx * nodeSpacing;
                  
                  return (
                    <div 
                      key={item.date} 
                      className="absolute"
                      style={{
                        left: `${leftPosition}%`,
                        top: '50%',
                        transform: 'translateX(-50%)'
                      }}
                    >
                      {/* 主轴圆点 */}
                      <div className="absolute w-3 h-3 bg-gradient-to-br from-[#29BB89] to-[#3ED9A7] rounded-full border-2 border-white shadow-lg" 
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 10
                        }}
                      />
                      
                      {isTop ? (
                        // 上方节点 - 只有上方装饰
                        <div className="absolute" style={{bottom: '20px', left: '50%', transform: 'translateX(-50%)'}}>
                          {/* 连接线 - 从节点到叶子 */}
                          <div className="absolute w-0.5 bg-[#29BB89] opacity-50"
                            style={{
                              height: '40px',
                              bottom: '-40px',
                              left: '50%',
                              transform: 'translateX(-50%)'
                            }}
                          />
                          
                          {/* 叶片装饰 */}
                          <div className="absolute" style={{bottom: '-60px', left: '50%', transform: 'translateX(-50%)'}}>
                            <svg width="24" height="32" viewBox="0 0 24 32">
                              <path d="M12 0C12 0 24 16 12 32C0 16 12 0 12 0Z" 
                                fill="url(#leafGradientTop)" 
                                fillOpacity="0.8" 
                              />
                              <defs>
                                <linearGradient id="leafGradientTop" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#3ED9A7" />
                                  <stop offset="100%" stopColor="#29BB89" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          
                          {/* 内容卡片 */}
                          <div className="bg-white shadow-xl rounded-2xl p-4 border border-[#29BB89]/10 min-w-[180px] max-w-[220px]">
                            <div className="text-primary font-bold text-sm mb-1">{item.date}</div>
                            <div className="text-[#29BB89] font-semibold text-xs mb-2">{item.title}</div>
                            <div className="text-gray-600 text-[11px] leading-relaxed">{item.desc}</div>
                          </div>
                        </div>
                      ) : (
                        // 下方节点 - 只有下方装饰
                        <div className="absolute" style={{top: '20px', left: '50%', transform: 'translateX(-50%)'}}>
                          {/* 连接线 - 从节点到叶子 */}
                          <div className="absolute w-0.5 bg-[#29BB89] opacity-50"
                            style={{
                              height: '40px',
                              top: '-40px',
                              left: '50%',
                              transform: 'translateX(-50%)'
                            }}
                          />
                          
                          {/* 叶片装饰 */}
                          <div className="absolute" style={{top: '-60px', left: '50%', transform: 'translateX(-50%)'}}>
                            <svg width="24" height="32" viewBox="0 0 24 32" style={{transform: 'rotate(180deg)'}}>
                              <path d="M12 0C12 0 24 16 12 32C0 16 12 0 12 0Z" 
                                fill="url(#leafGradientBottom)" 
                                fillOpacity="0.8" 
                              />
                              <defs>
                                <linearGradient id="leafGradientBottom" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#29BB89" />
                                  <stop offset="100%" stopColor="#3ED9A7" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          
                          {/* 内容卡片 */}
                          <div className="bg-white shadow-xl rounded-2xl p-4 border border-[#29BB89]/10 min-w-[180px] max-w-[220px]">
                            <div className="text-primary font-bold text-sm mb-1">{item.date}</div>
                            <div className="text-[#29BB89] font-semibold text-xs mb-2">{item.title}</div>
                            <div className="text-gray-600 text-[11px] leading-relaxed">{item.desc}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* 移动端竖向时间轴 */}
          <div className="md:hidden w-full px-4">
            <div className="relative">
              {/* 竖向主轴 */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#29BB89] via-[#3ED9A7] to-[#29BB89]" />
              
              {/* 节点列表 */}
              <div className="space-y-8 relative">
                {timeline.map((item) => (
                  <div key={item.date} className="relative flex items-center">
                    {/* 节点圆点 */}
                    <div className="absolute left-8 w-3 h-3 bg-gradient-to-br from-[#29BB89] to-[#3ED9A7] rounded-full border-2 border-white shadow-lg transform -translate-x-1/2" />
                    
                    {/* 叶片装饰 */}
                    <div className="absolute left-12 transform">
                      <svg width="20" height="24" viewBox="0 0 20 24">
                        <defs>
                          <linearGradient id="leafGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3ED9A7" />
                            <stop offset="100%" stopColor="#29BB89" />
                          </linearGradient>
                        </defs>
                        <path d="M10 0C10 0 20 12 10 24C0 12 10 0 10 0Z" 
                          fill="url(#leafGradientMobile)" 
                          fillOpacity="0.6" 
                          style={{transform: 'rotate(90deg)'}}
                        />
                      </svg>
                    </div>
                    
                    {/* 内容卡片 */}
                    <div className="ml-20 bg-white shadow-lg rounded-xl p-4 border border-[#29BB89]/10">
                      <div className="text-primary font-bold text-sm mb-1">{item.date}</div>
                      <div className="text-[#29BB89] font-semibold text-xs mb-2">{item.title}</div>
                      <div className="text-gray-600 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 分割线 */}
        <div className="w-full h-1 bg-gradient-to-r from-[#29BB89]/10 via-[#3ED9A7]/30 to-[#29BB89]/10 rounded-full my-8" />

        {/* 名字的由来 */}
        <section className="bg-white/90 rounded-3xl shadow-xl px-8 py-12 md:py-16 relative overflow-hidden">
          {/* 渐变圆点 */}
          <div className="absolute -top-10 right-0 w-32 h-32 bg-gradient-to-br from-[#3ED9A7]/30 to-[#29BB89]/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#29BB89]/20 to-[#3ED9A7]/0 rounded-full blur-2xl" />
          
          {/* 装饰性波浪线 - 顶部 */}
          <div className="absolute top-0 left-0 right-0 h-1 opacity-10">
            <svg width="100%" height="4" preserveAspectRatio="none">
              <path d="M0,2 Q250,0 500,2 T1000,2 L1000,4 L0,4 Z" fill="url(#waveGradient)" />
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#29BB89" />
                  <stop offset="50%" stopColor="#3ED9A7" />
                  <stop offset="100%" stopColor="#29BB89" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center relative"
          >
            <span className="relative">
              公司簡介 — 名字的由來
              {/* 标题装饰 */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#29BB89]/30">
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                </svg>
              </div>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#3ED9A7]/30">
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                </svg>
              </div>
            </span>
          </motion.h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 mx-auto space-y-6">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <span className="absolute -left-2 top-0 text-4xl text-[#29BB89]/10 font-serif">&ldquo;</span>
              &ldquo;青白&rdquo;二字取自《诗经·小雅·青蝇》中的&ldquo;青蝇之飞，不过数步；青蝇之止，不过数尺。&rdquo;
              <span className="text-primary font-semibold">青蛇與白蛇</span>，一動一靜，一熾烈一沉穩，
              正如兩位創始人截然不同的性格，卻因對舞蹈的熱忱與信念，成就了這段藝術之緣。
              她們以肢體詮釋傳統故事中的「人與妖」之界，也讓「青白」成為跨越差異、包容共生的象徵。
              <span className="absolute -right-2 bottom-0 text-4xl text-[#29BB89]/10 font-serif">&rdquo;</span>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative pl-8 border-l-2 border-[#29BB89]/20"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-[#29BB89] rounded-full -ml-[5px]"></div>
              <p>
                「青」取自宋代影青瓷的靈動釉色，如水波流轉，寓意對傳統技藝的傳承與創新；
                「白」如素瓷般純粹溫潤，代表藝術創作中不變的初心與真誠。
                <span className="inline-block mx-2 text-primary">青白相映</span>，
                既是對東方美學的致敬，也承載著我們對「藝術無界」的堅持——無論論背景、身份，
                只要懷抱熱愛，皆能在創作中尋得共鳴。
              </p>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              工作室以「青白」為名，更蘊含兩層深意：一為
              <span className="mx-1 px-2 py-1 bg-gradient-to-r from-[#29BB89]/10 to-[#3ED9A7]/10 rounded text-primary font-semibold">「待人如青白」</span>，
              以真誠透明的態度連結創作者與社會；二為
              <span className="mx-1 px-2 py-1 bg-gradient-to-r from-[#3ED9A7]/10 to-[#29BB89]/10 rounded text-primary font-semibold">「以藝術普惠為志」</span>，
              致力讓傳統文化與當代美學走進大眾生活，成為滋養城市的無形力量。
              我們相信，藝術不僅是技藝的展現，更是人與人、過去與未來對話的橋樑。
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative text-center italic text-gray-600 pt-4"
            >
              {/* 装饰性分隔线 */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 flex items-center gap-2">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#29BB89]/30"></div>
                <svg width="16" height="16" viewBox="0 0 16 16" className="text-[#29BB89]/40">
                  <path d="M8 0C8 0 16 8 8 16C0 8 8 0 8 0Z" fill="currentColor" />
                </svg>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#3ED9A7]/30"></div>
              </div>
              <span className="block pt-6">
                從雙人舞臺上的青白交纏，到今日匯聚多元藝術工作者的平臺，我們始終銘記：
                唯有包容差異、堅守初心，方能讓文化傳承生生不息。
                誠邀各界夥伴攜手，共築屬於這時代的<span className="text-primary font-bold">「青白之美」</span>。
              </span>
            </motion.p>
          </div>
          
          {/* 底部装饰 */}
          <div className="absolute bottom-4 right-4 opacity-10">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="30" fill="none" stroke="#29BB89" strokeWidth="1" />
              <circle cx="40" cy="40" r="20" fill="none" stroke="#3ED9A7" strokeWidth="1" />
              <circle cx="40" cy="40" r="10" fill="#29BB89" opacity="0.5" />
            </svg>
          </div>
        </section>
      </div>
    </div>
  )
} 