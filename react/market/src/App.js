import "./App.css";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Contact } from "./Contact";
import About from "./About";
import { NoPage } from "./NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );  
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;

