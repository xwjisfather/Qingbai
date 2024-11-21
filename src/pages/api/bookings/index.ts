// src/pages/api/bookings/index.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const {
      scheduleId,
      name,
      email,
      phone,
      notes
    } = req.body

    const booking = await prisma.booking.create({
      data: {
        scheduleId,
        name,
        email,
        phone,
        notes,
        status: 'pending',
        paymentStatus: 'pending'
      }
    })

    return res.status(200).json({ success: true, data: booking })
  } catch (error) {
    console.error('Booking creation error:', error)
    return res.status(500).json({ 
      success: false, 
      error: 'Failed to create booking' 
    })
  }
}