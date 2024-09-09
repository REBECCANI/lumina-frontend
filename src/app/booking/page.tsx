"use client";
import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { v4 as uuidv4 } from 'uuid';

const countries = [
    { code: 'AF', name: 'Afghanistan' },
    { code: 'AL', name: 'Albania' },
    { code: 'DZ', name: 'Algeria' },
    { code: 'AD', name: 'Andorra' },
    { code: 'AO', name: 'Angola' },
    { code: 'AG', name: 'Antigua and Barbuda' },
    { code: 'AR', name: 'Argentina' },
    { code: 'AM', name: 'Armenia' },
    { code: 'AU', name: 'Australia' },
    { code: 'AT', name: 'Austria' },
    { code: 'AZ', name: 'Azerbaijan' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'BH', name: 'Bahrain' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BY', name: 'Belarus' },
    { code: 'BE', name: 'Belgium' },
    { code: 'BZ', name: 'Belize' },
    { code: 'BJ', name: 'Benin' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'BO', name: 'Bolivia' },
    { code: 'BA', name: 'Bosnia and Herzegovina' },
    { code: 'BW', name: 'Botswana' },
    { code: 'BR', name: 'Brazil' },
    { code: 'BN', name: 'Brunei' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BI', name: 'Burundi' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'CM', name: 'Cameroon' },
    { code: 'CA', name: 'Canada' },
    { code: 'CV', name: 'Cape Verde' },
    { code: 'CF', name: 'Central African Republic' },
    { code: 'TD', name: 'Chad' },
    { code: 'CL', name: 'Chile' },
    { code: 'CN', name: 'China' },
    { code: 'CO', name: 'Colombia' },
    { code: 'KM', name: 'Comoros' },
    { code: 'CG', name: 'Congo' },
    { code: 'CD', name: 'Congo, Democratic Republic of the' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'CI', name: 'Ivory Coast' },
    { code: 'HR', name: 'Croatia' },
    { code: 'CU', name: 'Cuba' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'DK', name: 'Denmark' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'DM', name: 'Dominica' },
    { code: 'DO', name: 'Dominican Republic' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EG', name: 'Egypt' },
    { code: 'SV', name: 'El Salvador' },
    { code: 'GQ', name: 'Equatorial Guinea' },
    { code: 'ER', name: 'Eritrea' },
    { code: 'EE', name: 'Estonia' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'FJ', name: 'Fiji' },
    { code: 'FI', name: 'Finland' },
    { code: 'FR', name: 'France' },
    { code: 'GA', name: 'Gabon' },
    { code: 'GM', name: 'Gambia' },
    { code: 'GE', name: 'Georgia' },
    { code: 'DE', name: 'Germany' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GR', name: 'Greece' },
    { code: 'GD', name: 'Grenada' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'GN', name: 'Guinea' },
    { code: 'GW', name: 'Guinea-Bissau' },
    { code: 'GY', name: 'Guyana' },
    { code: 'HT', name: 'Haiti' },
    { code: 'HN', name: 'Honduras' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'HU', name: 'Hungary' },
    { code: 'IS', name: 'Iceland' },
    { code: 'IN', name: 'India' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IR', name: 'Iran' },
    { code: 'IQ', name: 'Iraq' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IL', name: 'Israel' },
    { code: 'IT', name: 'Italy' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'JP', name: 'Japan' },
    { code: 'JO', name: 'Jordan' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'KI', name: 'Kiribati' },
    { code: 'KP', name: 'North Korea' },
    { code: 'KR', name: 'South Korea' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'LA', name: 'Laos' },
    { code: 'LV', name: 'Latvia' },
    { code: 'LB', name: 'Lebanon' },
    { code: 'LS', name: 'Lesotho' },
    { code: 'LR', name: 'Liberia' },
    { code: 'LY', name: 'Libya' },
    { code: 'LI', name: 'Liechtenstein' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LU', name: 'Luxembourg' },
    { code: 'MO', name: 'Macau' },
    { code: 'MK', name: 'North Macedonia' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MW', name: 'Malawi' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'MV', name: 'Maldives' },
    { code: 'ML', name: 'Mali' },
    { code: 'MT', name: 'Malta' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'MR', name: 'Mauritania' },
    { code: 'MU', name: 'Mauritius' },
    { code: 'MX', name: 'Mexico' },
    { code: 'FM', name: 'Micronesia' },
    { code: 'MD', name: 'Moldova' },
    { code: 'MC', name: 'Monaco' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'MA', name: 'Morocco' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'MM', name: 'Myanmar' },
    { code: 'NA', name: 'Namibia' },
    { code: 'NR', name: 'Nauru' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'NC', name: 'New Caledonia' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'NI', name: 'Nicaragua' },
    { code: 'NE', name: 'Niger' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'NU', name: 'Niue' },
    { code: 'NF', name: 'Norfolk Island' },
    { code: 'MP', name: 'Northern Mariana Islands' },
    { code: 'NO', name: 'Norway' },
    { code: 'OM', name: 'Oman' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'PW', name: 'Palau' },
    { code: 'PS', name: 'Palestine' },
    { code: 'PA', name: 'Panama' },
    { code: 'PG', name: 'Papua New Guinea' },
    { code: 'PY', name: 'Paraguay' },
    { code: 'PE', name: 'Peru' },
    { code: 'PH', name: 'Philippines' },
    { code: 'PN', name: 'Pitcairn Islands' },
    { code: 'PL', name: 'Poland' },
    { code: 'PT', name: 'Portugal' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'QA', name: 'Qatar' },
    { code: 'RE', name: 'Réunion' },
    { code: 'RO', name: 'Romania' },
    { code: 'RU', name: 'Russia' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'WS', name: 'Samoa' },
    { code: 'SM', name: 'San Marino' },
    { code: 'ST', name: 'São Tomé and Príncipe' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'SN', name: 'Senegal' },
    { code: 'RS', name: 'Serbia' },
    { code: 'SC', name: 'Seychelles' },
    { code: 'SL', name: 'Sierra Leone' },
    { code: 'SG', name: 'Singapore' },
    { code: 'SX', name: 'Sint Maarten' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'SB', name: 'Solomon Islands' },
    { code: 'SO', name: 'Somalia' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'GS', name: 'South Georgia and the South Sandwich Islands' },
    { code: 'SS', name: 'South Sudan' },
    { code: 'ES', name: 'Spain' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'SD', name: 'Sudan' },
    { code: 'SR', name: 'Suriname' },
    { code: 'SZ', name: 'Eswatini' },
    { code: 'SE', name: 'Sweden' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'SY', name: 'Syria' },
    { code: 'TW', name: 'Taiwan' },
    { code: 'TJ', name: 'Tajikistan' },
    { code: 'TZ', name: 'Tanzania' },
    { code: 'TH', name: 'Thailand' },
    { code: 'TG', name: 'Togo' },
    { code: 'TK', name: 'Tokelau' },
    { code: 'TO', name: 'Tonga' },
    { code: 'TT', name: 'Trinidad and Tobago' },
    { code: 'TN', name: 'Tunisia' },
    { code: 'TR', name: 'Turkey' },
    { code: 'TM', name: 'Turkmenistan' },
    { code: 'TV', name: 'Tuvalu' },
    { code: 'UG', name: 'Uganda' },
    { code: 'UA', name: 'Ukraine' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'US', name: 'United States' },
    { code: 'UY', name: 'Uruguay' },
    { code: 'UZ', name: 'Uzbekistan' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'VA', name: 'Vatican City' },
    { code: 'VE', name: 'Venezuela' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'WF', name: 'Wallis and Futuna' },
    { code: 'EH', name: 'Western Sahara' },
    { code: 'YE', name: 'Yemen' },
    { code: 'ZM', name: 'Zambia' },
    { code: 'ZW', name: 'Zimbabwe' }
];

const services = [
    'WORK VISA',
    'ACCOMMODATION',
    'STUDENT VISA'
];

const BookingPage = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [service, setService] = useState("");
    const [description, setDescription] = useState("");


    const sendMail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        
        const templateParams = {
            to_email: 'himfurankase@gmail.com',
            firstName,
            lastName,
            email,
            phone,
            country,
            service,
            description
        };

        try {
            await emailjs.send('service_4zw2esk', 'template_1z08yko', templateParams, 'nk7EgytWASUuiYJRs');
            console.log('Email sent with template params:', templateParams);

            alert('You have successfully booked the appointment. Kindly wait for a response.');
        } catch (error) {
            console.error('failed:', error);
            if (error instanceof Error) {
                alert(`Failed to book the appointment. Please try again. Error: ${error.message}`);
            } else {
                alert('Failed to book the appointment. Please try again.');
            }
        }
    };

    const resetError = () => {
        setErrorMessage("");
    };

    return (
        <div className="h-full my-12 text-black">
            <div className="relative flex justify-center items-center h-full">
                <div className="absolute inset-0 bg-cover bg-center filter blur-md" style={{ backgroundImage: `url('your-background-image.jpg')` }}></div>
                <div className="relative flex flex-col h-auto w-full max-w-2xl p-8 bg-gray bg-opacity-90 rounded-3xl shadow-xl mt-12" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                    <div className="flex flex-col items-center justify-center py-8 mt-2">
                        <h1 className="mb-2 font-bold text-2xl text-black">BOOK YOUR APPOINTMENT</h1>
                    </div>
                    <form onSubmit={sendMail} encType="multipart/form-data" className="text-black">
                        <div className="mx-8">
                            <div className={`${errorMessage ? '' : 'hidden'} bg-red-100 rounded h-fit py-4 px-4 mb-6 text-red-500`}>
                                <span className="text-red-600 font-bold">Error: </span>
                                {errorMessage}
                            </div>
                           
                            <div className="flex flex-col">
                                <label htmlFor="firstName" className="text-black font-bold mb-1">First Name</label>
                                <input
                                    id="firstName"
                                    className="bg-gray-200 rounded-full px-4 py-2"
                                    type="text"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    onClick={resetError}
                                    value={firstName}
                                    name="first name"
                                    required
                                />
                            </div>
                            <div className="flex flex-col mt-3">
                                <label htmlFor="lastName" className="text-black font-bold mt-3 mb-1">Last Name</label>
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
                            
                            <div className="flex flex-col mt-3">
                                <label htmlFor="email" className="text-black font-bold mt-3 mb-1">Email</label>
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
                            <div className="flex flex-col mt-3">
                                <label htmlFor="phone" className="text-black font-bold mb-1">Phone</label>
                                <input
                                    id="phone"
                                    className="bg-yellow bg-opacity-20 rounded-full px-2 py-1"
                                    type="tel"
                                    onChange={(e) => setPhone(e.target.value)}
                                    onClick={resetError}
                                    value={phone}
                                    name="phone"
                                    required
                                />
                            </div>
                            <div className="flex flex-col mt-3">
                                <label htmlFor="country" className="text-black font-bold mb-1">Country</label>
                                <select
                                    id="country"
                                    className="bg-yellow bg-opacity-20 rounded-full px-2 py-1"
                                    onChange={(e) => setCountry(e.target.value)}
                                    value={country}
                                    name="country"
                                    required
                                >
                                    <option value="">Select a country</option>
                                    {countries.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col mt-3">
                                <label htmlFor="service" className="text-black font-bold mb-1">Service</label>
                                <select
                                    id="service"
                                    className="bg-yellow bg-opacity-20 rounded-full px-2 py-1"
                                    onChange={(e) => setService(e.target.value)}
                                    value={service}
                                    name="service"
                                    required
                                >
                                    <option value="">Select a service</option>
                                    {services.map((srv) => (
                                        <option key={srv} value={srv}>
                                            {srv}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col mt-3">
                                <label htmlFor="description" className="text-black font-bold mb-1">Description</label>
                                <textarea
                                    id="description"
                                    className="bg-yellow bg-opacity-20 rounded-md px-2 py-1"
                                    onChange={(e) => setDescription(e.target.value)}
                                    onClick={resetError}
                                    value={description}
                                    name="description"
                                    rows={4}
                                    required
                                />
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    type="submit"
                                    className="mt-6 mb-2 bg-gradient-to-r from-yellow-500 to-yellow-500 bg-hover-brown w-1/2 py-2 rounded-full text-white text-18 font-semibold mx-auto"
                                >
                                    BOOK 
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
