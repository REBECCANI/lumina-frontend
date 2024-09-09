'use client';

import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

const RegisterForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    const sendMail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        const token = uuidv4();
        const verificationLink = `${baseUrl}/verify/${token}`;

        const templateParams = {
            from_name: 'Reality Work and Study Abroad',
            to_name: lastName,
            to_email: email,
            link: verificationLink,
        };

        try {
            await emailjs.send('service_4zw2esk', 'template_pbokby6', templateParams, 'nk7EgytWASUuiYJRs');
            console.log('Email sent with template params:', templateParams);

            const response = await fetch(`${baseUrl}/home`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    verificationToken: token,
                }),
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.error || 'Failed to register');
            }

            alert('Registration successful! Check your email for verification link.');
        } catch (error) {
            console.error('Registration failed:', error);
            if (error instanceof Error) {
                alert(`Failed to register. Please try again. Error: ${error.message}`);
            } else {
                alert('Failed to register. Please try again.');
            }
        }
    };

    const resetError = () => {
        setErrorMessage("");
    };

    return (
        <div className="h-full my-12">
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col bg-white w-full sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-2/5 bg-opacity-50 rounded-3xl shadow-xl p-4 md:p-6">
                    <div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-primary font-poppins mb-4 mt-4 font-bold text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl">CONTACT US</h1>
                        </div>
                        <div>
                            <form onSubmit={sendMail} encType="multipart/form-data">
                                <div className="mx-4 sm:mx-6 md:mx-8">
                                    <div className={`${errorMessage ? '' : 'hidden'} bg-red-100 rounded-[5px] h-fit py-4 px-4 mb-6 text-red-500`}>
                                        <span className="text-red-600 font-bold">Error: </span>
                                        {errorMessage}
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                                        <div className="flex flex-col w-full sm:w-1/2">
                                            <label htmlFor="firstName" className="text-black font-bold mb-1">
                                                First Name
                                            </label>
                                            <input
                                                id="firstName"
                                                className="bg-yellow bg-opacity-20 rounded-full px-3 py-2 text-black"
                                                type="text"
                                                onChange={(e) => setFirstName(e.target.value)}
                                                onClick={resetError}
                                                value={firstName}
                                                name="first name"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col w-full sm:w-1/2">
                                            <label htmlFor="lastName" className="text-black font-bold mb-1">
                                                Last Name
                                            </label>
                                            <input
                                                id="lastName"
                                                className="bg-yellow bg-opacity-20 rounded-full px-3 py-2 text-black"
                                                type="text"
                                                onChange={(e) => setLastName(e.target.value)}
                                                onClick={resetError}
                                                value={lastName}
                                                name="last name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-4">
                                        <label htmlFor="email" className="text-black font-bold mb-1">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            className="bg-yellow bg-opacity-20 rounded-full px-3 py-2 text-black"
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            onClick={resetError}
                                            value={email}
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4">
                                        <div className="flex flex-col w-full sm:w-1/2">
                                            <label htmlFor="password" className="text-black font-bold mb-1">
                                                Password
                                            </label>
                                            <input
                                                id="password"
                                                className="bg-yellow bg-opacity-20 rounded-full px-3 py-2 text-black"
                                                type="password"
                                                onChange={(e) => setPassword(e.target.value)}
                                                onClick={resetError}
                                                value={password}
                                                name="password"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col w-full sm:w-1/2">
                                            <label htmlFor="confirmPassword" className="text-black font-bold mb-1">
                                                Confirm Password
                                            </label>
                                            <input
                                                id="confirmPassword"
                                                className="bg-yellow bg-opacity-20 rounded-full px-3 py-2 text-black"
                                                type="password"
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                onClick={resetError}
                                                value={confirmPassword}
                                                name="confirm password"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="mt-6 mb-2 bg-gradient-to-r from-yellow-500 to-yellow-500 bg-hover-brown w-full sm:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto py-2 rounded-full items-center justify-center text-white text-[16px] md:text-[18px] font-semibold"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </form>
                            <div className="text-center mt-4 mb-6">
                                <p className="text-black text-sm md:text-base">
                                    Already have an account?{' '}
                                    <Link href="/login" className="text-blue-600 hover:underline">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
