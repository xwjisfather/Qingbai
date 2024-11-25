// src/app/page.tsx
import Hero from '@/components/home/Hero'
import React from 'react'
import Features from '@/components/home/Features'
import CoursesList from '@/components/home/CoursesList'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <CoursesList />
    </div>
  )
}