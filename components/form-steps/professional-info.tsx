// 'use client';

// import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { UseFormReturn } from "react-hook-form";
// import { FormData } from "@/lib/form-schema";

// interface ProfessionalInfoProps {
//   form: UseFormReturn<FormData>;
// }

// export function ProfessionalInfo({ form }: ProfessionalInfoProps) {
//   return (
//     <div className="space-y-4">
//       <FormField
//         control={form.control}
//         name="company"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Company Name</FormLabel>
//             <FormControl>
//               <Input placeholder="Company Inc." {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       <FormField
//         control={form.control}
//         name="position"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Position</FormLabel>
//             <FormControl>
//               <Input placeholder="Project Manager" {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       <FormField
//         control={form.control}
//         name="experience"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Years of Experience</FormLabel>
//             <FormControl>
//               <Input placeholder="5" type="number" {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//     </div>
//   );
// }