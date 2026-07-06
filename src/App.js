import { Routes, Route } from "react-router-dom";
import Home from "./js/Home";
import PostDetails from "./js/PostDetails";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;