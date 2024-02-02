import ArticleForm from "@/app/components/forms/ArticleForm";
import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import { auth } from "@/app/api/auth/[...nextauth]/auth";
import NotLoggedIn from "@/app/components/NotLoggedIn";

export default async function ArticleCreatePage() {
  const session = await auth();
  if (process.env.NODE_ENV !== "production" || session) {
    return (
      <ColumnPageContainer columns={1}>
        <ArticleForm />
      </ColumnPageContainer>
    );
  } else {
    ("use client");
    return <NotLoggedIn />;
  }
}
