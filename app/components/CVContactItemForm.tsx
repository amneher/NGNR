"use client";

import { useSearchParams } from "next/navigation";
import { ContactItemCreateAction } from "@/app/actions/ResumeFormActions";
import SubmitButton from "@/app/components/SubmitButton";

export default function CVContactForm() {
    const searchParams = useSearchParams();

    return (
        <form 
            action={ContactItemCreateAction}
            className="justify-center my-2 bg-base-200 dark:bg-base-300 text-neutral dark:text-neutral-content rounded-box shadow py-4"
        >
            <h2 className="text-2xl font-semibold my-2">Create Resume Contact Item</h2>
            <input type="text" name="name" placeholder="Contact Type" className="input input-bordered input-secondary w-full max-w-xs md:max-w-2xl my-2" />
            <input type="text" name="value" placeholder="Contact Value" className="input input-bordered input-secondary w-full max-w-xs md:max-w-2xl my-2" />
            <label className="label cursor-pointer">
                <input type="checkbox" name="include" checked={true} className="checkbox" />
                <span className="label-text">Include?</span> 
            </label>
            <input type="text" name="resumeId" value={`${searchParams.get("id")}`} className="hidden" />
            <div className="divider" />
            <SubmitButton />
        </form>
    )
}
