import React from "react";
import { Page } from "./Page";

export const PagesList = ({ pages, setArticle, setIsAddingArticle }) => {
  return (
    <>
      <h2>An interesting 📚</h2>
      <br />
      {pages.map((page, idx) => {
        return <Page page={page} key={idx} setArticle={setArticle} />;
      })}
      <br />
      <button onClick={() => setIsAddingArticle(true)}>Add a Page</button>
    </>
  );
};
