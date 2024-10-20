"use client";

import Link from 'next/link';
import React, { useState } from 'react';

export default function OrganizerSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organization, setOrganization] = useState(''); // New state for organization name

  // Handle form submission (for now, just log the data)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Organizer Name: ", organization);
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl text-black font-bold mb-8">Organizer Sign Up</h1>

      {/* Sign Up Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
        
        {/* Organizer Name Field */}
        <div className="mb-4">
          <label htmlFor="organization" className="block text-sm font-medium text-black">Organizer Name</label>
          <input
            type="text"
            id="organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            placeholder="Enter your organization name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Sign Up Button */}

        <Link href = "/">
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
        >
          Sign Up
        </button>
        </Link>
        

        {/* Back Button */}
        <Link href="/">
          <button
            type="button"
            className="w-full bg-red-400 text-white py-2 px-4 mt-4 rounded-md hover:bg-red-600 transition-colors"
          >
            Back
          </button>
        </Link>

      </form>
    </div>
  );
}