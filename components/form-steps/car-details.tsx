'use client';

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormData, carYears, carBrands } from "@/lib/form-schema";

interface CarDetailsProps {
  form: UseFormReturn<FormData>;
}

export function CarDetails({ form }: CarDetailsProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="carYear"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Car Year</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {carYears.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="carBrand"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Car Brand</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {carBrands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="carModel"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Car Model</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Camry, Civic" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}