import React, { Component } from 'react'
import uuid from "uuid"
import { connect } from 'react-redux';
import ToDoList from "./ToDosList"

export class CreateTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      id: ""
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      id: uuid()
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.addToDo(this.state)
    this.setState({
      input: ""
    })
  }

  render() {
    // debugger
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" name="input" onChange={this.handleOnChange} value={this.state.input}></input>
          </p>
          <input type="submit"></input>
        </form>
        <ToDoList todos={this.props.todos}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (formDAta) => dispatch({
      type: "ADD_TODO",
      payload: formDAta,
      id: uuid
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
