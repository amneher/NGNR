import ArticleForm from "@/app/components/ArticleForm"
import ColumnPageContainer from "@/app/components/ColumnPageContainer"


export default function ArticleCreatePage() {
    
    return (
          <ColumnPageContainer columns={1}>
              <ArticleForm />
          </ColumnPageContainer>
    )
}