import { TodoItem } from "./TodoItem"

interface TodoListProps {
  title: string
  items: string[]
}

export const TodoList = ({ title, items }: TodoListProps) => {
  return (
    <>
      <div>{title}</div>
      {items.map((item) => (
        <TodoItem key={item} title={item} />
      ))}
    </>
  )
}
