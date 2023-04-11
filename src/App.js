import "./App.css";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* componentharu */}
    </>
  );
}

export default App;
