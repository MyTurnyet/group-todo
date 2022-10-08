import { TodoItem } from "./TodoItem"

export const TodoList = (props: { title: string; items: string[] }) => {
  return (
    <>
      <div>{props.title}</div>
      {props.items.map((item) => (
        <TodoItem key={item} title={item} />
      ))}
    </>
  )
}
