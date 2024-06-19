import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Errors = {
  email?: string;
  password?: string;
};

export type LoginData = {
  email: string;
  password: string;
};

const AuthForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as LoginData;

    // Validate form data
    if (!data.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Please enter your email" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: undefined }));
    }

    if (!data.password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Please enter your password" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: undefined }));
    }

    if (data.email && data.password) {
      setLoading(false);
      navigate('/users');
    } else {
      setLoading(false);
    }
  };

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <section>
      <div className="auth-header">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="email" name="email" placeholder="Email" />

          {errors.email && (
            <span role="alert" aria-label="email error" className="input-error">
              {errors.email}
            </span>
          )}
        </div>

        <div>
          <div className="input-password">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            <p className="password-visible" onClick={toggleVisibility}>
              {showPassword ? "HIDE" : "SHOW"}
            </p>
          </div>

          {errors.password && (
            <span role="alert" aria-label="password error" className="input-error">
              {errors.password}
            </span>
          )}
        </div>

        <p>FORGOT PASSWORD?</p>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "LOG IN"}
        </button>
      </form>
    </section>
  );
};

export default AuthForm;
