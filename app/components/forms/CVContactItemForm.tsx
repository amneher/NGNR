"use client";

import { useSearchParams } from "next/navigation";
import { ContactItemCreateAction } from "@/app/actions/ResumeFormActions";
import SubmitButton from "@/app/components/SubmitButton";
import { TextField, FormCheckBox, ResumeIDTag } from "../FormFields";

export default function CVContactForm() {
    const searchParams = useSearchParams();

    return (
        <form 
            action={ContactItemCreateAction}
            className="justify-center my-2 bg-base-200 dark:bg-neutral text-neutral dark:text-neutral-content rounded-box shadow py-4"
        >
            <h2 className="text-2xl font-semibold my-2">Create Resume Contact Item</h2>
            <TextField name="name" placeholder="Contact Type" />
            <TextField name="value" placeholder="Contact Value" />
            <FormCheckBox label="Include?" name="include" />
            <ResumeIDTag/>
            <div className="divider" />
            <SubmitButton />
        </form>
    )
}
