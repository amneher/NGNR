// create / administer authors.

import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import { getAllAuthors } from "@/app/utils/loadData";
import AuthorForm from "@/app/components/forms/AuthorForm";
import AuthorAvatar from "@/app/components/AuthorAvatar";
import Link from "next/link";

export default async function AuthorAdminPage() {
  const authors = await getAllAuthors();
  return (
    <ColumnPageContainer columns={1}>
      <h2 className={`m-2 text-1xl font-semibold`}>Author Admin</h2>
      <AuthorForm />
      <div className="divider divider-primary" />
      <details className="collapse">
        <summary className="collapse-title text-xl font-medium">
          All Authors
        </summary>
        <div
          className="collapse-content mt-3 p-2 shadow rounded-box dark:bg-neutral w-full"
        >
          {!authors && (
            <div>
              <h2 className={`m-2 text-1xl font-semibold`}>
                No Authors Found...
              </h2>
            </div>
          )}
          <table className="table-md w-full">
            <thead>
                <tr>
                    <td></td>
                    <td>Author Name</td>
                    <td>Author Slug</td>
                </tr>
            </thead>
            <tbody>
            {authors &&
            authors.map((author) => {
              return (
                <tr key={author.id}>
                    <td>
                        <AuthorAvatar
                        authorSlug={author.slug}
                        authorPhoto={author.photoUrl}
                        authorTitle={author.title}
                        />
                    </td>
                    <td><Link href={`/author/${author.slug}`}>{author.title}</Link></td>
                    <td><Link href={`/author/${author.slug}`}>{author.slug}</Link></td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>
      </details>
    </ColumnPageContainer>
  );
}
