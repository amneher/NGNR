import { CognitoUserCreateAction } from "@/app/actions/CognitoUserActions";
import { FormTitle, TextField } from "../FormFields";
import SubmitButton from "../SubmitButton";


export default function CreateUserForm() {

    return (
        <form
            action={CognitoUserCreateAction}
            className="justify-center my-2 bg-base-200 dark:bg-neutral text-neutral dark:text-neutral-content rounded-box shadow py-4"
        >
            <FormTitle title="Create A New Cognito User" />
            <TextField name="username" placeholder="Username" />
            <TextField name="password" placeholder="Password" />
            <TextField name="email" placeholder="Email" />
            <div className="divider divider-primary" />
            <SubmitButton />
        </form>
    )
}