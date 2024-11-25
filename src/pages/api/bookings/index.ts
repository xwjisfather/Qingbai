// src/pages/api/bookings/index.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Prisma } from '@prisma/client'  // 修改导入路径

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    await prisma.$connect()
    console.log('Database connected successfully')

    console.log('Received booking data:', req.body)

    const requiredFields = ['scheduleId', 'name', 'email', 'phone', 'date', 'time', 'courseType']
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({
          success: false,
          error: `Missing required field: ${field}`
        })
      }
    }

    const {
      scheduleId,
      name,
      email,
      phone,
      notes = '',
      date,
      time,
      courseType
    } = req.body

    console.log('Creating booking with data:', {
      scheduleId,
      name,
      email,
      phone,
      notes,
      date,
      time,
      courseType
    })

    const booking = await prisma.booking.create({
      data: {
        scheduleId,
        name,
        email,
        phone,
        notes,
        date,
        time,
        courseType,
        status: 'pending',
        paymentStatus: 'pending'
      }
    })

    console.log('Booking created successfully:', booking)

    return res.status(200).json({ success: true, data: booking })
  } catch (error) {
    if (error instanceof Error) {
      console.error('Booking creation error:', {
        message: error.message,
        stack: error.stack
      })
    } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Prisma error:', {
        code: error.code,
        message: error.message,
        meta: error.meta
      })
    } else {
      console.error('Unknown error:', error)
    }

    return res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to create booking'
    })
  } finally {
    await prisma.$disconnect()
  }
} // 只需要一个结束括号
