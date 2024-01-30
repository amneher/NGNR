import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import Link from "next/link";
import { auth } from "../api/auth/[...nextauth]/auth";
import NotLoggedIn from "@/app/components/NotLoggedIn";

export default async function Admin() {
  const session = await auth();

  if (process.env.NODE_ENV !== "production" || session) {
    return (
      <ColumnPageContainer columns={1}>
        <h2 className="text-2xl font-semibold">In Progress...</h2>
        <div>
          <Link href="/admin/resume">Create New Resume</Link>
        </div>
      </ColumnPageContainer>
    );
  } else {
    ("use client");
    return <NotLoggedIn />;
  }
}
