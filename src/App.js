import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchWord from "./components/SearchWord/SearchWord";
import DisplayWord from "./components/DisplayWord/DisplayWord";
import Footer from "./components/Footer/Footer";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDataValid, setisDataValid] = useState(false);
  const [data, setData] = useState("");

  const inputHandler = (word) => {
    if (word.length > 0) {
      setSearchValue(word);
    }
  };

  useEffect(() => {
    if (searchValue.length > 0) {
      const getWord = async (word) => {
        console.log("ff");
        try {
          setIsLoading(true);
          const data = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
          );

          if (!data.ok) {
            throw new Error("Not found");
          }
          const response = await data.json();
          setIsLoading(false);
          setisDataValid(true);
          setData(response);
        } catch (err) {
          console.log(err.message);
          setisDataValid(false);
          return err.message;
        }
      };

      getWord(searchValue);
    }
  }, [searchValue]);

  return (
    <section className="main-Container">
      <Header />
      <section className="sub_container">
        <SearchWord onClick={inputHandler} />
        <DisplayWord
          loading={isLoading}
          WordDetail={data}
          dataValid={isDataValid}
        />
      </section>
      <Footer />
    </section>
  );
}

export default App;
