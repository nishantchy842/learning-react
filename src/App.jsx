import { Route, Routes } from "react-router-dom";
import Admin from "./page/admin";
import User from "./page/user";
import Login from "./page/login";

const App = () => {
  const role = localStorage.getItem("role");
  console.log(role, "role");

  if (role === "male") {
    return (
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="*" element={<User />} />
      </Routes>
    );
  }
  if (role === "female") {
    return (
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Admin />} />
      </Routes>
    );
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
