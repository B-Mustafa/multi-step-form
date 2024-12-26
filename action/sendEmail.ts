"use server";

import React from "react";
import { Resend } from "resend";
import { getErrorMessage } from "@/lib/utils";
import { formSchema, type FormData } from "@/lib/form-schema";
import CarInquiryEmail from "@/components/emails/car-inquiry";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  try {
    // Validate incoming formData using Zod schema
    formSchema.parse(formData);

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Contact@mustafabhikhapur.me",
      to: ["bhikhapurmustafa@gmail.com","bareeqdigitals@gmail.com",],
      subject: "New Car Inquiry",
      react: React.createElement(CarInquiryEmail, formData),
    });

    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
