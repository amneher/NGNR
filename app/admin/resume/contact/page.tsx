import { auth } from "@/app/api/auth/[...nextauth]/auth";
import CVContactForm from "@/app/components/forms/CVContactItemForm";
import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import NotLoggedIn from "@/app/components/NotLoggedIn";

export default async function resumeContactAdminPage() {
  const session = await auth();

  if (process.env.NODE_ENV !== "production" || session) {
    return (
      <ColumnPageContainer columns={1}>
        <CVContactForm />
      </ColumnPageContainer>
    );
  } else {
    ("use client");
    return <NotLoggedIn />;
  }
}
