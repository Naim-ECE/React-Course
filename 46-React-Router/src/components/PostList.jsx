import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import NoPostMessage from "./NoPostMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  if (fetching) {
    return <LoadingSpinner />;
  } else if (postList.length === 0) {
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
