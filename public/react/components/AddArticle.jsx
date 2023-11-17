import React, { useState } from "react";

export function AddArticle({ setIsAddingArticle }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tags, setTags] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    postData();
  }

  async function postData() {
    const articleData = {
      title: title,
      content: content,
      name: name,
      email: email,
      tags: tags,
    };

    const response = await fetch("http://localhost:3000/api/wiki", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(articleData),
    });

    const data = await response.json();

    setIsAddingArticle(false);
  }

  return (
    <form className="align-form" onSubmit={handleSubmit}>
      <h2>Add a Page</h2>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Article Content"
      />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Author Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Author Email"
      />
      <input
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags"
      />
      <br />
      <button className="confirm-green" type="submit">
        Create Page
      </button>
      <button
        className="delete-red"
        type="button"
        onClick={() => setIsAddingArticle(false)}
      >
        Cancel
      </button>
    </form>
  );
}
