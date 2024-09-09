'use client';

import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { v4 as uuidv4 } from 'uuid';

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
            <div className="flex justify-center items-center h-full">
                <div className="flex flex-col h-[80%] mt-[20px] bg-white w-full sm:w-[90%] md:w-[60%] lg:w-[50%] bg-opacity-50 rounded-3xl shadow-xl mr-[100px]">
                    <div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-primary font-poppins mb-4 mt-4 font-bold text-black text-2xl max-sm:text-[1.5rem]">CONTACT US</h1>
                        </div>
                        <div>
                            <form onSubmit={sendMail} encType="multipart/form-data">
                                <div className="mx-4 sm:mx-8">
                                    <div className={`${errorMessage ? '' : 'hidden'} bg-red-100 rounded-[5px] h-fit py-4 px-4 mb-6 text-red-500`}>
                                        <span className="text-red-600 font-bold">Error: </span>
                                        {errorMessage}
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <div className="flex flex-col">
                                            <label htmlFor="firstName" className="text-black font-bold text-black-600 mb-1">
                                                First Name
                                            </label>
                                            <input
                                                id="firstName"
                                                className="bg-yellow bg-opacity-20 rounded-full px-2 py-1"
                                                type="text"
                                                onChange={(e) => setFirstName(e.target.value)}
                                                onClick={resetError}
                                                value={firstName}
                                                name="first name"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="lastName" className="text-black font-bold text-black-600 mb-1">
                                                Last Name
                                            </label>
                                            <input
                                                id="lastName"
                                                className="bg-yellow bg-opacity-20 rounded-full px-2 py-1"
                                                type="text"
                                                onChange={(e) => setLastName(e.target.value)}
                                                onClick={resetError}
                                                value={lastName}
                                                name="last name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="email" className="text-black font-bold text-black-600 mt-3 mb-3">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            className="bg-yellow bg-opacity-20 rounded-full px-2 py-1"
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            onClick={resetError}
                                            value={email}
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <div className="flex flex-col">
                                            <label htmlFor="password" className="text-black font-bold text-black-600 mb-3">
                                                Password
                                            </label>
                                            <input
                                                id="password"
                                                className="bg-yellow bg-opacity-20 rounded-full px-2 py-1"
                                                type="password"
                                                onChange={(e) => setPassword(e.target.value)}
                                                onClick={resetError}
                                                value={password}
                                                name="password"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="confirmPassword" className="text-black font-bold text-black-600 mb-3">
                                                Confirm Password
                                            </label>
                                            <input
                                                id="confirmPassword"
                                                className="bg-yellow bg-opacity-20 rounded-full px-2 py-1"
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
                                        className="mt-6 mb-2 bg-gradient-to-r from-yellow-500 to-yellow-500 bg-hover-brown w-[40%] sm:w-[50%] lg:w-[30%] flex mx-auto py-2 rounded-full items-center justify-center text-white text-[18px] font-semibold"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
