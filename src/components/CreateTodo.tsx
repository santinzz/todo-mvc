import { useState } from 'react'
import { type Todo } from '../types.d'

interface Props {
  saveTodo: (title: Todo['title']) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (inputValue.trim() === '') return
    saveTodo(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='new-todo'
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
        placeholder='¿Qué quieres hacer?'
        autoFocus
      />
    </form>
  )
}
