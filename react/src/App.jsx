import Counter from "./components/Counter.jsx"
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import { Routes, Route } from "react-router-dom";
import Hooks from './components/Hooks.jsx'
import State from "./components/Hooks/State.jsx";
import Effect from "./components/Hooks/Effect.jsx";
import Login from "./components/Login.jsx"



const App = () => {
  var fruits = ["Apple", "Banana", "Cherry"];
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home items={fruits} />} />
        <Route path="/about" element={<About/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/hooks" element={<Hooks/>} />
        <Route path="/state" element={<State/>}/>
        <Route path="/effect" element={<Effect/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>


  )
}
export default App