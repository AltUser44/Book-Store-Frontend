import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-store-backend-blond.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-300 py-10">
      <div className="mt-28 px-4 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-12">
          <span className="hover:text-blue-700">All Books are </span>
          <span className="hover:text-red-700">Available Here</span>
        </h2>

        <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          {books.map((book) => (
            <div
              key={book.id}
              className="relative p-1 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Card
                className="flex flex-col justify-between items-center p-4 bg-gray-400 rounded-lg shadow-md h-[550px]"
              >
                {/* Book Cover */}
                <img
                  src={book.imageURL}
                  alt={book.bookTitle}
                  className="w-full h-64 object-contain mb-4"
                />

                {/* Book Title */}
                <h5 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {book.bookTitle}
                </h5>

                {/* Description */}
                <p className="text-sm text-gray-700 text-center mb-4 h-20 overflow-hidden">
                  {book.bookDescription.length > 150
                    ? `${book.bookDescription.substring(0, 150)}...`
                    : book.bookDescription}
                </p>

                {/* Buy Button */}
                <button className="bg-blue-700 text-white py-2 px-6 rounded hover:bg-red-800 hover:scale-105 transition-transform duration-300">
                  Buy Now
                </button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
