import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElementLiked = useRef();
  const reactionsElementDisliked = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = {
      likes: parseInt(reactionsElementLiked.current.value) || 0,
      dislikes: parseInt(reactionsElementDisliked.current.value) || 0,
    };
    const tags = tagsElement.current.value.split(" ");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions || { likes: 0, dislikes: 0 },
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then(post => addPost(post));


    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElementLiked.current.value = "";
    reactionsElementDisliked.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User ID here
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="body"
            placeholder="Your User ID"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="How are you feeling today...?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            rows="5"
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions{" "}
          </label>
          <input
            type="text"
            ref={reactionsElementLiked}
            className="form-control"
            id="reactions"
            placeholder="How many people liked this post?"
          />
          <input
            type="text"
            ref={reactionsElementDisliked}
            className="form-control"
            id="reactions"
            placeholder="How many people disliked this post?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
