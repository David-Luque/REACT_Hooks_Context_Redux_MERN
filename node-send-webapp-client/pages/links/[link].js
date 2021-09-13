import Layout from "../../components/Layout";
import axiosClient from '../../config/axios';
import React, { useState } from 'react';


export async function getServerSideProps({ params }) {
    const { link } = params;
    const result = await axiosClient.get(`/api/links/${link}`)
    return {
        props: {
            link: result.data
        }
    }
}
export async function getServerSidePaths() {
    const links = await axiosClient.get('/api/links');
    return {
        paths: links.data.links.map(link => ({
            params: { link: link.url }
        })),
        fallback: false
    }
}

const LinkPage = ({ link }) => {
    
    const [ hassPassword, setHasPassword ] = useState(link.password);
    
    console.log(link)
    
    const verifyPassword = e => {
        e.preventDefault();
        console.log('verifying pass')
    };
    
    return (
        <Layout>
            {hassPassword ? (
                <>
                    <p className="text-center">This file require a password: </p>
                    <div className="flex justify-center mt-5">
                        <div className="w-full max-w-lg">
                            <form
                                className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                                onSubmit={e => verifyPassword(e)}
                            >

                                <div className="mb-4 ">
                                    <label
                                        className="block text-black text-sm font-bold mb-2"
                                        htmlFor="password"
                                    > Password </label>
                                    <input
                                        type="password"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        placeholder="Link password"
                                    />
                                </div>

                                <input
                                    type="submit"
                                    className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold"
                                    value="Confirm"
                                />

                            </form>
                        </div>
                    </div>
                </>
                
            ) : (
                <>
                    <h1 className="text-4xl text-center text-gray-700">
                        Download the file
                    </h1>
                    <div className="flex items-center justify-center mt-10">
                        <a 
                            className="bg-red-500 text-center px-10 py-3 rounded uppercase font-bold text-white cursor-pointer"
                            href={`${process.env.backendURL}/api/files/${link.file}`}
                        > HERE </a>
                    </div>
                </>
            )}
            
        </Layout>
    )
}

export default LinkPage