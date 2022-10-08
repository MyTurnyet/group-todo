import { render, screen } from "@testing-library/react"
import { TodoList } from "../TodoList"

describe("TodoList", () => {
  it("displays title", () => {
    render(<TodoList title="Something New" items={[]} />)
    screen.getByText("Something New")
  })
  it("shows one item", () => {
    render(<TodoList title="Something New" items={["todo item 1"]} />)
    screen.getByText("todo item 1")
  })

  it("shows two items", () => {
    const items = ["todo item 1", "todo item 2"]

    render(<TodoList title="Something New" items={items} />)
    screen.getByText(items[0])
    screen.getByText(items[1])
  })
})
