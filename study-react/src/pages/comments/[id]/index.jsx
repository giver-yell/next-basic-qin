import { CommentComponent } from "@/components/Comment";
import { Header } from "@/components/Header";
import { fetcher } from "@/utils/fetcher";
import { SWRConfig } from "swr";

export const getStaticPaths = async () => {
  const COMMENTS_API_URL = `https://jsonplaceholder.typicode.com/comments?_limit=10`;
  const commentsData = await fetcher(COMMENTS_API_URL);
  const paths = commentsData.map((comment) => {
    return {
      params: {
        id: comment.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  if (!comment.ok) {
    return {
      notFound: true,
    };
  }

  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
  };
};

const CommentsId = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Header />
      <SWRConfig value={{ fallback }}>
        <CommentComponent />
      </SWRConfig>
    </div>
  );
};

export default CommentsId;
