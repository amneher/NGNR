import ArticleForm from "@/app/components/ArticleForm"
import ColumnPageContainer from "@/app/components/ColumnPageContainer"
import { auth } from "@/app/utils/auth"

export default async function ArticleCreatePage() {
    const session = await auth()
    if (session.user) {
    return (
          <ColumnPageContainer columns={1}>
            <>
                <p>Loading. . .</p>
            </>
          </ColumnPageContainer>
    )
    }
    if (!session.user) {
        return (
            <ColumnPageContainer columns={1}>
                <>
                    <p>Access Denied.</p>
                </>
            </ColumnPageContainer>
        )
    }
    return (
        <ColumnPageContainer columns={1}>
          
            <ArticleForm />
        </ColumnPageContainer>
  )
}