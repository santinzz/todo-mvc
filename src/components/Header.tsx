import { type Todo } from '../types.d'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: (title: Todo['title']) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>todo<img
      style={{ width: '70px', height: '70px' }}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"/></h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
