import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postID
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postID) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postID,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Cox's Bazar",
    body: "Hey guys! Today I'm going to Cox's Bazar for my vacation. Hope to enjoy a lot there. Peace out",
    reactions: 2,
    userID: "user-9",
    tags: ["Cox's Bazar", "vacation", "Enjoying"],
  },
  {
    id: "2",
    title: "Got GPA-5 in HSC",
    body: "Alhamdulillah! Today I'm excited to share that I've earned GPA-5 in my HSC exam. Pray for my upcoming success",
    reactions: 21,
    userID: "user-10",
    tags: ["exam", "result", "blessed"],
  },
];

export default PostListProvider;
