'use client'

import ColumnPageContainer from "@/app/components/ColumnPageContainer"


export default function NotLoggedIn() {
    return (
        <ColumnPageContainer columns={1}>
            <a href="/auth"><p>Please Log In.</p></a>
        </ColumnPageContainer>
    )
}