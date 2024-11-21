// src/components/booking/Calendar.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface CalendarProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

export default function BookingCalendar({ selectedDate, onDateSelect }: CalendarProps) {
  // 生成当月日历数据
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

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-primary">選擇日期</h2>
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
            onClick={() => onDateSelect(date)}
            className={`
              rounded-full w-10 h-10 flex items-center justify-center
              ${isToday ? 'bg-primary text-white' : ''}
              ${isSelected ? 'bg-primary/80 text-white' : ''}
              ${!isToday && !isSelected ? 'hover:bg-gray-100' : ''}
            `}
          >
            {date.getDate()}
          </motion.button>
        ))}
      </div>
    </div>
  )
}