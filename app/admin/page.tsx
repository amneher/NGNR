import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import Link from "next/link";
import { auth } from "../api/auth/[...nextauth]/auth";
import NotLoggedIn from "@/app/components/NotLoggedIn";

export default async function Admin() {
  const session = await auth();

  if (process.env.NODE_ENV !== "production" || session) {
    return (
      <div className="flex flex-col items-center justify-around my-12">
        <div
          className={`relative text-center place-self-center lg:max-w-5xl lg:w-full text-base-content dark:text-neutral-content grid grid-cols-3 h-screen`}
        >
          <div className="row-span-full mx-2 space-y-2">
            <h2 className="text-2xl font-semibold underline-offset-2">Blog</h2>
            <div className="divider divider-primary" />
            <div className="border border-base-300 rounded-box py-1">
              <Link href="/admin/articles">Create A New Article</Link>
            </div>
            <div className="border border-base-300 rounded-box py-1">
              <Link href="/admin/authors">Create A New Author</Link>
            </div>
            <div className="border border-base-300 rounded-box py-1">
              <Link href="admin/galleries">Create A New Gallery Post</Link>
            </div>
          </div>
          <div className="row-span-full mx-2 space-y-2">
            <h2 className="text-2xl font-semibold underline-offset-2">
              Resume
            </h2>
            <div className="divider divider-primary" />
            <div className="border border-base-300 rounded-box py-1">
              <Link href="/admin/resume">Create New Resume</Link>
            </div>
          </div>
          <div className="row-span-full mx-2 space-y-2">
            <h2 className="text-2xl font-semibold underline-offset-2">
              Resources
            </h2>
            <div className="divider divider-primary" />
            <div className="border border-base-300 rounded-box py-1">
              <Link href="/admin/resources">Create New Resource</Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    ("use client");
    return <NotLoggedIn />;
  }
}
