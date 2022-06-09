import "./SkeletonLoad.css";

const SkeletonLoad = () => {
  return (
    <section className='skeleton__box'>
      <div className='box one'></div>
      <div className='box two'></div>
      <div className='box three'></div>
      <div className='inner__skeleton'>
          <div className='box four'></div>
          <div className='box five'></div>
          <div className='box six'></div>
          <div className='box seven'></div>
          <div className='box eight'></div>
          <div className='box nine'></div>
      </div>
    </section>
  );
};

export default SkeletonLoad;
