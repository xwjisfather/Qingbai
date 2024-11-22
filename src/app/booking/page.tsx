// src/app/booking/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { CreateBookingInput } from '@/types/booking'

// 添加类型定义
interface BookingFormData {
  courseType: string;
  name: string;
  phone: string;
  email: string;
  notes?: string;
}

export default function Page() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState<BookingFormData>({
    courseType: '',
    name: '',
    phone: '',
    email: '',
    notes: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  // 活动数据
  const activities = [
    {
      title: "青蛇白蛇藝術體驗",
      description: "探索傳統文化之美",
      image: "/images/qingbai.jpg" // 请替换为实际图片路径
    },
    {
      title: "戲劇工作坊",
      description: "體驗戲劇的魔力",
      image: "/images/drama.jpg"
    },
    {
      title: "流行歌唱教學",
      description: "感受音樂的魅力",
      image: "/images/singing.jpg"
    }
  ]

  // 生成日历数据
  const generateCalendarDays = () => {
    const today = new Date()
    const daysInMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate()
    
    return Array.from({ length: daysInMonth }, (_, i) => {
      const date = new Date(today.getFullYear(), today.getMonth(), i + 1)
      return {
        date,
        isToday: i + 1 === today.getDate(),
        isSelected: selectedDate?.getDate() === i + 1
      }
    })
  }

  // 时间段选项
  const timeSlots = [
    "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
  
    if (!selectedDate || !selectedTime) {
      setError('请选择预约日期和时间')
      setLoading(false)
      return
    }
  
    try {
      const bookingData: CreateBookingInput = {
        scheduleId: 'schedule-1', // 临时ID，后续需要根据实际选择的课程获取
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        notes: formData.notes || undefined
      }
  
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData)
      })
  
      if (!response.ok) {
        throw new Error(await response.text())
      }
  
      const result = await response.json()
  
      if (result.success) {
        alert('预约成功！')
        // 重置表单
        setFormData({
          courseType: '',
          name: '',
          phone: '',
          email: '',
          notes: ''
        })
        setSelectedDate(null)
        setSelectedTime(null)
      } else {
        throw new Error(result.error || '预约失败')
      }
    } catch (err) {
      console.error('Submission error:', err)
      setError(err instanceof Error ? err.message : '预约失败，请稍后重试')
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="space-y-12">
      {/* 头部区域 */}
      <div className="text-center space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-primary"
        >
          預約課程體驗
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          踏上一段藝術探索之旅，體驗中國傳統文化的魅力
        </p>
      </div>

      {/* 活动展示区 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative group"
          >
            <div className="relative h-64 overflow-hidden rounded-2xl">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-xl font-bold">{activity.title}</h3>
                <p className="text-white/80 mt-2">{activity.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 预约表单区 */}
      <div className="bg-white rounded-3xl shadow-xl p-8 space-y-8">
        <h2 className="text-2xl font-bold text-primary text-center">選擇您的預約時間</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 日历选择 */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">選擇日期</h3>
            <div className="grid grid-cols-7 gap-2">
              {['日', '一', '二', '三', '四', '五', '六'].map(day => (
                <div key={day} className="text-center font-bold text-gray-600">
                  {day}
                </div>
              ))}
              {generateCalendarDays().map(({ date, isToday, isSelected }, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDate(date)}
                  className={`
                    rounded-full w-10 h-10 flex items-center justify-center
                    transition-colors duration-200
                    ${isToday ? 'bg-primary text-white' : ''}
                    ${isSelected ? 'bg-primary/80 text-white' : ''}
                    ${!isToday && !isSelected ? 'hover:bg-primary/20' : ''}
                  `}
                >
                  {date.getDate()}
                </motion.button>
              ))}
            </div>
          </div>

          {/* 时间选择 */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">選擇時段</h3>
            <div className="grid grid-cols-2 gap-4">
              {timeSlots.map(time => (
                <motion.button
                  key={time}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTime(time)}
                  className={`
                    py-3 px-4 rounded-lg border transition-all duration-200
                    ${selectedTime === time 
                      ? 'bg-primary text-white border-primary' 
                      : 'border-gray-300 hover:border-primary'}
                  `}
                >
                  {time}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* 表单条件渲染 */}
        {selectedDate && selectedTime && (
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto space-y-6"
          onSubmit={handleSubmit}
        >
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-lg">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              課程類型
            </label>
            <select 
              name="courseType"
              value={formData.courseType}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            >
              <option value="">請選擇課程類型</option>
              <option value="snake">青蛇白蛇藝術體驗</option>
              <option value="drama">戲劇工作坊</option>
              <option value="culture">文化藝術課程</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              姓名
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="請輸入您的姓名"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              電話
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="請輸入您的聯繫電話"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              電子郵件
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="請輸入您的電子郵件"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              備註 (選填)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              rows={4}
              placeholder="如有特殊需求請在此說明"
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              w-full py-3 rounded-lg transition-colors duration-300
              ${loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-primary text-white hover:bg-primary-dark'}
            `}
          >
            {loading ? '提交中...' : '確認預約'}
          </motion.button>
        </motion.form>
      )}
    </div>
    </div>
  )
}
