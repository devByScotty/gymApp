import "./App.css";
import Exercises from "./components/Exercises/Exercises";
import Home from "./components/Home/Home";
import Programs from "./components/Programs/Programs";
import Faqs from "./components/FAQS/Faqs";
import Contact from "./components/Contact/Contact";




function App() {
  return (
    <div className="App">
    <Home />
    <Programs />
    <Exercises />
    <Faqs />
    <Contact />
    </div>
  )
}

export default App;