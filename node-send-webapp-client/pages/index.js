import React,  { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import authContext from '../context/auth/authContext';
import Link from 'next/link';
import Dropzone from '../components/Dropzone';


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
        <div className="md:4/5 xl:w3/5 mx-auto mb-32">
          <div className="lg:flex md:shadow-lg p-5 bg-white rounded-lg py-10">
            <Dropzone />
            <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0">
               <h2 className="text-4xl font-sans font-bold text-gray-800 my-4">
                Easy and private file sharing
               </h2>
               <p className="text-lg leading-loose">
                 <span className="text-red-500 font-bold">NodeSend</span> share end-to-end encrypted files. they will be deleted after downloads of your choice so they do not remain on the network.
               </p>
               <Link href="/signup">
                  <a className="text-red-500 font-bold text-lg hover:text-red-700">Create an account for extra benefits</a>
               </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Index;
