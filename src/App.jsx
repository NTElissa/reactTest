import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Add } from "./component/HomePage";
import Search from "./component/SearchPage";
import Button from "./component/ButtonPage";
import Submit from "./component/SubmitPage";
import ImagePhoto from "./component/ImagePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Add/>} />
            <Route path="/DisplayImage" element={<ImagePhoto/>} />
            <Route path="/DisplayButton" element={<Button/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
