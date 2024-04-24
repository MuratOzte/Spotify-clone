'use client';
import Divider from '../common/Divider';
import PasswordInput from '../common/PasswordInput';

const Login = () => {
    return (
        <div className="flex flex-col items-center space-y-5 bg-opacity-50 backdrop-blur-lg shadow-2xl p-8 rounded-lg bg-blue-300 w-4/12">
            <h1 className="text-3xl font-semibold text-gray-100">Login Page</h1>
            <form className="flex flex-col items-center space-y-4 w-4/5">
                <input
                    type="text"
                    placeholder="Username"
                    className="p-3 rounded-lg border border-gray-300 focus:outline-4 focus:outline-blue-600 transition duration-300 w-full my-3"
                />

                <PasswordInput />

                <button
                    type="submit"
                    className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Login
                </button>
                <Divider />
                <button className="text-blue-100 hover:text-blue-500 transition-colors">
                    Register if you don't have an account
                </button>
            </form>
        </div>
    );
};

export default Login;
