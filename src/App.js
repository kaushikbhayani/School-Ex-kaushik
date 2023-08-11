import Home from "./Page/Home";

import Aboute from "./Page/Aboute";
import Academics from "./Page/Academics";
import Admission from "./Page/Admission";
import Facilities from "./Page/Facilities";
import Gallery from "./Page/Gallery";
import Downloads from "./Page/Downloads";
import Blog from "./Page/Blog";
import Contact from "./Page/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Layoute/FooterComponent/Footer";
import DrawerAppBar from "./Layoute/HeaderComponent/DrawerAppBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboute" element={<Aboute />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
