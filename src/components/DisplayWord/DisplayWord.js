import "./DisplayWord.css";
import SkeletonLoad from "./SkeletonLoad";
import WordContent from "./WordContent";

const DisplayWord = () => {
  return (
    <section className="word__container">
      <SkeletonLoad />
      {/* <WordContent /> */}

    </section>
  );
};

export default DisplayWord;
