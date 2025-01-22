import React, { useState } from 'react';
import { FaQuestionCircle, FaBook, FaBox, FaCommentDots } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const [comment, setComment] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') {
      alert('Please enter a comment.');
      return;
    }
    setMessageSent(true);
    alert('Your comment has been sent!');
    setComment('');
    
    // Redirect after a delay
    setTimeout(() => {
      navigate('/');
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 flex flex-col items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-3xl p-8 space-y-8">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-blue-900">
          We are here to help! 🛠️
        </h1>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Products */}
          <div className="p-6 bg-blue-100 rounded-xl shadow-lg text-center hover:bg-blue-200 transition-all duration-300">
            <FaBox className="text-5xl text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold text-blue-800">Products</h2>
            <p className="text-blue-600">Explore our amazing collection of products to make your reading journey better.</p>
          </div>

          {/* Books */}
          <div className="p-6 bg-blue-100 rounded-xl shadow-lg text-center hover:bg-blue-200 transition-all duration-300">
            <FaBook className="text-5xl text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold text-blue-800">Books</h2>
            <p className="text-blue-600">Discover a wide variety of books to expand your knowledge and imagination.</p>
          </div>

          {/* Q&A */}
          <div className="p-6 bg-blue-100 rounded-xl shadow-lg text-center hover:bg-blue-200 transition-all duration-300">
            <FaQuestionCircle className="text-5xl text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold text-blue-800">Q&A</h2>
            <p className="text-blue-600">Find answers to frequently asked questions and get instant support.</p>
          </div>

          {/* Comments */}
          <div className="p-6 bg-blue-100 rounded-xl shadow-lg text-center hover:bg-blue-200 transition-all duration-300">
            <FaCommentDots className="text-5xl text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold text-blue-800">Comments</h2>
            <p className="text-blue-600">Share your thoughts and feedback to help us improve your experience.</p>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">Leave a Comment</h2>
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment here..."
              className="w-full max-w-4xl bg-gray-100 border border-blue-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Submit Comment
            </button>
          </form>
          {messageSent && (
            <p className="text-green-600 text-center mt-4">Thank you for your comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Help;
