'use client'

import { signIn } from "next-auth/react";


export default function GithubLogIn() {
    return (
        <button className="btn btn-primary" onClick={() => signIn("github", { callbackUrl: '/' })}>Log In With GitHub</button>
    )
}