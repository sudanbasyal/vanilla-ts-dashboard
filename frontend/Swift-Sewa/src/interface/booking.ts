export interface BookingForm {
  contactName: string;
  phoneNumber: string;
  contactAddress: string;
  bookedDate: string;
  specialInstructions: string;
  companyId: string;
  companyServiceId: string;
}

export interface Booking {
  id: number;
  contactName: string;
  phoneNumber: string;
  contactAddress: string;
  bookedDate: string;
  cancelledBooking: string | null;
  isApproved: boolean;
  specialInstructions: string;
  createdAt: string;
}
