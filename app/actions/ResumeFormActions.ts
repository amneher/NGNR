"use server";

import ObjectID from "bson-objectid";
import { Schema, z } from "zod";
import prisma from "@/app/utils/db";
import { redirect } from "next/navigation";

export const BaseResumeCreateAction = async (formData: FormData) => {
  "use server";
  const schema: Schema = z.object({
    id: z.string().optional().default(new ObjectID().toHexString()),
    name: z.string(),
    createDate: z.date(),
    photoURL: z.string().optional(),
    intro: z.string().optional(),
  });
  const parse = schema.safeParse({
    id: formData.get("id"),
    name: formData.get("name"),
    createDate: formData.get("createDate"),
    photoURL: formData.get("photoURL"),
    intro: formData.get("intro"),
  });
  if (!parse.success) {
    return { message: "Failed to parse Base Resume Form." };
  }
  const data = parse.data;
  console.log(data)
  const resume = await prisma.resume.create({
    data: {
      id: data.id,
      name: data.name,
      createDate: data.createDate,
      photoURL: data.photoURL,
      intro: data.intro,
    },
  });
  if (resume) {
    return redirect("/admin/resume");
  } else {
    return redirect(`admin/resume/base?id=${data.id}`);
  }
};

export const ContactItemCreateAction = async (formData: FormData) => {
  "use server";
  const schema: Schema = z.object({
    id: z.string().optional().default(new ObjectID().toHexString()),
    name: z.string(),
    value: z.string(),
    include: z.boolean().default(true),
    resumeId: z.string().optional(),
  });
  const parse = schema.safeParse({
    id: formData.get("id"),
    name: formData.get("name"),
    value: formData.get("value"),
    include: formData.get("include"),
    resumeId: formData.get("resumeId"),
  });
  if (!parse.success) {
    return { message: "Failed to parse Resume Contact Item Form." };
  }
  const data = parse.data;
  console.log(data)
  const contact = await prisma.contactItem.create({
    data: {
      id: data.id,
      name: data.name,
      value: data.value,
      include: data.include,
      resumeID: data.resumeId,
    },
  });
  if (contact) {
    return redirect("/admin/resume");
  } else {
    return redirect(`admin/resume/contact?id=${data.resumeID}`);
  }
};

export const ResumeItemCreateAction = async (formData: FormData) => {
  "use server";
  const schema: Schema = z.object({
    id: z.string().optional().default(new ObjectID().toHexString()),
    include: z.boolean().default(true),
    title: z.string(),
    company: z.string(),
    startDate: z.string(),
    present: z.boolean(),
    endDate: z.date().optional(),
    description: z.string(),
    items: z.array(z.string()),
    resumeId: z.string().optional(),
  });
  const parse = schema.safeParse({
    id: formData.get("id"),
    include: formData.get("include"),
    title: formData.get("title"),
    company: formData.get("company"),
    present: formData.get("present"),
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    description: formData.get("description"),
    items: formData.get("items"),
    resumeId: formData.get("resumeId"),
  });
  if (!parse.success) {
    return { message: "Failed to parse Resume Experience Item Form." };
  }
  const data = parse.data;
  console.log(data)
  const endDate = !data.present ? data.endDate : null;
  const experience = await prisma.resumeItem.create({
    data: {
      id: data.id,
      include: data.include,
      title: data.title,
      company: data.company,
      startDate: data.startDate,
      endDate: endDate,
      description: data.description,
      items: data.items,
      resumeID: data.resumeId,
    },
  });
  if (experience) {
    return redirect("/admin/resume");
  } else {
    return redirect(`admin/resume/experience?id=${data.resumeID}`);
  }
};
