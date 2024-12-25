'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { Car, Wrench, User } from 'lucide-react';
import { CarDetails } from './form-steps/car-details';
import { VehicleCondition } from './form-steps/vehicle-condition';
import { ContactInfo } from './form-steps/contact-info';
import { formSchema, type FormData } from '@/lib/form-schema';

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      carYear: '',
      carBrand: '',
      carModel: '',
      condition: '',
      vehicleStatus: '',
      mileage: '',
      zipCode: '',
      features: [],
      otherFeatures: '',
      carTitle: '',
      hasKeys: '',
      fullName: '',
      email: '',
      phone: '',
      askingPrice: '',
    },
  });

  const onSubmit = async (values: FormData) => {
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Failed to send email');

      toast.success('Form submitted successfully!');
      form.reset();
      setStep(1);
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    const fields = getFieldsForStep(step);
    const isStepValid = fields.every((field) => !form.formState.errors[field as keyof FormData]);

    if (isStepValid) {
      setStep((prev) => Math.min(prev + 1, 3));
    } else {
      fields.forEach((field) => form.trigger(field as keyof FormData));
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const getFieldsForStep = (step: number): Array<keyof FormData> => {
    switch (step) {
      case 1:
        return ['carYear', 'carBrand', 'carModel'];
      case 2:
        return ['condition', 'vehicleStatus', 'mileage', 'zipCode', 'carTitle', 'hasKeys'];
      case 3:
        return ['fullName', 'email', 'phone', 'askingPrice'];
      default:
        return [];
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <CarDetails form={form} />;
      case 2:
        return <VehicleCondition form={form} />;
      case 3:
        return <ContactInfo form={form} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-center">Sell Your Car</h1>
        <p className="text-muted-foreground text-center">
          Tell us about your car and we'll help you sell it.
        </p>
      </div>

      <div className="space-y-2">
        <Progress value={(step / 3) * 100} className="h-2" />
        <div className="flex justify-between px-4">
          <div className="flex flex-col items-center">
            <div className={`p-2 rounded-full ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
              <Car className="h-6 w-6" />
            </div>
            <span className="text-sm mt-1">Car Details</span>
          </div>
          <div className="flex flex-col items-center">
            <div className={`p-2 rounded-full ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
              <Wrench className="h-6 w-6" />
            </div>
            <span className="text-sm mt-1">Condition</span>
          </div>
          <div className="flex flex-col items-center">
            <div className={`p-2 rounded-full ${step >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
              <User className="h-6 w-6" />
            </div>
            <span className="text-sm mt-1">Contact</span>
          </div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {renderStepContent()}

          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
            >
              Previous
            </Button>
            
            {step < 3 ? (
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
