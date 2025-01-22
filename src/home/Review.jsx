import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//react icons
import { FaStar } from "react-icons/fa6"
import { Avatar } from "flowbite-react";

import John from '../assets/John.jpg';
import Emily from '../assets/Emily.jpg';
import Sarah from '../assets/Sarah.jpg';
import Carlos from '../assets/Carlos.jpg';
import David from '../assets/David.jpg';
import Olivia from '../assets/Olivia.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug hover:text-red-700'>Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>

                {/* text */}
                <div className='mt-7'>
                    <p>I’ve been using this app for months, and I have to say, it’s a game changer! 
                        The buying process is so smooth, and I’ve sold a few old books, 
                        making some extra cash. Definitely recommend for anyone who loves reading 
                        and wants to get the best deals.</p>
                        <div className="w-12 h-12 mt-2 mr-auto overflow-hidden rounded-full">
                            <img 
                            src={John} 
                            alt="Avatar of Jese" 
                            className="w-full h-full object-cover" 
                            />
                        </div>
                        <h5 className='text-lg font-medium mt-2'> John, 25 </h5>
                        <p className='text-base font-semibold'>Business Executive 📚</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>

                {/* text */}
                <div className='mt-7'>
                    <p>I love how easy it is to find textbooks for my students at a fraction of the price! 
                    It’s such a relief, especially with my tight budget. The platform is super user-friendly, 
                    and I feel good knowing I’m giving books a second life!</p>
                        <div className="w-12 h-12 mt-2 mr-auto overflow-hidden rounded-full">
                            <img 
                            src={Emily} 
                            alt="Avatar of Jese" 
                            className="w-full h-full object-cover" 
                            />
                        </div>
                        <h5 className='text-lg font-medium mt-2'> Emily, 27</h5>
                        <p className='text-base font-semibold'>Highschool Teacher 📖</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>

                {/* text */}
                <div className='mt-7'>
                    <p>I love browsing this app when I’m looking for something new to read. 
                    It’s so fun to see books at affordable prices and to know that 
                    I can sell some of my old ones to make space for new stories. 
                    My kids even love it when I find them books!</p>
                        <div className="w-12 h-12 mt-2 mr-auto overflow-hidden rounded-full">
                            <img 
                            src={Sarah} 
                            alt="Avatar of Jese" 
                            className="w-full h-full object-cover" 
                            />
                        </div>
                        <h5 className='text-lg font-medium mt-2'> Sarah, 36 </h5>
                        <p className='text-base font-semibold'>Stay-at-Home Mom 🏠</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>

                {/* text */}
                <div className='mt-7'>
                    <p>I’ve been part of a book club for years, and this app has completely changed how we share books. 
                    It’s so easy to trade and sell books with friends. 
                    Plus, the app’s interface is really pleasant to use. Definitely five stars from me!</p>
                        <div className="w-12 h-12 mt-2 mr-auto overflow-hidden rounded-full">
                            <img 
                            src={Carlos} 
                            alt="Avatar of Jese" 
                            className="w-full h-full object-cover" 
                            />
                        </div>
                        <h5 className='text-lg font-medium mt-2'> Carlos, 50 </h5>
                        <p className='text-base font-semibold'>Book Club Member 📚</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>

                {/* text */}
                <div className='mt-7'>
                    <p>I adore how many genres this app covers. As a freelance writer, I’m constantly looking for new inspiration, 
                    and I’ve found some gems here that I couldn’t find anywhere else. 
                    The best part is selling some of my old books and getting paid for them!</p>
                        <div className="w-12 h-12 mt-2 mr-auto overflow-hidden rounded-full">
                            <img 
                            src={David} 
                            alt="Avatar of Jese" 
                            className="w-full h-full object-cover" 
                            />
                        </div>
                        <h5 className='text-lg font-medium mt-2'> David, 44 </h5>
                        <p className='text-base font-semibold'>Freelance Writer ✍️</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>

                {/* text */}
                <div className='mt-7'>
                    <p>As a busy mom with two little ones, finding time to shop for books can be tricky. 
                    But this app makes it so much easier! It's convenient, affordable, 
                    and a lifesaver for busy parents like me. Plus, my kids love picking out their next book! 🥰</p>
                        <div className="w-12 h-12 mt-2 mr-auto overflow-hidden rounded-full">
                            <img 
                            src={Olivia} 
                            alt="Avatar of Jese" 
                            className="w-full h-full object-cover" 
                            />
                        </div>
                        <h5 className='text-lg font-medium mt-2'> Olivia, 38 </h5>
                        <p className='text-base font-semibold'>Mother of 2 👩‍👧‍👦</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Review
