import React from "react"
import ReactDOM from "react-dom"
import faker from "@faker-js/faker"
import CommentDetail from "./CommentDetail"
import ApprovalCard from "./ApprovalCard"

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 9:37AM"
          content="Great post!"
          avatar={faker.image.image(128, 128)}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 11:51AM"
          content="Thanks!"
          avatar={faker.image.image(128, 128)}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 4:42AM"
          content="Wow!"
          avatar={faker.image.image(128, 128)}
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
