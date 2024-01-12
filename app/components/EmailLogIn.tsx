'use client'

import { signIn } from "next-auth/react";


export default function EmailLogIn() {
    return (
        <button className="btn btn-primary" onClick={() => signIn("email", { email: document.getElementsByName("email")[0].nodeValue })}>Send Magic Link</button>
    )
}