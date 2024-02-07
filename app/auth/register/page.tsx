import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import CreateUserForm from "@/app/components/forms/CreateUserForm";


export default function RegisterPage() {
    return (
        <ColumnPageContainer columns={1}>
        <div className="basis-1/2 rounded-box place-content-center card-bordered dark:bg-neutral shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center">Register</h2>
                <div className="card-actions p-4 place-content-center">
                    <CreateUserForm />
                </div>
            </div>
        </div>
        </ColumnPageContainer>
    )
}