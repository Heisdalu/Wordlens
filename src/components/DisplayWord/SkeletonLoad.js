import "./SkeletonLoad.css";

const SkeletonLoad = (props) => {
  const dark_skeleton = props.mode ? "dark_skeleton" : "";
  const dark_inner_skeleton = props.mode ? "dark_inner__skeleton" : "";

  return (
    <section className={`skeleton__box ${dark_skeleton}`}>
      <div className="box one"></div>
      <div className="box two"></div>
      <div className="box three"></div>
      <div className={`inner__skeleton ${dark_inner_skeleton}`}>
        <div className="box four"></div>
        <div className="box five"></div>
        <div className="box six"></div>
        <div className="box seven"></div>
        <div className="box eight"></div>
        <div className="box nine"></div>
      </div>
    </section>
  );
};

export default SkeletonLoad;
