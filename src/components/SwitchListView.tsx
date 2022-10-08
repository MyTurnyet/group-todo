import { SwitchListViewItem } from "./SwitchListViewItem"

interface TodoListProps {
  title: string
  items: string[]
}

export const SwitchListView = ({ title, items }: TodoListProps) => {
  return (
    <>
      <div>{title}</div>
      {items.map((item) => (
        <SwitchListViewItem key={item} title={item} />
      ))}
    </>
  )
}
