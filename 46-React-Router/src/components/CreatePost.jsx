import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  const handleSubmit = (event) => {};

  return (
    <>
      <Form method="POST" className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User ID here
          </label>
          <input
            type="text"
            name="userId"
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
            name="title"
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
            name="body"
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
            name="reactions.likes"
            className="form-control"
            id="reactions"
            placeholder="How many people liked this post?"
          />
          <input
            type="text"
            name="reactions.dislikes"
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
            name="tags"
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();

  const postData = {
    userId: parseInt(formData.get("userId")),
    title: formData.get("title"),
    body: formData.get("body"),
    reactions: {
      likes: parseInt(formData.get("reactions.likes")) || 0,
      dislikes: parseInt(formData.get("reactions.dislikes")) || 0,
    },
    tags: formData.get("tags").split(" "),
  };

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
      // window.scrollTo(0, 0); // automatically scroll to the top
    });

  return redirect("/");
}

export default CreatePost;
