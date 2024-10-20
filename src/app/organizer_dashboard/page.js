
"use client";
import Link from 'next/link';
import React, { useState } from 'react';

export default function SignForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [signs, setSigns] = useState([]); // Array to hold all signs
  const [currentSignIndex, setCurrentSignIndex] = useState(null); // Index of the sign being edited

  // Handle form submission (add or update sign)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the values of the input fields to the console
    console.log("Sign Title: ", title);
    console.log("Sign Description: ", description);
    console.log("Location: ", `Longitude: ${longitude}, Latitude: ${latitude}`);

    const newSign = {
      title: title,
      description: description,
      location: {
        longitude: longitude,
        latitude: latitude,
      },
    };

    if (currentSignIndex !== null) {
      // Update existing sign
      const updatedSigns = [...signs];
      updatedSigns[currentSignIndex] = newSign;
      setSigns(updatedSigns);
    } else {
      // Add new sign
      setSigns([...signs, newSign]);
    }

    // Clear form and reset current sign index
    setTitle('');
    setDescription('');
    setLongitude('');
    setLatitude('');
    setCurrentSignIndex(null);
  };

  // Get the user's location using the Geolocation API
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLongitude(position.coords.longitude);
          setLatitude(position.coords.latitude);
          console.log("Longitude: ", position.coords.longitude);
          console.log("Latitude: ", position.coords.latitude);
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Signs</h2>
        {signs.length === 0 ? (
          <p className="text-gray-400">No signs added yet</p>
        ) : (
          <ul>
            {signs.map((sign, index) => (
              <li key={index}>
                <button
                  className="bg-gray-600 w-full text-left px-3 py-2 rounded hover:bg-gray-700 transition"
                  onClick={() => handleEditSign(index)}
                >
                  {sign.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Main Content Area */}
      <div className="w-3/4 p-6">
        <h1 className="text-3xl text-white font-bold mb-8">
          {currentSignIndex !== null ? 'Edit Sign' : 'Add New Sign'}
        </h1>

        {/* Sign Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full">
          {/* Sign Title Field */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-black">Sign Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              placeholder="Enter sign title"
              required
            />
          </div>

          {/* Sign Description Field */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-black">Sign Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              placeholder="Enter sign description"
              required
            />
          </div>

          {/* Get Location Button */}
          <div className="mb-6">
            <button
              type="button"
              onClick={handleGetLocation}
              className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
            >
              Get Location
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-300 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
          >
            {currentSignIndex !== null ? 'Update Sign' : 'Add Sign'}
          </button>

          

          
        </form>

        <div className="flex justify-center">
          <Link href="/">
            <button
                type="button"
                className="w-1/10 bg-red-400 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
            >
                Logout
            </button>
            </Link>

          </div>

      </div>
    </div>
  );
}