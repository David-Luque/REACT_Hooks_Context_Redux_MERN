import { Link } from 'react-router-dom';

export default function NewPass() {
    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl">
                Recover your {" "}
                <span className="text-slate-700">password</span>
            </h1>

            <form className="my-10 bg-white shadow rounded-lg p-10">
                <div className="my-5">
                    <label 
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="password"
                    > New password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Type your new password here"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50 "
                    />
                </div>
                <input 
                    type="submit" 
                    value="Change password" 
                    className="bg-sky-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
                />
            </form>

            <nav className="lg:flex lg:justify-between">
                <Link 
                    to={"/"}
                    className="block text-center my-5 text-slate-500 uppercase text-sm"
                >
                    Do you have an account? Login here
                </Link>
                {/* <Link 
                    to={"forget-pass"}
                    className="block text-center my-5 text-slate-500 uppercase text-sm"
                >
                    Forgot your password?
                </Link> */}
            </nav>
        </>
    );
};