import NavBar from "./components/Navbar.js";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <section style={{fontFamily:"HiMelody"}}>
        <NavBar/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
