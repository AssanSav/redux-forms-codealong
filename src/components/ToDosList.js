import React from "react"
import ToDoItem from "./ToDoItem"


const ToDosList = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo, index) => <li key={index}><ToDoItem todo={todo}/></li>)}
        </ul>
     
    )
}

export default ToDosList