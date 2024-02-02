"use server";

import AuthorCreateAction from "@/app/actions/AuthorCreateFormAction";
import { FormTitle, TextField } from "@/app/components/FormFields";
import SubmitButton from "@/app/components/SubmitButton";


export default async function AuthorForm() {

    return (
        <form
        action={AuthorCreateAction}
        className="justify-center my-2 bg-base-200 dark:bg-neutral text-neutral dark:text-neutral-content rounded-box shadow py-4"
        >
            <FormTitle title="Create New Author" />
            <TextField name="slug" placeholder="Author Slug"/>
            <TextField name="title" placeholder="Author Name/Title"/>
            <TextField name="photoUrl" placeholder="Profile Photo URL"/>
            <div className="divider" />
            <SubmitButton />
        </form>
    )
}