import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import NoPostMessage from "./NoPostMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitalPost } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    console.log(controller);
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitalPost(data.posts);
        setFetching(false);
      });
    return () => {
      console.log(`Cleaning up useEffect`);
      controller.abort();
    };
  }, []);

  const hendleGetPostClick = () => {};

  if (fetching) {
    return <LoadingSpinner />;
  } else if (postList.length === 0) {
    return (
      <>
        <NoPostMessage onGetPostClick={hendleGetPostClick} />
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
