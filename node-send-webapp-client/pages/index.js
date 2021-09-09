import React,  { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import authContext from '../context/auth/authContext';

const Index = () => {

  //get auth user from localStorage
  const AuthContext = useContext(authContext);
  const { authUserLocal } = AuthContext;

  useEffect(()=>{
    authUserLocal()
  }, []);

 
  return (
    <div className="container">
      <Layout>
        <h1>home</h1>
      </Layout>
      
    </div>
  )
}

export default Index;
