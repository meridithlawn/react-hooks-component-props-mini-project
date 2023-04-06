import React from "react";
import App from "./App";
import Article from "./Article"

function ArticleList ({posts}) {
    console.log("posts", posts)
    const article = posts.map(eachPost=> (
        <Article
            title = {eachPost.title}
            date = {eachPost.date}
            preview = {eachPost.preview}
            id = {eachPost.id}
            minutes = {eachPost.minutes}
        />
    ))
    return (
        
        <main>
            {article}
        </main>
    );
}
export default ArticleList;