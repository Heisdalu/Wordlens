import './App.css';
import Header from './components/Header/Header';
import SearchWord from './components/SearchWord/SearchWord';
import DisplayWord from './components/DisplayWord/DisplayWord';

function App() {
  return (
    <section className="main-Container">
      <Header/>
      <SearchWord />
      <DisplayWord />
    </section>
  );
}

export default App;
