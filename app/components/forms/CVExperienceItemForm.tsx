"use server";

import { ResumeItemCreateAction } from "@/app/actions/ResumeFormActions";
import SubmitButton from "@/app/components/SubmitButton";
import { TextField, FormCheckBox, ResumeIDTag, FormDatePicker } from "../FormFields";

export default async function CVExperienceItemForm() {
    return (
        <form 
        action={ResumeItemCreateAction}
        className="justify-center my-2 bg-base-200 dark:bg-neutral text-neutral dark:text-neutral-content rounded-box shadow py-4"
        >
            <h2 className="text-2xl font-semibold my-2">Create Resume Experience Item</h2>
            <TextField name="title" placeholder="Position or Area of Study"/>
            <TextField name="company" placeholder="Company or School"/>
            <FormDatePicker name="startDate" placeholder="Start Date" />
            <FormCheckBox label="Present?" name="present" />
            <FormDatePicker name="endDate" placeholder="End Date" />
            <TextField name="description" placeholder="Description"/>
            <TextField name="items" placeholder="Points of Interest"/>
            <FormCheckBox label="Include?" name="include" />
            <ResumeIDTag />
            <div className="divider" />
            <SubmitButton />
        </form>
    )
}
