import "./DisplayWord.css";
import SkeletonLoad from "./SkeletonLoad";
import WordContent from "./WordContent";
import ErrorPage from "./ErrorPage";

const DisplayWord = (props) => {
  const error =
    (props.wordDetail === "Failed to fetch" ||
      props.wordDetail === "Not found") &&
    !props.loading;

  const dark_border = props.mode ? "dark_word_container" : "";

  return (
    <section className={`word__container ${dark_border}`}>
      {props.loading && <SkeletonLoad mode={props.mode}/>}
      {error ? <ErrorPage mode={props.mode} /> : ""}

      {!props.loading && !error && <WordContent data={props.wordDetail} />}
    </section>
  );
};

export default DisplayWord;
