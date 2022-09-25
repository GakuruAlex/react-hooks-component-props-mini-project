import React from 'react'


function minutesRead(minutes){
    console.log(minutes)
    const time = minutes <=30 ? 5 : 10
    console.log(time)
    const emoji = minutes < 30 ? "☕️ " : "🍱";

    let emojis = ""
    for (let i = 0; i < minutes; i += time) {
      emojis += emoji;
    }
    return emojis
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
const minutesBonus=minutesRead(minutes);
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}.{minutesBonus}{minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;