"use server";

import { ResumeItemCreateAction } from "@/app/actions/ResumeFormActions";
import SubmitButton from "@/app/components/SubmitButton";
import { FormDatePicker } from "./DatePicker";
import { ResumeIDTag } from "./ResumeIDTag";
import { FormCheckBox } from "./FormCheckBox";

export default async function CVExperienceItemForm() {
    return (
        <form 
        action={ResumeItemCreateAction}
        className="justify-center my-2 bg-base-200 dark:bg-base-300 text-neutral dark:text-neutral-content rounded-box shadow py-4"
        >
            <h2 className="text-2xl font-semibold my-2">Create Resume Experience Item</h2>
            <input type="text" name="title" placeholder="Position or Area of Study" className="input input-bordered input-secondary text-base-content dark:text-neutral-content bg-base-100 dark:bg-base-300 w-full max-w-xs md:max-w-2xl my-2"/>
            <input type="text" name="company" placeholder="Company or School" className="input input-bordered input-secondary text-base-content dark:text-neutral-content bg-base-100 dark:bg-base-300 w-full max-w-xs md:max-w-2xl my-2"/>
            <label className="label block">
                <span className="label-text text-xl text-base-content dark:text-neutral-content mx-2">Start Date: </span>
                <FormDatePicker name="startDate" placeholder="Start Date" />
            </label>
            <FormCheckBox label="Present?" name="present" />
            <label className="label block">
                <span className="label-text text-xl text-base-content dark:text-neutral-content mx-2">End Date: </span>
                <FormDatePicker name="endDate" placeholder="End Date" />
            </label>
            <input type="text" name="description" placeholder="Description" className="input input-bordered input-secondary text-base-content dark:text-neutral-content bg-base-100 dark:bg-base-300 w-full max-w-xs md:max-w-2xl my-2" />
            <input type="text" name="items" placeholder="Points of Interest" className="input input-bordered input-secondary text-base-content dark:text-neutral-content bg-base-100 dark:bg-base-300 w-full max-w-xs md:max-w-2xl my-2" />
            <FormCheckBox label="Include?" name="include" />
            <ResumeIDTag />
            <div className="divider" />
            <SubmitButton />
        </form>
    )
}
