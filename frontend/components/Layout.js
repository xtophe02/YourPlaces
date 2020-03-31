import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Header from "./Header";

const Layout = ({ title, subtitle, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar title={title}/>
      <Header title={title} subtitle={subtitle} />
      <div className="container">
      {children}
      </div>
      
    </>
  );
};

export default Layout;
