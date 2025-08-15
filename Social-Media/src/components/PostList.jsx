import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import NoPostMessage from "./NoPostMessage";

const PostList = () => {
  const { postList } = useContext(PostListData);

  if (postList.length === 0) {
    return (
      <>
        <NoPostMessage />
      </>
    );
  }

  return (
    <>
      {postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};

export default PostList;
