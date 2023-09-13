// import "./WebsiteBerita/Style.css";
// import Navigation from "./WebsiteBerita/Navigation";
// import Content from "./WebsiteBerita/Content";
// import Projects from "./WebsiteBerita/Projects";
// import About from "./WebsiteBerita/About";
// import Contact from "./WebsiteBerita/Contact";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

import Redux from "./Redux";

const Component = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter> */}
      <Redux></Redux>
    </div>
  );
};

export default Component;
