import { CommentComponent } from "@/components/Comment";
import { Header } from "@/components/Header";
import { fetcher } from "@/utils/fetcher";
import { SWRConfig } from "swr";

export const getStaticPaths = async () => {
  const COMMENTS_API_URL = `https://jsonplaceholder.typicode.com/comments`;
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
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const commentData = await fetcher(COMMENT_API_URL);

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
