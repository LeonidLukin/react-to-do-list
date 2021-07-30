import React, { useRef } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import {
  IoCloudDoneSharp,
  IoClose,
  IoCheckmarkDoneCircle,
} from 'react-icons/io5'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props

  const inputRef = useRef(true)

  const changeFocus = () => {
    inputRef.current.disabled = false
    inputRef.current.focus()
  }

  const update = (id, value, e) => {
    // here 13 is key code for enter key
    if (e.which === 13) {
      updateTodo({ id, item: value })
      inputRef.current.disabled = true
    }
  }

  return (
    <motion.li
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ type: 'string', duration: 1 }}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button type="button" onClick={() => changeFocus()}>
          <AiFillEdit />
        </button>
        <button
          style={{ color: 'green' }}
          type="button"
          onClick={() => completeTodo(item.id)}
        >
          <IoCloudDoneSharp />
        </button>
        <button
          style={{ color: 'red' }}
          type="button"
          onClick={() => removeTodo(item.id)}
        >
          <IoClose />
        </button>
      </div>
      {item.completed && (
        <span className="completed">
          <IoCheckmarkDoneCircle />
        </span>
      )}
    </motion.li>
  )
}
TodoItem.propTypes = {
  item: PropTypes.object,
  updateTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  completeTodo: PropTypes.func,
}

export default TodoItem
