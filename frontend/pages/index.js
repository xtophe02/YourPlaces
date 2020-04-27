import React from "react";
import UsersList from "../components/UsersList";
import Layout from "../components/Layout";
import { users } from "../data";
import { gql, useQuery } from "@apollo/client";

const USERS = gql`
  query Users {
  hello
}
`;
// const USERS = gql`
//   query Users {
//   users{
//     id
//     name
//     places{
//       id
//     }
//     imageUrl
//   }
// }
// `;

const Home = () => {
  const { loading, error, data } = useQuery(USERS);
  console.log(data)
  if (loading) return <p>Loading ...</p>;
  return (
    <Layout title="Users" subtitle="list of current users">
      <div className="columns">
        <div className="column"></div>
        <div className="column is-half">
         {/* {data && <UsersList users={users} />} */}
          {data && <p>{data.hello}</p> }
        </div>
        <div className="column"></div>
      </div>
    </Layout>
  );
};

export default Home;
