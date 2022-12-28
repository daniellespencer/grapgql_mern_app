import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders ProjectMgmt nav link", () => {
  render(<App />)
  const navElement = screen.getByText(/ProjectMgmt/i)
  expect(navElement).toBeInTheDocument()
})
