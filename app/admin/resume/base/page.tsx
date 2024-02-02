import { auth } from "@/app/api/auth/[...nextauth]/auth";
import CVBaseForm from "@/app/components/forms/CVBaseForm";
import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import NotLoggedIn from "@/app/components/NotLoggedIn";

export default async function resumeBaseAdminPage() {
  const session = await auth();

  if (process.env.NODE_ENV !== "production" || session) {
    return (
      <ColumnPageContainer columns={1}>
        <CVBaseForm />
      </ColumnPageContainer>
    );
  } else {
    ("use client");
    return <NotLoggedIn />;
  }
}
