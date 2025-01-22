import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from || '/';
    const handlelogout = () => {
        logOut().then(() => {
            alert('Logged out successfully!');
            navigate(from, {replace: true});
        }).catch((error) => {
        });
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handlelogout}>Logout!</button>
    </div>
  )
}

export default Logout
