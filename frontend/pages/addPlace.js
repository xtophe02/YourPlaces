import React from 'react'
import Layout from "../components/Layout";
import Input from '../components/Input'
import {VALIDATOR_REQUIRE} from '../utils/validators'

function addPlace() {
  return (
    <Layout title="Add Place" subtitle="form to add a new place">
      <Input name='Title'  placeholder="Name of the place" icon='fa-landmark' validators={[VALIDATOR_REQUIRE()]}/>
      <Input name='Description' type='textarea' placeholder="About the place" validators={[VALIDATOR_REQUIRE()]}/>
      <Input name='Address'  placeholder="address" icon='fa-map-marked-alt' validators={[VALIDATOR_REQUIRE()]}/>
    </Layout>
  )
}

export default addPlace
