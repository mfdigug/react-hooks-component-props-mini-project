import React from 'react'
import Article from './Article'

function ArticleList({ posts }) {
    const articles = posts.map((postObj) => {
            return (
            <Article 
                key={postObj.id} 
                title={postObj.title} 
                date={postObj.date} 
                preview={postObj.preview} 
                minutes={postObj.minutes}
            />
        )
    })

  return (
    <main>
        {articles}
    </main>
  )
}

export default ArticleList