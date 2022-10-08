/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { render, RenderResult } from "@testing-library/react"
import { SwitchListViewItem } from "../SwitchListViewItem"

describe("Todo Item", () => {
  const title = "FOO!"
  const todoItem: RenderResult = render(<SwitchListViewItem title={title} />)
  it("displays item title", () => {
    todoItem.getByText(title)
  })
})
