import React, { useState  } from "react"
import { connect } from "react-redux"
import { addTodos, removeTodos, updateTodos, completedTodos } from './redux/reducer'
import TodoItem from "./TodoItem"

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completedTodo: (id) => dispatch(completedTodos(id))
    }
}

const DisplayTodos = (props) => {
    const [sort, setSort] = useState('active')
    return (
        <div className='displaytodos'>
            <div className='buttons'>
                <button onClick={() => setSort('active')}>Active</button>
                <button onClick={() => setSort('completed')}>Copmleted</button>
                <button onClick={() => setSort('all')}>All</button>
            </div>
            <ul>
                {props.todos.length > 0 && sort === 'active' 
                    ? props.todos.map((item) => {
                        return (
                            item.completed === false && (
                            <TodoItem 
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                            )
                        )
                    }) 
                : null}
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos)