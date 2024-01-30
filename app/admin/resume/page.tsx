import { auth } from "@/app/api/auth/[...nextauth]/auth";
import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import NotLoggedIn from "@/app/components/NotLoggedIn";
import { Resume } from "@/app/models/resume";
import helpers from "@/app/utils/helpers";
import { getAllResumes } from "@/app/utils/loadData";
import { AtSymbolIcon, BriefcaseIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function resumeAdminPage() {
  const session = await auth();
  const resumes: Resume[] = await getAllResumes();
  const pencilSquareIcon = <PencilSquareIcon width="30px" height="30px" />
  const atIcon = <AtSymbolIcon width="30px" height="30px" />
  const briefcaseIcon = <BriefcaseIcon width="30px" height="30px" />

  if (process.env.NODE_ENV !== "production" || session) {
    return (
      <ColumnPageContainer columns={1}>
        <h2>All Resumes</h2>
        <div className="divider-primary" />
        <table className="table table-md">
          <thead>
            <tr>
              <th>Create Date</th>
              <th>Name</th>
              <th>Basics</th>
              <th>Contact</th>
              <th>Experience</th>
            </tr>
          </thead>
          {resumes.length < 1 && (
            <tr>
              <td></td>
              <td>Begin Building A Resume...</td>
              <td><Link href={`/admin/resume/base`} >{pencilSquareIcon}</Link></td>
              <td><Link href={`/admin/resume/contact`} >{atIcon}</Link></td>
              <td><Link href={`/admin/resume/experience`} >{briefcaseIcon}</Link></td>
            </tr>
          )}
          {resumes.map((resume) => {
            return (
                <tr key={resume.id}>
                    <td>{helpers.stringToFriendlyDate(resume.createDate.toISOString())}</td>
                    <td>{resume.name}</td>
                    <td><Link href={`/admin/resume/base?id=${resume.id}`} >{pencilSquareIcon}</Link></td>
                    <td><Link href={`/admin/resume/contact?id=${resume.id}`} >{atIcon}</Link></td>
                    <td><Link href={`/admin/resume/experience?id=${resume.id}`} >{briefcaseIcon}</Link></td>
                </tr>
            );
          })}
        </table>
      </ColumnPageContainer>
    );
  } else {
    ("use client");
    return <NotLoggedIn />;
  }
}
