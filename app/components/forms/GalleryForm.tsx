"use server";

import CreateGalleryAction from "@/app/actions/CreateGalleryAction";
import { FormTitle, TextField } from "../FormFields";
import SubmitButton from "../SubmitButton";


export default async function GalleryForm() {
    "use server";
    return (
        <form action={CreateGalleryAction} className="justify-center my-2 bg-base-200 dark:bg-neutral text-neutral dark:text-neutral-content rounded-box shadow py-4">
            <FormTitle title="Create A New Gallery"/>
            <TextField name="slug" placeholder="Gallery Slug"/>
            <TextField name="title" placeholder="Gallery Name/Title"/>
            <TextField name="description" placeholder="Gallery Description"/>
            <TextField name="authorSlug" placeholder="Author Slug" />
            <TextField name="s3folder" placeholder="S3 Folder Containing Files" />
            <TextField name="items" placeholder="Files in S3 to include (separate files with '; ')" />
            <div className="divider" />
            <SubmitButton />
        </form>
    )
}
