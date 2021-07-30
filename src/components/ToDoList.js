import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  addTodos /* removeTodos, updateTodos, completeTodos */,
} from '../redux/reducer'
import DisplayTodos from './DisplayTodos'
const mapStateToProps = (state) => ({
  todos: state,
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (obj) => dispatch(addTodos(obj)),
  // removeTodo: (id) => dispatch(removeTodos(id)),
  // updateTodo: (obj) => dispatch(updateTodos(obj)),
  // completeTodo: (id) => dispatch(completeTodos(id))
})

const ToDoList = (props) => {
  const [todo, setTodo] = useState('')

  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  // console.log('props from store', props);

  const add = () => {
    if (todo === '') {
      // todo: implement warning message
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      })
      setTodo('')
    }
  }
  return (
    <>
      <div className="addTodos">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className="todo-input"
          value={todo}
        />

        <button className="add-btn" type="button" onClick={() => add()}>
          Add
        </button>
        <br />
      </div>
      <DisplayTodos />
    </>
  )
}

ToDoList.propTypes = {
  addTodo: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
