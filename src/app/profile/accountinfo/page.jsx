"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export default function Account() {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [userType, setUserType] = useState(''); // New state for user type
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    // Fetch user data from an API or local storage
    const fetchData = async () => {
      // Simulating an API call
      const data = {
        username: 'john_doe',
        email: 'john.doe@example.com',
        fullName: 'John Doe',
        joinedDate: '2024-01-15',
        type: 'Volunteer', // Example user type
      };
      setUserData(data);
      setFormData(data);
      setUserType(data.type); // Set initial user type
    };

    fetchData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setFormData((prevData) => ({ ...prevData, type: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data (e.g., send updated data to an API)
    setUserData(formData);
    setIsEditing(false);
  };

  const handleDeleteAccount = () => {
    // Handle account deletion (e.g., send request to API and log out)
    console.log('Account deleted'); // Replace with actual deletion logic
    router.push('/login'); // Redirect to login page after deletion
  };

  const handleLogout = () => {
    // Handle logout (e.g., clear user session and redirect)
    console.log('Logged out'); // Replace with actual logout logic
    router.push('/login'); // Redirect to login page after logout
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Account Info</h2>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="joinedDate">
                Joined Date
              </label>
              <input
                type="date"
                id="joinedDate"
                name="joinedDate"
                value={formData.joinedDate}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="type">
                User Type
              </label>
              <select
                id="type"
                name="type"
                value={userType}
                onChange={handleUserTypeChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="NGO">NGO</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Survivor">Survivor</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleEditClick}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">Username</label>
              <div className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight">
                {userData.username}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">Email</label>
              <div className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight">
                {userData.email}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">Full Name</label>
              <div className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight">
                {userData.fullName}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">Joined Date</label>
              <div className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight">
                {userData.joinedDate}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">User Type</label>
              <div className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight">
                {userData.type}
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-6">
              <button
                onClick={handleEditClick}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-1"
              >
                Edit
              </button>
              <button
                onClick={handleLogout}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-1"
              >
                Log Out
              </button>
              <button
                onClick={handleDeleteAccount}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-1"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
