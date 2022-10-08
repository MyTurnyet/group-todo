import { render, screen } from "@testing-library/react"
import { SwitchListView } from "../SwitchListView"

describe("TodoList", () => {
  const renderTodoList = (title: string, items: string[]) => {
    render(<SwitchListView title={title} items={items} />)
  }

  it("displays title", () => {
    renderTodoList("Something New", [])
    screen.getByText("Something New")
  })
  it("shows one item", () => {
    renderTodoList("Something New", ["todo item 1"])
    screen.getByText("todo item 1")
  })

  it("shows two items", () => {
    const items = ["todo item 1", "todo item 2"]
    renderTodoList("Something New", items)
    screen.getByText(items[0])
    screen.getByText(items[1])
  })
})
