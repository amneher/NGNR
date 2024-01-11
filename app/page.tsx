// import { getServerSession } from 'next-auth'
// import Image from 'next/image'
// import { authOptions } from './utils/auth';
import { Article } from "./models/article";
import ColumnPageContainer from "./components/ColumnPageContainer";
import Card from "./components/Card";
import { getArticlesByTag } from "./utils/loadData";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  const homeItems: Article[] = await getArticlesByTag("HomeContent");

  return (
    <ColumnPageContainer columns={2}>
        {homeItems &&
          homeItems.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              createDate={item.createDate}
              description={item.description}
              content={item.content}
              tagIDs={item.tagIDs}
              tags={item.tags}
              actions={["homeLimit"]}
            />
          ))}
    </ColumnPageContainer>
  );
}
