import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { Article } from "./Article";
import { AddArticle } from "./AddArticle";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [article, setArticle] = useState(undefined);
  const [isAddingArticle, setIsAddingArticle] = useState(false);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, [isAddingArticle, article]);

  function resetArticle() {
    setArticle(undefined);
  }

  return (
    <main>
      <h1 onClick={resetArticle} className="header-underline">
        WikiVerse
      </h1>
      {isAddingArticle ? (
        <AddArticle setIsAddingArticle={setIsAddingArticle} />
      ) : article ? (
        <>
          <Article slug={article} resetArticle={resetArticle} />
        </>
      ) : (
        <>
          <PagesList
            pages={pages}
            setArticle={setArticle}
            setIsAddingArticle={setIsAddingArticle}
          />
        </>
      )}
    </main>
  );
};
