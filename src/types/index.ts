// src/types/index.ts
export interface NavItem {
  name: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Course {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface TimeSlot {
  time: string;
  isAvailable: boolean;
}

export interface BookingData {
  date: Date | null;
  timeSlot: string | null;
  course: string | null;
  name: string;
  email: string;
  phone: string;
}

// src/types/index.ts
export interface NavItem {
    name: string;
    href: string;
  }
  
  export interface Feature {
    title: string;
    description: string;
    icon: React.ComponentType<any>;
  }
  
  export interface Course {
    id: number;
    name: string;
    description: string;
    image: string;
  }
  
  export interface TimeSlot {
    time: string;
    isAvailable: boolean;
  }
  
  export interface BookingData {
    date: Date | null;
    timeSlot: string | null;
    course: string | null;
    name: string;
    email: string;
    phone: string;
  }