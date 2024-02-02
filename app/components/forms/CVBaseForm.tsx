"use server";

import { BaseResumeCreateAction } from "@/app/actions/ResumeFormActions";
import SubmitButton from "@/app/components/SubmitButton";
import { TextField, ResumeIDTag, FormDatePicker } from "../FormFields";

export default async function CVBaseForm() {
  return (
    <form
      action={BaseResumeCreateAction}
      className="justify-center my-2 bg-base-200 dark:bg-neutral text-neutral dark:text-neutral-content rounded-box shadow py-4"
    >
      <h2 className="text-2xl font-semibold my-2">Create Resume Base</h2>

      <TextField name="name" placeholder="Name" />
      <TextField name="photoURL" placeholder="Profile Photo" />
      <TextField name="intro" placeholder="Introduction" />
      <FormDatePicker name="createDate" placeholder="Date Created" />
      <ResumeIDTag />
      <div className="divider" />
      <SubmitButton />
    </form>
  );
}
