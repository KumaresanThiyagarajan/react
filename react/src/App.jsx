import Counter from "./components/Counter.jsx"
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import { Routes, Route } from "react-router-dom";
import Hooks from './components/Hooks.jsx'
import State from "./components/Hooks/State.jsx";
import Effect from "./components/Hooks/Effect.jsx";
import Login from "./components/Login.jsx"
import Ref from "./components/Hooks/Ref.jsx"
import Reducer from "./components/Hooks/Reducer.jsx"
import image from '../src/assets/img.jpg'

const App = () => {
  var fruits = ["Apple", "Banana", "Cherry"];
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home name="Logan" />} />
        <Route path="/about" element={<About/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/hooks" element={<Hooks/>} />
        <Route path="/state" element={<State/>}/>
        <Route path="/effect" element={<Effect/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Ref" element={<Ref/>}/>
        <Route path="/Reducer" element={<Reducer/>}/>
      </Routes>
       <img src={image} alt="react"/>
    </>


  )
}
export default App