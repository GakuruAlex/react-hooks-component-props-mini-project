import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
const articlePost=posts.map((details)=>{
    return <Article
        key={details.id}
        title ={details.title}
        date={details.date}
        preview={details.preview}
        minutes = {details.minutes}
        />

});
 return (
   <main>{articlePost}</main>
  )
}



export default ArticleList;