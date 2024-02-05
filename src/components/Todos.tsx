import { type Todo as TodoType, type ListOfTodos } from '../types.d'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: (id: TodoType['id']) => void
  onCompleted: (id: TodoType['id']) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompleted }) => {
  return (
    <ul className='todo-list'>
      {
        todos.map(todo => (
          <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onRemoveTodo={() => { onRemoveTodo(todo.id) }}
              onCompleted={() => { onCompleted(todo.id) }}
            />
          </li>
        ))
      }
    </ul>
  )
}
