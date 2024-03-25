import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError(); 
    return (
      <div className="text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to='/'><button className="btn">Go to Back</button></Link>
      </div>
    );
  }

export default ErrorPage;