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
import {AuthContext} from '../context/auth'

const initialValues = {
  email: {
    value: "",
    isValid: false,
  },
  password: {
    value: "",
    isValid: false,
  },
};

const Authenticate = () => {
  const auth = React.useContext(AuthContext)
  const [login, setLogin] = React.useState(true);
  const [formState, inputHandler, setFormData] = useForm(initialValues, false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formState.inputs);
    auth.login()
  };

  const handleSwitch = () => {
    if (!login) {
      setFormData(
        { ...formState.inputs, name: undefined, confirmPassword: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: { value: "", isValid: false },
          confirmPassword: { value: "", isValid: false },
        },
        false
      );
    }
    setLogin((prev) => !prev);
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
              placeholder="Password"
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
                validators={[
                  VALIDATOR_IDENTICAL(
                    formState.inputs.password,
                    formState.inputs.confirmPassword
                  ),
                ]}
                type="password"
                errorText="Passwords must be identical"
              />
            )}

            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <a className="button is-primary" disabled={!formState.isValid} onClick={handleSubmit}>
                  {login ? "Login" : "Sign Up"}
                </a>
              </p>
              <p className="control">
                <a className="button is-light" onClick={handleSwitch}>
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
