import { pizzaData } from "./assets/data";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}

export default App;
