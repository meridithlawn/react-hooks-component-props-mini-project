import React from "react";
import ArticleList from "./ArticleList";

function getEmoji(minutes) {

    let emoji = minutes < 30 ? "☕️" : "🍱"
    let interval = minutes < 30 ? 5 : 10

    let emojires = ""
    for(let i = 0; i < minutes; i += interval) {
        emojires += emoji
    }
    return emojires
}


function Article({title, date = "January 1, 1970", preview, minutes}) {
    const emoji = getEmoji(minutes)
    return (
        <article>
            <h3> {title} </h3>
            <small> {date} {emoji} {minutes} min to read </small>
            <p> {preview} </p>

        </article>
    )
}

export default Article;