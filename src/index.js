import React from "react"
import ReactDOM from "react-dom"
import faker from "@faker-js/faker"
import CommentDetail from "./CommentDetail"

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 9:37AM"
        content="Great post!"
        avatar={faker.image.image(128, 128)}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 11:51AM"
        content="Thanks!"
        avatar={faker.image.image(128, 128)}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 4:42AM"
        content="Wow!"
        avatar={faker.image.image(128, 128)}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
