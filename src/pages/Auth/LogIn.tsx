import AuthForm from "../../components/auth/Form";
import ImageHolder from "../../components/common/imageHolder";

const Login = () => {
  return (
    <section className="login">
      <div className="container">
        <section className="illustration">
          <img src="/logo.svg" alt="lendsqr-logo" className="logo" />
          <div>
            <ImageHolder
              imageUrl="/login-illustration.svg"
              className="image-illustration"
            />
            {/* <img src="/login-illustration.svg" alt="login-illustration" /> */}
          </div>
        </section>
        <section className="form">
          {/* logo on small devices */}
          <img src="/logo.svg" alt="lendsqr-logo" className="logo" />
          <AuthForm />
        </section>
      </div>
    </section>
  );
};

export default Login;
