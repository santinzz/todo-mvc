import { useState } from 'react'
import { Todos } from './components/Todos'
import { type FilterValue, type Todo } from './types.d'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodos = [
  {
    id: crypto.randomUUID(),
    title: 'Learn TypeScript',
    completed: true
  },
  {
    id: crypto.randomUUID(),
    title: 'Learn React',
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: 'Learn Node.js',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filter, setFilter] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = (id: Todo['id']): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (id: Todo['id']): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilter(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter((todo) => {
    if (filter === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filter === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = (title: Todo['title']): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo}/>
      <Todos
        onRemoveTodo={handleRemove}
        onCompleted={handleCompleted}
        todos={filteredTodos}
      />
      <Footer
        filterSelected={filter}
        completedCount={completedCount}
        onClearCompleted={handleRemoveAllCompleted}
        activeCount={activeCount}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
