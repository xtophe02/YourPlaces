import React from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../utils/validators";
import { useForm } from "../hooks/useForm";

function addPlace() {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
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
    <Layout title="Add Place" subtitle="form to add a new place">
      <form onSubmit={handleSubmit}>
        <Input
          id="title"
          name="Title"
          placeholder="Name of the place"
          icon="fa-landmark"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
        />
        <Input
          id="description"
          name="Description"
          type="textarea"
          placeholder="About the place"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(5)]}
        />
        <Input
          id="address"
          name="Address"
          placeholder="address"
          icon="fa-map-marked-alt"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
        />
        <div className="control">
          <button className="button is-primary" disabled={!formState.isValid}>
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default addPlace;
