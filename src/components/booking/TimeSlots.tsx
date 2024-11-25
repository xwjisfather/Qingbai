// src/components/booking/TimeSlots.tsx
'use client'
import { motion } from 'framer-motion'

interface TimeSlotsProps {
  selectedDate: Date | null;
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
}

export default function TimeSlots({ selectedDate, selectedTime, onTimeSelect }: TimeSlotsProps) {
  const timeSlots = [
    "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ]

  if (!selectedDate) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        請先選擇日期
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-primary">選擇時間</h2>
      <div className="grid grid-cols-2 gap-4">
        {timeSlots.map(time => (
          <motion.button
            key={time}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onTimeSelect(time)}
            className={`
              py-3 rounded-lg border
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
  )
}