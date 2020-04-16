import React from "react";
import UsersList from "../components/UsersList";
import Layout from "../components/Layout";
import { users } from "../data";
import { gql, useQuery } from "@apollo/client";
import {withApollo} from '../apollo/client'

const HELLO = gql`
  query Hello {
    hello
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(HELLO);
  console.log(data)
  if (loading) return <p>Loading ...</p>;
  return (
    <Layout title="Users" subtitle="list of current users">
      <div className="columns">
        <div className="column"></div>
        <div className="column is-half">
          <h1>{data.hello}</h1>
          <UsersList users={users} />
        </div>
        <div className="column"></div>
      </div>
    </Layout>
  );
};

export default Home;
