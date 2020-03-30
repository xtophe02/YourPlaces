import React from "react";
import UsersList from "../components/UsersList";

const Home = () => {
  const users = [
    {
      id: "u1",
      name: "Christophe",
      places: 2,
      image:
        "https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "u2",
      name: "Idalia",
      places: 1,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "u3",
      name: "Nicole",
      places: 3,
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "u4",
      name: "Noah",
      places: 4,
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  ];
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hero title</h1>
          <h2 className="subtitle">Hero subtitle</h2>
          <div className="columns">
            <div className="column"></div>
            <div className="column">
              <UsersList users={users} />
            </div>
            <div className="column"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
