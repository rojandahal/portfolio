import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
  Outlet,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Menu from "./components/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./pages/404/PageNotFound";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutMe />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  const [navBg, setnavBg] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (!(location.pathname === "/")) {
      setnavBg("colored");
    } else setnavBg("");
  }, [location]);

  return (
    <>
      <Menu background={navBg} />
      <Outlet />
      <Footer />
      {/* componentharu */}
    </>
  );
}

export default App;
