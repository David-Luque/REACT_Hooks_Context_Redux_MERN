import AuthState   from '../context/auth/authState'
import React from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <Component {...pageProps} />
    </AuthState>
  )
}

export default MyApp
