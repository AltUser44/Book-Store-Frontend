import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/shop');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white flex flex-col items-center py-16">
      {/* Title Section */}
      <div className="text-center max-w-4xl mb-20 px-4">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Discover Your Next Favorite Book
        </h1>
        <p className="text-lg font-light">
          We connect book enthusiasts to a seamless platform where buying, selling, and exploring books is effortless. Dive into a vibrant community of book lovers and elevate your reading experience!
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 max-w-6xl">
        {/* Buy Books */}
        <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all transform hover:scale-105">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">Buy Books</h2>
          <p className="text-gray-600">
            Browse our carefully curated collection of books across genres and find your next great read today.
          </p>
        </div>
        {/* Sell Books */}
        <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all transform hover:scale-105">
          <h2 className="text-2xl font-bold text-purple-700 mb-3">Sell Books</h2>
          <p className="text-gray-600">
            Reach a wider audience by listing your books on our platform. Let your books find new homes effortlessly.
          </p>
        </div>
        {/* Community */}
        <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all transform hover:scale-105">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">Community</h2>
          <p className="text-gray-600">
            Share your passion for books, exchange recommendations, and connect with fellow readers.
          </p>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="mt-20 text-center px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <p className="text-lg font-light mb-10">
          We’re dedicated to providing a comprehensive experience for all book lovers. Here’s what makes us stand out:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Stat 1 */}
          <div className="p-6 bg-white rounded-lg text-gray-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
            <h3 className="text-4xl font-bold text-indigo-700 mb-2">900+</h3>
            <p>Books Listed</p>
          </div>
          {/* Stat 2 */}
          <div className="p-6 bg-white rounded-lg text-gray-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
            <h3 className="text-4xl font-bold text-purple-700 mb-2">600+</h3>
            <p>Registered Users</p>
          </div>
          {/* Stat 3 */}
          <div className="p-6 bg-white rounded-lg text-gray-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
            <h3 className="text-4xl font-bold text-indigo-700 mb-2">1200+</h3>
            <p>PDF Downloads</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-20">
      <button
  onClick={handleExploreMore}
  className="bg-red-500 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-red-600 hover:scale-105 transform transition-all"
>
  Explore More
</button>

      </div>
    </div>
  );
};

export default About;
