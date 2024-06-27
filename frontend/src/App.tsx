import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home";

function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />}/>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
