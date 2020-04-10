import React from "react";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { users } from "../data";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_IDENTICAL,
} from "../utils/validators";
import { useForm } from "../hooks/useForm";

const Authenticate = () => {
  const [login, setLogin] = React.useState(true);
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      confirmPassword: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <Layout title="Authenticate" subtitle="login your credentials">
      <div className="columns">
        <div className="column"></div>
        <div className="column is-half">
          <form onSubmit={handleSubmit}>
            {!login && (
              <Input
                id="name"
                name="Name"
                placeholder="Your Name"
                icon="fa-id-card"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="A name is required"
              />
            )}
            <Input
              id="email"
              name="Email"
              placeholder="Your Email Address"
              icon="fa-envelope"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
              type="email"
              errorText="This email is invalid"
            />
            <Input
              id="password"
              name="Password"
              placeholder="password"
              icon="fa-key"
              onInput={inputHandler}
              validators={[VALIDATOR_MINLENGTH(5)]}
              type="password"
              errorText="Should have at least 5 characters"
            />
            {!login && (
              <Input
                id="confirmPassword"
                name="Confirm Password"
                placeholder="Confirm Password"
                icon="fa-key"
                onInput={inputHandler}
                validators={[VALIDATOR_IDENTICAL(formState.inputs.password,formState.inputs.confirmPassword)]}
                type="password"
                errorText="Passwords must be identical"
              />
            )}

            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <a className="button is-primary" disabled={!formState.isValid}>
                  {login ? "Login" : "Submit"}
                </a>
              </p>
              <p className="control">
                <a className="button is-light" onClick={() => setLogin(!login)}>
                  Switch to {!login ? "Login" : "Sign Up"}
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="column"></div>
      </div>
    </Layout>
  );
};

export default Authenticate;
