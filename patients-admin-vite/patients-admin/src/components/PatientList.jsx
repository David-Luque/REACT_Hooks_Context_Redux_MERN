import PatientCard from "./PatientCard";

const PatientList = () => {
    return ( 
        <div className="md:w-1/2 lg:w-3/5">
            <h2 className="font-black text-3xl text-center">
                Patients list
            </h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Admin your
                {" "}
                <span className="text-indigo-600 font-bold">patients and dates</span>
            </p>

            <div className="md:h-screen overflow-y-scroll">
                <PatientCard />
                <PatientCard />
                <PatientCard />
                <PatientCard />
                <PatientCard />
            </div>
            
        </div>
    );
}
 
export default PatientList;