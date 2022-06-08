import "./App.css";
import Header from "./components/Header/Header";
import SearchWord from "./components/SearchWord/SearchWord";
import DisplayWord from "./components/DisplayWord/DisplayWord";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <section className="main-Container">
      <Header />
      <section className="sub_container">
        <SearchWord />
        <DisplayWord />
      </section>
      <Footer />
    </section>
  );
}

export default App;
