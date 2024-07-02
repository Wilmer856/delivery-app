import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { useAuthContext } from "./hooks/useAuthContext";
import AdminDashboard from "./pages/AdminDashboard";
import NavBar from "./components/NavBar";

function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        {user && <NavBar />}
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <AdminDashboard /> : <Navigate to="/login" />}/>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
