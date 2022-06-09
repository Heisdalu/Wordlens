import "./DisplayWord.css";
import SkeletonLoad from "./SkeletonLoad";
import WordContent from "./WordContent";
import ErrorPage from "./ErrorPage";

const DisplayWord = (props) => {
  const error =
    (props.wordDetail === "Failed to fetch" ||
      props.wordDetail === "Not found") &&
    !props.loading;

  return (
    <section className="word__container">
      {props.loading && <SkeletonLoad />}
      {error ? <ErrorPage /> : ""}

      {!props.loading && !error && <WordContent data={props.wordDetail} />}
    </section>
  );
};

export default DisplayWord;
