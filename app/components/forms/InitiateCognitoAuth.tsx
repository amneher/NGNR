import { CognitoInitiateAuth } from "@/app/actions/CognitoUserActions";
import { FormTitle, TextField } from "../FormFields";
import SubmitButton from "../SubmitButton";


export default function InitiateCognitoAuth() {

    return (
        <form
            action={CognitoInitiateAuth}
            className="justify-center my-2 bg-base-200 dark:bg-neutral text-neutral dark:text-neutral-content rounded-box shadow py-4"
        >
            <FormTitle title="Initiate Cognito Auth Flow" />
            <TextField name="username" placeholder="Username" />
            <TextField name="password" placeholder="Password" />
            <div className="divider divider-primary" />
            <SubmitButton />
        </form>
    )
}