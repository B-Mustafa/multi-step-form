import * as z from 'zod';

export const formSchema = z.object({
  // Step 1 - Car Details
  carYear: z.string().min(1, 'Car year is required'),
  carBrand: z.string().min(1, 'Car brand is required'),
  carModel: z.string().min(1, 'Car model is required'),
  
  // Step 2 - Vehicle Condition
  condition: z.string().min(1, 'Condition is required'),
  vehicleStatus: z.string().min(1, 'Vehicle status is required'),
  mileage: z.string().min(1, 'Mileage is required'),
  zipCode: z.string().min(5, 'Valid zip code is required'),
  features: z.array(z.string()).default([]),
  otherFeatures: z.string().optional(),
  carTitle: z.string().min(1, 'Car title status is required'),
  hasKeys: z.string().min(1, 'Please specify if keys are available'),
  
  // Step 3 - Contact & Price
  name: z.string().min(1, 'Name is required'),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  askingPrice: z.string().min(1, 'Asking price is required'),
});

export type FormData = z.infer<typeof formSchema>;

export const carYears = Array.from({ length: 11 }, (_, i) => (2000 + i).toString());

export const carBrands = [
  'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan',
  'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Hyundai',
  'Kia', 'Mazda', 'Subaru', 'Lexus', 'Acura'
];

export const conditions = [
  'New', 'Like New', 'Used', 'Salvaged'
];

export const vehicleStatuses = [
  'Drives and starts',
  'Starts but not drives',
  "Doesn't start or drive"
];

export const carFeatures = [
  'Sunroof',
  'Leather Seats',
  'Navigation System',
  'Alloy Wheels'
];

export const carTitleStatuses = [
  'Clean Title',
  'Salvage Title',
  'No Title',
  'Rebuilt Title'
];