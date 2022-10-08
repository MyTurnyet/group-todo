import {render, screen} from "@testing-library/react"
import {TodoList} from "../TodoList"

describe("TodoList", () => {
    beforeEach(() => {
        render(<TodoList title="Something New"/>)
    })
    it("displays title", () => {
        screen.getByText("Something New")
    })
    it('shows one item', () => {
        screen.getByText('todo item 1')
    });
})
