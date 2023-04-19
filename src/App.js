import "./App.css";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Menu from "./components/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
      {/* componentharu */}
    </>
  );
}

export default App;
