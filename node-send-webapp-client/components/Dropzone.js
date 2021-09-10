import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axiosClient from '../config/axios';

const Dropzone = () => {

    const onDrop = useCallback(async (acceptedFiles) => {
        const formData = new FormData();
        formData.append('theFile', acceptedFiles[0])

        const response = await axiosClient.post('api/files', formData);
        console.log(response.data)
    }, []);

    //extract dropzone content
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });

    const files = acceptedFiles.map((file, index) => (
        <li className="bg-white flex-1 p-3 mb-4 shadow-lg rounded" key={index}>
            <p className="font-bold text-xl">{file.path}</p>
            <p className="text-sm text-gray-500">{ (file.size / Math.pow(1024, 2)).toFixed(3) } MB</p>
        </li>
    ));

    const createLink = ()=>{
        console.log('creating link...')
    };

    return (
        <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0 flex flex-col items-center justify-center border-dashed border-gray-400 border-2 bg-gray-100 px-4">
            {acceptedFiles.length > 0 ? (
                  <div className="mt-10 w-full">
                    <h2 className="text-2xl font-bold text-center mb-4">
                        Files:
                    </h2>
                    <ul>
                      {files}
                    </ul>
                    <button 
                        className="bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800"
                        type="button"
                        onClick={() => createLink()}
                    > Create link </button>
                  </div>
                           
            ) : (
                <div {...getRootProps({className: 'dropzone w-full py-32'})}>
                    <input className="h-100" {...getInputProps()}/>
                    { isDragActive ? (
                        <p className="text-2xl text-center text-gray-600"> Drop the file </p>
                    ) : (
                        <div className="text-center">
                            <p className="text-2xl text-center text-gray-600">Drag any file here</p>
                            <button className="bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800" type="button">
                                Select any file to upload
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
 
export default Dropzone;