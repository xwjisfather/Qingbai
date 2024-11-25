// src/hooks/useBooking.ts
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { CreateBookingInput } from '@/types/booking';

export function useCreateBooking() {
  return useMutation(async (data: CreateBookingInput) => {
    const response = await axios.post('/api/bookings', data);
    return response.data;
  });
}

export function useUserBookings() {
  return useQuery('userBookings', async () => {
    const response = await axios.get('/api/bookings');
    return response.data;
  });
}
