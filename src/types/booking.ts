// src/types/booking.ts
export interface CreateBookingInput {
  scheduleId: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
  date: string;
  time: string;
  courseType: string;
}
  
  export interface Booking {
    id: string;
    userId: string;
    scheduleId: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    paymentStatus: 'pending' | 'paid' | 'refunded';
    createdAt: Date;
    // 包含关联数据
    schedule?: CourseSchedule;
  }
  
  export interface CourseSchedule {
    id: string;
    courseId: string;
    teacherId: string;
    startTime: Date;
    endTime: Date;
    availableSpots: number;
    status: 'active' | 'cancelled';
    course?: Course;
    teacher?: Teacher;
  }
  
  export interface Course {
    id: string;
    name: string;
    description?: string;
    duration: number;
    capacity: number;
    price: number;
    category: string;
  }
  
  export interface Teacher {
    id: string;
    name: string;
    email: string;
    phone?: string;
    bio?: string;
    specialties?: string;
  }