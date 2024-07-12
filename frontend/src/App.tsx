import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { useAuthContext } from "./hooks/useAuthContext";
import AdminDashboard from "./pages/AdminDashboard";
import NavBar from "./components/NavBar";
import DriverDashboard from "./pages/DriverDashboard";

function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        {user && <NavBar />}
        <div className="pages">
          <Routes>
            <Route path="/" element={!user ? <Navigate to={"/login"}/> : <Navigate to={"/dashboard"} />}/>
            <Route path="/dashboard" element={user?.role === "admin" ? <AdminDashboard /> : user?.role === "driver" ? <DriverDashboard /> : <Navigate to="/login" />}/>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard"/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
