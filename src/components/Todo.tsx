import { type Todo as TodoType } from '../types.d'

interface Props extends TodoType {
  onRemoveTodo: (id: TodoType['id']) => void
  onCompleted: (id: TodoType['id']) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onCompleted }) => {
  const handleClick = (): void => {
    onRemoveTodo(id)
  }

  const handleChange = (): void => {
    onCompleted(id)
  }

  return (
    <div className='view'>
      <input className='toggle' type='checkbox' checked={completed} onChange={handleChange}/>
      <label>{title}</label>
      <button className='destroy' onClick={handleClick}></button>
    </div>
  )
}
