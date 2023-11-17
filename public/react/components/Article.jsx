import React, { useEffect, useState } from "react";

export function Article({ slug }) {
  const [articleData, setArticleData] = useState();

  useEffect(() => {
    getArticleData();
  }, []);

  async function getArticleData() {
    const response = await fetch(`http://localhost:3000/api/wiki/${slug}`);
    const data = await response.json();
    setArticleData(data);
    console.log(articleData);
  }

  const loaded = () => (
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
  );
  return (
    <>{articleData ? loaded() : "loading"}</>
    // <div className="article">
    //   <h1>{articleData.title}</h1>
    // </div>
    //   <p>{JSON.stringify(articleData)}</p>);
  );
}
