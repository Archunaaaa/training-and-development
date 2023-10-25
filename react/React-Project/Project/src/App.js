import ReactDOM from "react-dom/client";
import Layout from "./Layout/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Form from "./Component/Page/Usereducer/Normal/Form";
import List from "./Component/Page/Usereducer/Normal/LIst";
import Forms from "./Component/Page/Usestate/Normal/List";
import House from "./Component/Page/Home/House";
// import { Contact } from "./Contact";
// import About from "./About";
// import { NoPage } from "./NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<House />} /> */}
            <Route path="/Use reducer" element={<List />} />
            <Route path="/house" element={<House />} />
            <Route path="Use state" element={<Forms />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
