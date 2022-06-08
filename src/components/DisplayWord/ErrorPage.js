import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <section className="error">
      <h1 className='error__heading'>
          Opps, Sorry pal, we couldn't find definitions for the word you were looking for.
      </h1>

      <div className='inner__error'>
          <div className='error__number'>404</div>
          <span className='error_sub_heading'>no be juju be that!</span>
      </div>

      <button className='reset'>
          Take Me Home
      </button>
    </section>
  );
};



export default ErrorPage;