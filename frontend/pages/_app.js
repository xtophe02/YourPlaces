import React, { useCallback } from 'react'
import { AuthContext } from "../context/auth";
// import {withApollo} from '../apollo/client'

const MyApp = ({ Component, pageProps }) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const login = useCallback(()=>{
        setIsLoggedIn(true)
    },[])
    const logout = useCallback(()=>{
        setIsLoggedIn(false)
    },[])
  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout}}>
      <Component {...pageProps}  />
    </AuthContext.Provider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
