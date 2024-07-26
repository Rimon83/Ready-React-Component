import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import MainText from "./textAnimation";
import HomePage from "./headers";
import CardPage from "./card";

function Layout() {
  const {pathname} = useLocation()
  
  return (
    <section className="section__container">
      <nav className="section__nav">
        <Link
          className={`link ${
            pathname === "/headers" || pathname === "/" ? "active" : ""
          }`}
          to="/headers"
        >
          Headers
        </Link>
        <Link
          className={`link ${pathname === "/textAnimation" ? "active" : ""}`}
          to="/textAnimation"
        >
          Text Animation
        </Link>
        <Link
          className={`link ${pathname === "/card" ? "active" : ""}`}
          to="/card"
        >
          Card
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/headers" element={<HomePage />} />
          <Route path="/textAnimation" element={<MainText />} />
          <Route path="/card" element={<CardPage />} />
        </Routes>
      </main>
    </section>
  );
}

function App() {
  return (
    <section>
      <Layout />
    </section>
  );
}

export default App;
