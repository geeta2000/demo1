import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Page from "./components/Page";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import Remote from "./components/Remote";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        ></Route>
        <Route
          path="/page"
          element={
            <Layout>
              <Page />
            </Layout>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        ></Route>
        <Route
          path="/remote"
          element={
            <Layout>
              <Remote />
            </Layout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
