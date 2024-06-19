import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthForm from "../components/auth/Form";
import Login from "../pages/Auth/LogIn";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn()
}));

describe("Login Component", () => {
  test("renders the Login component correctly", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    expect(screen.getAllByAltText(/lendsqr-logo/i)).toHaveLength(2);

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();

    expect(screen.getByText(/LOG IN/i)).toBeInTheDocument();
  });

  test("shows error messages for empty fields on submit", async () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    const loginButton = screen.getByText(/LOG IN/i);

    fireEvent.click(loginButton);

    expect(
      screen.getByRole("alert", { name: /email error/i })
    ).toHaveTextContent("Please enter your email");
    expect(
      screen.getByRole("alert", { name: /password error/i })
    ).toHaveTextContent("Please enter your password");
  });

  test("toggles password visibility", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const toggleButton = screen.getByText(/SHOW/i);

    expect(passwordInput).toHaveAttribute("type", "password");

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  test("enter a value", async () => {
    render(
      <Router>
        <AuthForm />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);

    fireEvent.change(emailInput, { target: { value: "admin123@gamil.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
  });
});
