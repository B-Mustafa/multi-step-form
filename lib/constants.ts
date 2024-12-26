// Email configuration
export const EMAIL_CONFIG = {
    from: 'Car Inquiry <onboarding@resend.dev>',
    recipients: ['bareeqdigitals@gmail.com', 'bhikhapurmustafa@gmail.com'],
    subject: (name: string) => `New Car Inquiry from ${name}`,
  };