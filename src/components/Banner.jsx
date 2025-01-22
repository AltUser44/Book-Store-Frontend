import React from 'react';
import BannerCard from '../home/BannerCard';

const Banner = () => {
  return (
    <div className="container mx-auto px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-black hover:text-red-700">
            Buy and Sell Your Books <span className="text-blue-700">for the Best Prices</span>
          </h2>
          <p className="md:w-4/5 font-semibold">
            Discover a seamless platform to buy and sell books effortlessly. Whether you're looking for new releases or
            rare finds, our app connects you with fellow book lovers, ensuring the best prices for both buyers and
            sellers. Join the community and start trading today!
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for a book..."
              className="py-2 px-4 rounded-s-sm outline-none w-full max-w-sm"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="max-w-md">
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
