import { useState } from 'react';

const Form = ()=>{

    const [ patient, setPatient ] = useState({
        pet: '',
        owner: '',
        email: '',
        inscription: '',
        symptoms: ''
    });
    const { pet, owner, email, inscription, symptoms } = patient;

    const handleSubmit = e => {
        e.preventDefault();
    };
    const handleChange = e => {
        const { name, value } = e.target;
        setPatient({
            ...patient,
            [name]: value
        });
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">
                PatientList
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
                Add patient and
                {" "}
                <span className="text-indigo-600 font-bold">manage them</span>
            </p>

            <form
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
                onSubmit={handleSubmit}
            >
               <div className='mb-5'>
                    <label htmlFor="pet" className='block text-gray-700 uppercase font-bold'>
                        Pet name
                    </label>
                    <input
                        id="pet"
                        name='pet'
                        type="text"
                        placeholder='Pet name' 
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={pet}
                        onChange={e => handleChange(e)}
                    />
               </div>
               <div className='mb-5'>
                    <label htmlFor="owner" className='block text-gray-700 uppercase font-bold'>
                        Owner name
                    </label>
                    <input
                        id="owner"
                        name='owner'
                        type="text"
                        placeholder='Owner name' 
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={owner}
                        onChange={e => handleChange(e)}
                    />
               </div>
               <div className='mb-5'>
                    <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>
                        Email
                    </label>
                    <input
                        id="email"
                        name='email'
                        type="email"
                        placeholder='Owner email' 
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={email}
                        onChange={e => handleChange(e)}
                    />
               </div>
               <div className='mb-5'>
                    <label htmlFor="inscription" className='block text-gray-700 uppercase font-bold'>
                        Inscription date
                    </label>
                    <input
                        id="inscription"
                        name='inscription'
                        type="date"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={inscription}
                        onChange={e => handleChange(e)}
                    />
               </div>
               <div className='mb-5'>
                    <label htmlFor="symptoms" className='block text-gray-700 uppercase font-bold'>
                        Symptoms
                    </label>
                    <textarea
                        id="symptoms"
                        name='symptoms'
                        placeholder='Symptoms description'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={symptoms}
                        onChange={e => handleChange(e)}

                    />
               </div>
                <input
                    type='submit'
                    value='Send'
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
                />
            </form> 
        </div>
        
    );
};

export default Form;