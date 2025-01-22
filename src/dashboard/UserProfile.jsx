import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [address, setAddress] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  // Load data from LocalStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('userProfile'));
    if (savedData) {
      setName(savedData.name || user?.displayName || '');
      setBio(savedData.bio || '');
      setAddress(savedData.address || '');
      setProfilePicture(savedData.profilePicture || user?.photoURL || '/default-profile.png');
    } else {
      setName(user?.displayName || '');
      setProfilePicture(user?.photoURL || '/default-profile.png');
    }
  }, [user]);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Only JPG and PNG files are allowed.');
    }
  };

  const handleSave = () => {
    const profileData = { name, bio, address, profilePicture };
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    alert('Profile saved successfully!');
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-purple-500 to-purple-500 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-3xl p-8">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">My Profile</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center">
            <img
              src={profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full shadow-lg mb-4 object-cover border-4 border-blue-500"
            />
            <label className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
              Upload
              <input
                type="file"
                accept=".jpg, .png"
                onChange={handleProfilePictureChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Editable Fields */}
          <div className="flex-1 space-y-6">
            <div>
              <label className="block text-blue-800 font-semibold mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-100 border border-blue-300 text-blue-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
  <label className="block text-blue-800 font-semibold mb-2">Email</label>
  <input
    type="email"
    value={user?.email || ''}
    onChange={(e) => {
      const updatedUser = { ...user, email: e.target.value };
      setProfilePicture(updatedUser.email); // Update the local storage details
    }}
    className="w-full bg-gray-100 border border-blue-300 text-blue-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

            <div>
              <label className="block text-blue-800 font-semibold mb-2">Home Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-gray-100 border border-blue-300 text-blue-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your address"
              />
            </div>
            <div>
              <label className="block text-blue-800 font-semibold mb-2">Short Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full bg-gray-100 border border-blue-300 text-blue-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write a short bio about yourself"
                rows="4"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
