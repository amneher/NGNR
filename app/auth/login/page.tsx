import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import EmailLogIn from "@/app/components/EmailLogIn";
import GithubLogIn from "@/app/components/GithubLogIn";
import InitiateCognitoAuth from "@/app/components/forms/InitiateCognitoAuth";


export default function AuthRoute() {
    return (
        <ColumnPageContainer columns={1}>
        <div className="basis-1/2 rounded-box place-content-center card-bordered dark:bg-neutral shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center">Log In</h2>
                <div className="card-actions p-4 place-content-center">
                    <GithubLogIn />
                </div>
                <div className="card-actions p-4 place-content-center">
                    <InitiateCognitoAuth />
                </div>
            </div>
        </div>
        </ColumnPageContainer>
    )
}