import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchWord from "./components/SearchWord/SearchWord";
import DisplayWord from "./components/DisplayWord/DisplayWord";
import Footer from "./components/Footer/Footer";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState("");

  const [isDark, setIsDark] = useState(false);

  const changeMode = () => {
    setIsDark(prevState => !prevState);
  } 

  const clearErrorPage = () => {
    setIsError(false)
    setSearchValue('')
  }

  const inputHandler = (word) => {
    if (word.length > 0) {
      setSearchValue(() => word);
    }
  };

  useEffect(() => {
    if (searchValue.length > 0) {
      const getWord = async (word) => {
        try {
          setIsLoading(true);
          const data = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
          );

          if (!data.ok) {
           setIsError(true)
            throw new Error("Not found");
          }
          const response = await data.json();
          setIsLoading(() => false);
          setIsError(() => false);
          setData(response);
        } catch (err) {
          setIsLoading(() => false);
          setIsError(true)
          setData(err.message)
        }
      };

      getWord(searchValue);
    }
  }, [searchValue]);

  const mainContainer_dark = isDark ? 'dark_main_container' : '';
  const sub_container_dark = isDark ? 'dark_sub_container' : '';
  return (
    <section className={`main-Container ${mainContainer_dark}`}>
      <Header modeHandler={changeMode} mode={isDark} />
      <section className={`sub_container ${sub_container_dark}`}>
        <SearchWord onClick={inputHandler} mode={isDark} value={searchValue} />
        <DisplayWord
          loading={isLoading}
          wordDetail={data}
          error={isError}
          mode ={isDark}
          clearError= {clearErrorPage}
        />
      </section>
      <Footer mode={isDark}/>
    </section>
  );
}

export default App;
