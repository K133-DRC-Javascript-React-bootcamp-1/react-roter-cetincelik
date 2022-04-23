import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Navi from "./pages/Navi";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Navi />}>
           <Route path="" element={<Home/>} /> 
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
