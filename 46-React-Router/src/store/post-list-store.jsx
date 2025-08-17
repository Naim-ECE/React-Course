import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitalPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postID
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userID, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Math.random(),
        title: postTitle,
        body: postBody,
        reactions: reactions || { likes: 0, dislikes: 0 },
        userID: userID,
        tags: tags,
      },
    });
  };

  const addInitalPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = useCallback(
    (postID) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postID,
        },
      });
    },
    [dispatchPostList]
  );

  return (
    <PostList.Provider value={{ postList, addPost, addInitalPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
