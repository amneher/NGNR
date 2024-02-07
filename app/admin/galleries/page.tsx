import { auth } from "@/app/api/auth/[...nextauth]/auth";
import ColumnPageContainer from "@/app/components/ColumnPageContainer";
import NotLoggedIn from "@/app/components/NotLoggedIn";
import GalleryForm from "@/app/components/forms/GalleryForm";
import { listBucketObjects } from "@/app/utils/mediaS3";

export default async function GalleryAdminPage() {
  const session = await auth();
  const items = await listBucketObjects("ngnr-media")


  if (process.env.NODE_ENV !== "production" || session) {
    return (
      <ColumnPageContainer columns={1}>
        <GalleryForm />
        <p>items</p>
      </ColumnPageContainer>
    );
  } else {
    ("use client");
    return <NotLoggedIn />;
  }
}
