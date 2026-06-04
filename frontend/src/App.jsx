import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import Admin from "./pages/adminPages/Admin";
import Aboutme from "./pages/AboutMe";

// project pages
import Pythoncli from "./pages/projectPages/pythoncli";
import JavaGame from "./pages/projectPages/JavaGame";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Pages WITH navbar/footer */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/aboutme"
        element={
          <MainLayout>
            <Aboutme />
          </MainLayout>
        }
      />
      <Route
        path="/project"
        element={
          <MainLayout>
            <Project />
          </MainLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />
      <Route
        path="/dashboard" element={
          <MainLayout>
            <Admin />
          </MainLayout>
        }
      />

      {/* project pages */}

      <Route path="/pythoncli" element={
        <MainLayout>
          <Pythoncli />
        </MainLayout>
      } />

      <Route path="/javagame" element={
        <MainLayout>
          <JavaGame />
        </MainLayout>
      } />
    </Routes>
  );
}

export default App;