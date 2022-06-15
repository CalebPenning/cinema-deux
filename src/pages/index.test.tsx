import { render } from "@testing-library/react"
import IndexPage from "./index.page"

describe("Index page", () => {
	test("Should say hello world", () => {
		const { getByText } = render(<IndexPage />)

		const helloWorld = getByText("Hello World", { exact: true })

		expect(helloWorld).toBeInTheDocument()
	})

	test("Should say my name", () => {
		const { getByText } = render(<IndexPage />)

		const name = getByText("Caleb Penning", { exact: false })

		expect(name).toBeInTheDocument()
	})
})
