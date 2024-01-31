"use server";

import { Schema, z } from "zod";
import { Resend } from "resend";

export default async function ContactFormAction(formData: FormData) {
  "use server";

  const schema: Schema = z.object({
    name: z.string().min(5),
    email: z.string().email(),
    message: z.string().max(1500),
  });
  const parse = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
  if (!parse.success) {
    return { message: "Failed to parse message." };
  }

  const data = parse.data;
  const resend = new Resend(process.env.RESEND_API_KEY);
  console.log(data);
  const result = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.TO_EMAIL || "andrew.neher1@gmail.com",
    subject: "Contact Form Message",
    html: `
            <h1>Contact Form Info</h1>
            <h2>From: ${data.name}</h2>
            <h3>Email: ${data.email}</h3>
            <p>${data.message}</p>
        `,
  });

  console.log(result);
}
