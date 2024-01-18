import { Resend } from 'resend';
import { Schema, z } from 'zod';

export default async function ContactFormAction(formData: FormData) {
    const schema: Schema = z.object({
        name: z.string().min(5),
        email: z.string().email(),
        message: z.string().max(1500)
    })
    const parse = schema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
    })
    if (!parse.success) {
        return {"message": "Failed to parse message."}
    }

    const data = parse.data;
    const resend = new Resend(process.env.RESEND_API_KEY);

    resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'andrew.neher1@gmail.com',
    subject: 'Contact Form Message',
    html: `
        <h1>Message from a visitor to ngnr.us</h1>
        <h2>${data.name}</h2>
        <h3>${data.email}</h3>
        <p>${data.message}</p>
    `});
}