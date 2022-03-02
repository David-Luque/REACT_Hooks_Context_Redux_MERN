

const PatientCard = ()=>{
    return (
        <div className="m-5 px-5 py-10 bg-white shadow-md rounded-xl">
            <p className="font-bold text-gray-700 mb-3 uppercase">
                Name:
                {' '}
                <span className="font-normal normal-case">
                    Tobías
                </span>
            </p>
            <p className="font-bold text-gray-700 mb-3 uppercase">
                Owner:
                {' '}
                <span className="font-normal normal-case">
                    Tom
                </span>
            </p>
            <p className="font-bold text-gray-700 mb-3 uppercase">
                Email:
                {' '}
                <span className="font-normal normal-case">
                    tom@tom.com
                </span>
            </p>
            <p className="font-bold text-gray-700 mb-3 uppercase">
                Inscription date:
                {' '}
                <span className="font-normal normal-case">
                    10/02/2018
                </span>
            </p>
        
            <p className="font-bold text-gray-700 mb-3 uppercase">
                Symptoms:
                {' '}
                <span className="font-normal normal-case">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quaerat magnam harum laborum omnis quia doloremque tenetur minima qui commodi exercitationem, sunt incidunt sit atque, molestias explicabo. Cumque, nihil saepe!
                </span>
            </p>
        </div>
    );
};

export default PatientCard;