import React from "react";

export function DeleteArticle({ slug, resetArticle }) {
  async function deleteRequest() {
    const choice = confirm(
      "You are about to delete this page, press OK to continue"
    );
    if (choice) {
      const response = await fetch(`http://localhost:3000/api/wiki/${slug}`, {
        method: "DELETE",
      });
      const data = response.json();
      resetArticle();
    }
  }

  return (
    <button onClick={deleteRequest} className="delete-red">
      Delete This Page
    </button>
  );
}
