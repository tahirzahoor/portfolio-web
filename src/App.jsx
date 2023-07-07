import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layout/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Projects from "./layout/Projects";
import ProjectDetail from "./layout/ProjectDetail";
import { Box } from "@chakra-ui/react";


function App() {
  

  return (
    <Router>
      <Header />
      <Box px={{base:"5", lg:"16"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
