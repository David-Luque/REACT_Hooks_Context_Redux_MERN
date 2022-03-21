import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';
import useAuthentication from '../hooks/useAuthentication';

function MyApp(props) {
  const { Component, pageProps } = props;
  const user = useAuthentication();

  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        user
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}
  
  export default MyApp;