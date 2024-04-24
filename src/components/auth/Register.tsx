'use client';
import Divider from '../common/Divider';
import PasswordInput from '../common/PasswordInput';

interface LoginProps {
    loginToggler: () => void;
}

const Login: React.FC<LoginProps> = ({ loginToggler }) => {
    return (
        <div className="flex flex-col items-center space-y-5 bg-opacity-50 backdrop-blur-lg shadow-2xl p-8 rounded-lg bg-blue-300 w-4/12 select-none">
            <h1 className="text-3xl font-semibold text-gray-100">Login Page</h1>
            <form className="flex flex-col items-center space-y-4 w-4/5">
                <input
                    type="text"
                    placeholder="Username"
                    className={
                        'p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 w-full'
                    }
                />
                <PasswordInput />
                <PasswordInput />
                <button
                    type="submit"
                    className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 w-1/3"
                >
                    Register
                </button>
                <Divider />
            </form>
            <button
                className="text-blue-100 hover:text-sky-300 transition-all"
                onClick={loginToggler}
            >
                Login if you have an account
            </button>
        </div>
    );
};

export default Login;
