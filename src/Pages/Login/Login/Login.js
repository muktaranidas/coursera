import React from "react";
import { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const { providerLogin, signIn, providerLoginGithub } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const naviGate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoURL, email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        naviGate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleGithubSignIn = () => {
    providerLoginGithub(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <div className="mx-auto" style={{ width: "50%" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Text className="text-danger">{error}</Form.Text>
          <br />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Login
        </Button>
        <p className="text-secondary">
          Don't have an account yet?
          <Link to="/register" className="hover:underline text-gray-600">
            Please Register
          </Link>
          .
        </p>
      </Form>
      <p className="px-3 text-sm dark:text-gray-400">
        Login with social accounts
      </p>

      <ButtonGroup vertical className="d-flex mt-3 ">
        <Button
          onClick={handleGoogleSignIn}
          className="mb-3"
          variant="outline-info"
        >
          <FaGoogle></FaGoogle>Login with Google
        </Button>
        <Button onClick={handleGithubSignIn} variant="outline-dark">
          <FaGithub></FaGithub>Login with Github
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Login;
