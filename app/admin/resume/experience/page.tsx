import { auth } from "@/app/api/auth/[...nextauth]/auth";
import CVExperienceItemForm from "@/app/components/forms/CVExperienceItemForm";
import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import NotLoggedIn from "@/app/components/NotLoggedIn";

export default async function resumeExperienceAdminPage() {
  const session = await auth();

  if (process.env.NODE_ENV !== "production" || session) {
    return (
      <ColumnPageContainer columns={1}>
        <CVExperienceItemForm />
      </ColumnPageContainer>
    );
  } else {
    ("use client");
    return <NotLoggedIn />;
  }
}
