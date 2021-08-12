import React from "react";

function Article({title, date = "January 1, 1970", preview, minutes}) {
    const emoji = function() {
        let emojiToAdd;
        let numberEmoji;
        let emojiToReturn = ""
        if (minutes <30) {
            numberEmoji = Math.ceil(minutes/5);
            emojiToAdd = "☕️"
        } else {
            numberEmoji = Math.ceil(minutes/10);
            emojiToAdd = "🍱"
        }
        for (let i = 0; i < numberEmoji; i++) {
            emojiToReturn += emojiToAdd;
        }
        return emojiToReturn
    }
    // console.log(emoji())
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} · {emoji()}{" "+ minutes + " min read"}</small>
            <p>{preview}</p>                
        </article>
    )
}

export default Article;