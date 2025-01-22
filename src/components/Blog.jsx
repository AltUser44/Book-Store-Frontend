import React from 'react';
import reporter from "../assets/reporter.jpeg";
import report1 from "../assets/report1.jpeg";
import reporter2 from "../assets/reporter2.jpeg";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'How to Find Your Next Favorite Book',
      description: 'Discover tips and tricks to uncover hidden gems in the literary world.',
      image: reporter,
    },
    {
      id: 2,
      title: 'Top 10 Sci-Fi Books to Read This Year',
      description: 'Explore the best science fiction novels that will take you on an adventure.',
      image: report1,
    },
    {
      id: 3,
      title: 'Benefits of Joining a Book Club',
      description: 'Learn how book clubs can enrich your reading experience and build community.',
      image: reporter2,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-500 text-white py-16 px-6">
      {/* Adjusted Heading */}
      <h1 className="text-5xl font-bold text-center mb-16">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 group"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
            />

            {/* Blog Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                {blog.title}
              </h2>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                {blog.description}
              </p>
              <button
                className="mt-4 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
