import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6'


const BookCard = ({ headline, books }) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black hover:text-red-700 my-5'>{headline}</h2>

      {/* card */}
      <div className='mt-12'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        {
  books.map((book) => (
    <SwiperSlide key={book._id}>
      <Link to={`/book/${book._id}`}>
        {/* Book Card */}
        <div className="flex flex-col items-center w-64 mx-auto">
          {/* Book Cover */}
          <div className="relative w-full h-96">
            <img
              src={book.imageURL}
              alt=""
              className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 right-3 bg-blue-700 hover:bg-red-700 p-2 rounded transition-colors duration-300">
              <FaCartShopping className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Book Details */}
          <div className="mt-3 flex flex-col items-center text-center space-y-1">
            <h3 className="text-lg font-bold group-hover:text-red-700 transition-colors duration-300">
              {book.bookTitle}
            </h3>
            <p className="text-gray-600">{book.authorName}</p>
            <p className="text-blue-700 font-bold">$20.00</p>
          </div>
        </div>
      </Link>
    </SwiperSlide>
  ))
}

      </Swiper>
      </div>
    </div>
  )
}

export default BookCard
