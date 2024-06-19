import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Auth/LogIn";
import ProtectedRoute from "./components/hoc/protectedRoute";
import withMainLayout from "./components/layout/mainLayout";
import Users from "./pages/Users";
import UserDetails from "./pages/Users/userdetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route index path="/users" Component={withMainLayout(Users)} />
          <Route
            path="user-details/:userId"
            Component={withMainLayout(UserDetails)}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
