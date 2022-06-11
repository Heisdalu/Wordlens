import "./DisplayWord.css";
import SkeletonLoad from "./SkeletonLoad";
import WordContent from "./WordContent";
import ErrorPage from "./ErrorPage";

const DisplayWord = (props) => {

  const errorOccured = props.error ? (
    <ErrorPage mode={props.mode} clearError={props.clearError} />
  ) : (
    ""
  );

  const dark_border = props.mode ? "dark_word_container" : "";

  return (
    <section className={`word__container ${dark_border}`}>
      {props.loading && <SkeletonLoad mode={props.mode}/>}
      {errorOccured}

      {!props.loading && !props.error && <WordContent data={props.wordDetail} />}
    </section>
  );
};

export default DisplayWord;
