import React from "react";
import UsersList from "../components/UsersList";
import Layout from "../components/Layout";
import { users } from "../data";

const Home = () => {
  console.log(process.env.TEST)
  return (
    <Layout title="Users" subtitle="list of current users">
      <div className="columns">
        <div className="column"></div>
        <div className="column is-half">
          <UsersList users={users} />
        </div>
        <div className="column"></div>
      </div>
    </Layout>
  );
};

export default Home;
