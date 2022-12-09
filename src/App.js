import "./App.css";
import home from "./assets/images/home2.jpg";
import coffeeHome from "./assets/images/tea-leaf.png";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const myStyle = {
    backgroundImage: `url(${home})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <div style={myStyle}>
        <Navbar />
        <div style={{ marginLeft: "36%", marginTop: "5%" }}>
          <img
            style={{ width: "45%", height: "45%", marginTop: "15%" }}
            src={coffeeHome}
          />
          <h1 style={{ color: "#FFBF00", marginLeft: "1%", fontSize: 65 }}>
            <i style={{ marginLeft: "2.5%" }}>
              Bubble Bee <br /> **Coffeèin**
            </i>
          </h1>
        </div>
        <Slider />

        <About />
        <br/>
      </div>
    </>
  );
}

export default App;
