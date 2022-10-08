import { render, screen } from "@testing-library/react"
import { TodoList } from "../TodoList"

describe("TodoList", () => {
  it("displays title", () => {
    render(<TodoList title="Something New" />)
    screen.getByText("Something New")
  })
})
