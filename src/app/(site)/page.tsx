'use client';
import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';
import { useState } from 'react';

const Index = () => {
    const [isLogin, setIsLogin] = useState(true);

    const loginToggler = () => {
        setIsLogin((prev) => !prev);
    };
    return (
        <div className="flex justify-center items-center w-full h-full">
            {isLogin ? (
                <Login loginToggler={loginToggler} />
            ) : (
                <Register loginToggler={loginToggler} />
            )}
        </div>
    );
};

export default Index;
