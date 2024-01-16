import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoForm() {
  const [todo, setTodo] = useState('')
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()

    if (!todo) return
    addTodo({ todo, completed: false })
    setTodo('')
  }
  return (
    <form onSubmit={add} className="flex bg-white">
      <input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value)
        }}
        placeholder="Write Todo..."
        className="w-full border text-gray-900 shadow-[1px_1px_0px_1px_#353535] rounded-l-md px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="px-3 py-1 shadow-[1px_1px_0px_1px_#353535] bg-red-500 rounded-r-md text-white shrink-0"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm
