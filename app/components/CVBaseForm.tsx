"use server";

import { BaseResumeCreateAction } from "@/app/actions/ResumeFormActions";
import SubmitButton from "@/app/components/SubmitButton";
import { FormDatePicker } from "./DatePicker";
import { ResumeIDTag } from "./ResumeIDTag";

export default async function CVBaseForm() {

    return (
        <form
            action={BaseResumeCreateAction}
            className="justify-center my-2 bg-base-200 dark:bg-base-300 text-neutral dark:text-neutral-content rounded-box shadow py-4"
        >
            <h2 className="text-2xl font-semibold my-2">Create Resume Base</h2>
            <input type="text" name="name" placeholder="Name" className="input input-bordered input-secondary w-full max-w-xs md:max-w-2xl my-2" />
            <input type="text" name="photoURL" placeholder="Profile Photo" className="input input-bordered input-secondary w-full max-w-xs md:max-w-2xl my-2" />
            <input type="text" name="intro" placeholder="Introduction" className="input input-bordered input-secondary w-full max-w-xs md:max-w-2xl my-2" />
            <label className="label block">
                <span className="label-text text-xl text-base-content dark:text-neutral-content mx-2">Date Created: </span>
                <FormDatePicker name="createDate" placeholder="Date Created" />
            </label>
            <ResumeIDTag />
            <div className="divider" />
            <SubmitButton />
        </form>
    )
}
