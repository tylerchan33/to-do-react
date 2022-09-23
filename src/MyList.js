import React, { Component } from "react"
import "./App.css"
import ListItem from "./ListItem"

const theList = ["buy eggs", "do laundry", "call her"]

class MyList extends Component {
  render() {
    const todoItems = theList.map((todo, index) => {
      return (
        <ListItem 
        task={todo}
        key={`todo${index}`}
        />
      )
    })
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    )
  }
}

export default MyList