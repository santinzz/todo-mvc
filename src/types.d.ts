import { type TODO_FILTERS } from './consts'

export interface Todo {
  id: `${string}-${string}-${string}-${string}-${string}`
  title: string
  completed: boolean
}

export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
