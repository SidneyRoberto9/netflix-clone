import { AuthContext } from "./context/authContext/AuthContext";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useContext } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.scss";

const App = () => {
  const { state } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            state.user ? <Home type={"movies"} /> : <Navigate to="/register" />
          }
        />

        <Route
          path="/login"
          element={!state.user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!state.user ? <Register /> : <Navigate to="/" />}
        />

        {state.user && (
          <>
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/series" element={<Home type="serie" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
