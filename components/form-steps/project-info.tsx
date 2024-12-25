// 'use client';

// import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { UseFormReturn } from "react-hook-form";
// import { FormData } from "@/lib/form-schema";

// interface ProjectInfoProps {
//   form: UseFormReturn<FormData>;
// }

// export function ProjectInfo({ form }: ProjectInfoProps) {
//   return (
//     <div className="space-y-4">
//       <FormField
//         control={form.control}
//         name="budget"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Project Budget</FormLabel>
//             <FormControl>
//               <Input placeholder="$10,000" {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       <FormField
//         control={form.control}
//         name="timeline"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Expected Timeline</FormLabel>
//             <FormControl>
//               <Input placeholder="3 months" {...field} />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//       <FormField
//         control={form.control}
//         name="description"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Project Description</FormLabel>
//             <FormControl>
//               <Textarea 
//                 placeholder="Tell us about your project..."
//                 className="min-h-[100px]"
//                 {...field}
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//     </div>
//   );
// }