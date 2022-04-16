import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl">
                Create your account to manage your {" "}
                <span className="text-slate-700">projects</span>
            </h1>

            <form className="my-10 bg-white shadow rounded-lg p-10">
                <div className="my-5">
                    <label 
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="name"
                    > Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your name here"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50 "
                    />
                </div>
                <div className="my-5">
                    <label 
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="email"
                    > Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your email here"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50 "
                    />
                </div>
                <div className="my-5">
                    <label 
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="password"
                    > Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Your password here"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50 "
                    />
                </div>
                <div className="my-5">
                    <label 
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="password2"
                    > Repeat password
                    </label>
                    <input
                        id="password2"
                        type="password"
                        name="password2"
                        placeholder="Repeat your password here"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50 "
                    />
                </div>
                <input 
                    type="submit" 
                    value="Sign up" 
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