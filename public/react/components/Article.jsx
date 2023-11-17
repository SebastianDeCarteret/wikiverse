import React, { useEffect, useState } from "react";
import { DeleteArticle } from "./DeleteArticle";

export function Article({ slug, resetArticle }) {
  const [articleData, setArticleData] = useState();

  useEffect(() => {
    getArticleData();
  }, []);

  async function getArticleData() {
    const response = await fetch(`http://localhost:3000/api/wiki/${slug}`);
    const data = await response.json();
    setArticleData(data);
  }

  const loaded = () => (
    <>
      <div className="article">
        <h1>{articleData.title}</h1>
        <p>
          <b>Auther:</b> {articleData.author.name}
        </p>
        <p>
          <b>Published:</b>{" "}
          {articleData.createdAt
            .slice(0, articleData.createdAt.lastIndexOf("T"))
            .split("-")
            .reverse()
            .join("/")}
        </p>
        <p>{articleData.content}</p>
        <p>
          <b>Tags:</b>
        </p>
        {articleData.tags.map((tag) => (
          <p key={tag.id}>{tag.name}</p>
        ))}
      </div>
      <br />
      <button onClick={resetArticle}>Back to Wiki List</button>
      <> </>
      <DeleteArticle slug={slug} resetArticle={resetArticle}></DeleteArticle>
    </>
  );
  return <>{articleData ? loaded() : "loading"}</>;
}
