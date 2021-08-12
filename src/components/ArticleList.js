import React from "react";
import Article from "./Article"

function ArticleList({posts}) {
    const articleArray = posts.map((post) => {
        return(
        <Article 
            id={post.id} 
            title={post.title} 
            date={post.date} 
            preview={post.preview}
            minutes={post.minutes}
        />
        )
    })
    
    return (
        <main>
            {articleArray}
        </main>
    )
}

// console.log(posts)
export default ArticleList;