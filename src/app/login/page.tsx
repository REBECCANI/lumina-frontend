'use client';

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const baseurl = process.env.NEXT_PUBLIC_BACKEND_URL;
    
        try {
            const response = await fetch(`${baseurl}/login`, {  
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include' 
            });
    
            if (!response.ok) {
                const responseText = await response.text(); // Read response as text
                try {
                    const responseData = JSON.parse(responseText); // Attempt to parse as JSON
                    throw new Error(responseData.error || 'Failed to login');
                } catch (e) {
                    throw new Error('Unexpected error occurred: ' + responseText);
                }
            }
    
            const responseData = await response.json();
            console.log('Login response data:', responseData); // Log the response data to debug
    
            if (responseData.user) {
                alert('You have successfully logged into your account!');
                router.push('/booking'); 
            } else {
                throw new Error('Invalid response data');
            }
            
        } catch (error) {
            console.error('Logging in failed:', error);
            if (error instanceof Error) {
                setErrorMessage(`Failed to Login. Please try again. Error: ${error.message}`);
            } else {
                setErrorMessage('Failed to Login. Please try again.');
            }
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="flex flex-col w-full max-w-md p-8 bg-white bg-opacity-90 rounded-3xl shadow-xl">
                <div className="flex flex-col items-center justify-center py-8">
                    <h1 className="text-black font-bold text-5xl">Login</h1>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="mx-8">
                        <div className={`${errorMessage ? '' : 'hidden'} bg-red-100 rounded h-fit py-4 px-4 mb-6 text-red-500`}>
                            <span className="text-red-600 font-bold">Error: </span>{errorMessage}
                        </div>
                        <label htmlFor="email" className="text-black font-semibold mb-4">
                            Email
                        </label>
                        <input 
                            className="w-full h-10 bg-white bg-opacity-20 rounded-full mb-4"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            onClick={() => setErrorMessage('')}
                            value={email}
                            name="email"
                            required
                        />
                        <label htmlFor="password" className="text-black font-semibold mb-4">
                            Password
                        </label>
                        <input 
                            className="px-4 w-full h-10 mb-4 bg-white bg-opacity-20 rounded-full"
                            type="password" 
                            onChange={(e) => setPassword(e.target.value)}
                            onClick={() => setErrorMessage('')}
                            value={password}
                            name="password"
                            required
                        />
                        <button
                            type="submit"
                            className="mt-8 bg-gradient-to-r from-yellow-500 to-yellow-500 w-full py-4 rounded-full text-white text-md font-semibold"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
