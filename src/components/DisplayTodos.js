import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} from '../redux/reducer'
import TodoItem from './TodoItem'

const mapStateToProps = (state) => ({
  todos: state,
})
const mapDispatchToProps = (dispatch) => ({
  addTodo: (obj) => dispatch(addTodos(obj)),
  removeTodo: (id) => dispatch(removeTodos(id)),
  updateTodo: (obj) => dispatch(updateTodos(obj)),
  completedTodo: (id) => dispatch(completeTodos(id)),
})

const DisplayTodos = (props) => {
  const [sort, setSort] = useState('active')
  return (
    <div className="displaytodos">
      <div className="buttons">
        <button type="button" onClick={() => setSort('active')}>
          Active
        </button>
        <button type="button" onClick={() => setSort('completed')}>
          Copmleted
        </button>
        <button type="button" onClick={() => setSort('all')}>
          All
        </button>
      </div>
      <ul>
        {props.todos.length > 0 && sort === 'active'
          ? props.todos.map(
              (item) =>
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completedTodo}
                  />
                ),
            )
          : null}
        {/* for completed items */}
        {props.todos.length > 0 && sort === 'completed'
          ? props.todos.map(
              (item) =>
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completedTodo}
                  />
                ),
            )
          : null}
        {/* for all items */}
        {props.todos.length > 0 && sort === 'all'
          ? props.todos.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                removeTodo={props.removeTodo}
                updateTodo={props.updateTodo}
                completeTodo={props.completedTodo}
              />
            ))
          : null}
        {/* <DisplayTodos /> */}
      </ul>
    </div>
  )
}

DisplayTodos.propTypes = {
  todos: PropTypes.array,
  removeTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  completedTodo: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos)
