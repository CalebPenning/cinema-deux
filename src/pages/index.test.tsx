import { render } from "@testing-library/react"
import IndexPage from './index.page'

describe("Index page", () => {
	test("should have a nav bar", () => {
    const { getByRole } = render(<IndexPage />)
    const nav = getByRole('navigation')

    expect(nav).toBeInTheDocument()
  })
})

