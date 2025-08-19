import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import NoPostMessage from "./NoPostMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

let i = 1;

const PostList = () => {

  const postList = useLoaderData();

  // if (fetching) {
  //   return <LoadingSpinner />;
  // }
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
        return <Post key={++i} post={post} />;
      })}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
