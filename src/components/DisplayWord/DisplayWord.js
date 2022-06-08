import "./DisplayWord.css";
import SkeletonLoad from "./SkeletonLoad";
import WordContent from "./WordContent";
import ErrorPage from "./ErrorPage";

const DisplayWord = () => {
  return (
    <section className="word__container">
      {/* <SkeletonLoad /> */}
      <ErrorPage />
      {/* <WordContent /> */}

    </section>
  );
};

export default DisplayWord;
