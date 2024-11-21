// src/types/api.ts
interface APIResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
  }
  
  // 预约相关的 API 端点
  const API_ENDPOINTS = {
    // 课程相关
    GET_COURSES: '/api/courses',
    GET_COURSE_DETAIL: '/api/courses/:id',
    
    // 预约相关
    GET_AVAILABLE_SLOTS: '/api/schedules',
    CREATE_BOOKING: '/api/bookings',
    GET_USER_BOOKINGS: '/api/bookings/user',
    CANCEL_BOOKING: '/api/bookings/:id/cancel',
    
    // 用户相关
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    GET_PROFILE: '/api/users/profile',
  };