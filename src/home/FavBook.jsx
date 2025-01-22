import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
             <img src={FavBookImg} alt="" className='rounded md:w-10/12' />
        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className="hover:text-red-700 text-5xl font-bold my-5 md:w-3/4 leading-snug"><span className="block">Find Your Favorite</span>
                <span className="text-blue-700">Books Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6 font-semibold'>Explore a vast collection of books across genres, 
            from timeless classics to the latest bestsellers. 
            Whether you're buying or selling, our app offers a simple, secure, 
            and affordable way to connect with fellow book enthusiasts. Start discovering your next great read today!</p>
            {/* stats */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold hover:text-red-700'>900+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold hover:text-red-700'>600+</h3>
                    <p className='text-base'>Register Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold hover:text-red-700'>1200+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
            </div>

            <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded
            hover:bg-purple-700 transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook
