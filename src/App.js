import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Navbar from "./Navbar";
import Contact from "./Contact";
import News from "./News";
import About from "./About";
import Timer from "./Timer";
import Applypy from "./Applypy";
import Applyjs from "./Applyjs";
import Increment from "./Increment";
import UseState from "./UseState";
import UseStateArray from "./UseStateArray";
import SpreadOperator from "./SpreadOperator";
import Todolist from "./Todolist";
import ShortcirEval from "./ShortcirEval";
import UseEffect from "./UseEffect";
import UseEffectCleanup from "./UseEffectCleanup";
import Uncontrolled from "./uncontrolled";
import Practice from "./Practice";





function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/applyjs" element={<Applyjs />} />
        <Route path="/applypy" element={<Applypy />} />
        <Route path="/increment" element={<Increment />} />
        <Route path="/useState" element={<UseState />} />
        <Route path="/useStateArray" element={<UseStateArray />} />
        <Route path="/spreadOperator" element={<SpreadOperator />} />
        <Route path="/todolist" element={<Todolist />} />
        <Route path="/shortcirEval" element={<ShortcirEval />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useEffectCleanup" element={<UseEffectCleanup />} />
        <Route path="/uncontrolled" element={<Uncontrolled />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </div>
  );
}

export default App;
