

export default function AuthRoute() {
    return (
        <div className="container mx-auto flex flex-row relative p-5">
            <div className="basis-1/4"></div>
        <div className="basis-1/2 rounded-box place-content-center card-bordered bg-slate-700 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center">Log In</h2>
                <div className="card-actions p-4 place-content-center">
                    <button className="btn btn-primary">Log In With GitHub</button>
                </div>
                <div className="card-actions p-4 place-content-center">
                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    <button className="btn btn-primary">Send Magic Link</button>
                </div>
            </div>
        </div>
        <div className="basis-1/4"></div>
        </div>
    )
}