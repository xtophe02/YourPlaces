import React from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../utils/validators";
import { useRouter } from "next/router";
import { places } from "../../data";
import { useForm } from "../../hooks/useForm";
import Link from 'next/link'

const editPlace = ({findPlace}) => {
  const router = useRouter()
  // console.log(findPlace)
  // console.log(router)
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: findPlace.title,
        isValid: true,
      },
      description: {
        value: findPlace.description,
        isValid: true,
      },
      address: {
        value: findPlace.address,
        isValid: true,
      },
    },
    true
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <Layout title="Edit Place" subtitle="form to update an existing place">
      {findPlace ? (
        <form onSubmit={handleSubmit}>
          <Input
            id="title"
            name="Title"
            placeholder="Name of the place"
            icon="fa-landmark"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            value={formState.inputs.title.value}
            valid={formState.inputs.title.isValid}
          />
          <Input
            id="description"
            name="Description"
            type="textarea"
            placeholder="About the place"
            onInput={inputHandler}
            validators={[VALIDATOR_MINLENGTH(5)]}
            value={formState.inputs.description.value}
            valid={formState.inputs.description.isValid}
          />
          <Input
            id="address"
            name="Address"
            placeholder="address"
            icon="fa-map-marked-alt"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            value={formState.inputs.address.value}
            valid={formState.inputs.address.isValid}
          />
          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-primary"
                disabled={!formState.isValid}
              >
                Update
              </button>
            </div>
            <p className="control">
              
              <a onClick={()=>router.back()} className="button is-light">Cancel</a>
            </p>
          </div>
        </form>
      ) : (
        <p>error, could not find the place</p>
      )}
    </Layout>
  );
};
// export async function getStaticPaths(){
  
//   return { paths:[{params:editPlace}], fallback: false }
//   }
// export async function getStaticProps({params}) {
  
//   const findPlace = places.find((place) => place.id === params.editPlace);

//   return {
//     props: findPlace
//   }
// };

editPlace.getInitialProps =   async ({query}) => {
  const findPlace = places.find((place) => place.id === query.editPlace);
  
  return {findPlace}
}

export default editPlace;
