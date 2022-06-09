import WordVoiceNote from "./WordVoiceNote";
import "./WordContent.css";
import WordList from "./WordList";

const searchedWordDetail = (data) => {

  const wordObj = data.map((el) => ({
    partofSpeech: el.partOfSpeech,
    synonyms: el.synonyms.filter((el) => Boolean(el)).slice(0, 1),
    definitions: el.definitions
      .map((el) => el.definition)
      .filter((el) => Boolean(el))
      .slice(0, 1),
    examples: el.definitions
      .map((el) => el.example)
      .filter((el) => Boolean(el))
      .slice(0, 1),
  }));

  return wordObj;
};

const WordContent = (props) => {
  const [context] = props.data;
  // console.log(context);
  const otherPhonetic = context?.phonetics.map((el) => el.text).at(-1);

  const defaultObj = [
    {
      partofSpeech: "exclamation",
      definitions: "used as a greeting or to begin a phone conversation.",
      examples: "hello there, Katie!",
      synonyms: "",
    },
    {
      partofSpeech: "noun",
      definitions: "an utterance of hello; a greeting.",
      examples: "she was getting polite nods and hellos from people",
      synonyms: "",
    },
    {
      partofSpeech: "verb",
      definitions: "say or shout 'hello'.",
      examples: "I pressed the phone button and helloed",
      synonyms: "",
    },
  ];

  const dataList = context?.meanings
    ? searchedWordDetail(context.meanings)
    : defaultObj;

  return (
    <>
      <h1 className="word__title">{context?.word || "hello"}</h1>
      <section className="word__subContainer">
        <span className="word_translation">
          {context?.phonetic || otherPhonetic || "/he'leu"}
        </span>

        <WordVoiceNote />
      </section>

      {
        <ol className="word__list">
          {dataList.map((el) => (
            <WordList obj={el} key={`${Math.random()}`} />
          ))}
        </ol>
      }
    </>
  );
};

export default WordContent;
