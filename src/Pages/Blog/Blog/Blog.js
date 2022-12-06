import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="border border-2 border-success m-2 p-3">
        <h2> what is cors?</h2>
        <h6>
          Cross-origin resource sharing (CORS) is a browser security feature
          that restricts cross-origin HTTP requests that are initiated from
          scripts running in the browser. If your REST API's resources receive
          non-simple cross-origin HTTP requests, you need to enable CORS
          support.
        </h6>
      </div>
      <div className="border border-2 border-success m-2 p-2">
        <h2>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <h6>
          The Firebase Realtime Database lets you build rich, collaborative
          applications by allowing secure access to the database directly from
          client-side code. Data is persisted locally, and even while offline,
          realtime events continue to fire, giving the end user a responsive
          experience.
        </h6>
        <h6>
          Auth0, MongoDB, Passport, Okta, and Firebase are the most popular
          alternatives and competitors to Firebase Authentication.
        </h6>
      </div>
      <div className="border border-2 border-success m-2 p-2">
        <h2> How does the private route work?</h2>
        <h6>
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in)
        </h6>
      </div>
      <div className="border border-2 border-success m-2 p-2">
        <h2>What is Node? How does Node work?</h2>
        <h6>
          Node.js is an open source, cross-platform runtime environment for
          developing server-side and networking applications. Node.js
          applications are written in JavaScript, and can be run within the
          Node.js runtime on OS X, Microsoft Windows, and Linux. Node.js also
          provides a rich library of various JavaScript modules which simplifies
          the development of web applications using Node.js to a great extent.
        </h6>
      </div>
    </div>
  );
};

export default Blog;
