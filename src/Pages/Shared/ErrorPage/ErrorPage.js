import React from "react";
import { FaEarlybirds } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const ErrorResponse = useRouteError();
  console.log(ErrorResponse);
  return (
    <>
      <div className=" text-center">
        <FaEarlybirds className="fa-20x"> </FaEarlybirds>

        <h1 className="mb-8 font-extrabold text-9xl text-gray-600">
          <span className=" text-danger">Error</span>404
        </h1>
        <h3>
          <p className="text-warining">Sorry, we couldn't find this page.</p>
        </h3>
        <Link className="bg-info p-2" to="/">
          Back to homepage
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
