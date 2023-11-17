import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";

export const Page = ({ page, setArticle }) => {
  const [data, setData] = useState();

  async function getArticle(slug) {
    setArticle(slug);
  }

  return (
    <>
      <h3 onClick={() => getArticle(page.slug)}>{page.title}</h3>
    </>
  );
};
