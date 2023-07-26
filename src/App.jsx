import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Classes from "./components/Classes";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <div className="border-t-2"></div>
      <Classes />
      <Footer />
    </div>
  );
}

export default App;
