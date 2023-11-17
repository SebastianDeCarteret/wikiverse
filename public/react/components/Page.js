import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";

export const Page = ({ page, setArticle }) => {
  const [data, setData] = useState();
  // const [isPageOpen]

  // useEffect(() => {
  //   getArticle();
  // }, []);

  async function getArticle(slug) {
    // const link = `http://localhost:3000/api/wiki/${props.page.title}`;
    // const link = `http://localhost:3000/api/wiki/first_page`;
    // // console.log(link);
    // const response = await fetch(link);
    // // console.log(response);
    // const dataJSON = await response.json();
    // setData(dataJSON);
    setArticle(slug);
    console.log(slug);
  }

  return (
    <>
      <h3 onClick={() => getArticle(page.slug)}>{page.title}</h3>
    </>
  );
};
