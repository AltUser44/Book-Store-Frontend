import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import 'flowbite/dist/flowbite.min.css';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch('https://book-store-backend-blond.vercel.app/api/all-books')
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  // Delete a book from the table
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://book-store-backend-blond.vercel.app/api/book/${id}`, {
      method: 'DELETE',
    }).then((res) => res.json()).then((data) => {
      alert("Book deleted successfully!");
      setAllBooks((prevBooks) => prevBooks.filter((book) => book._id !== id)); // Update the state after deletion
    });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

      {/* Add data table */}
      <div className='lg:w-[1597px]'>
        <Table>
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Prices</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit Or Manage</span>
            </Table.HeadCell>
          </Table.Head>
          {allBooks.map((book, index) => (
            <Table.Body className="divide-y" key={book._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:transform hover:scale-105 hover:rotate-1 transition duration-300 ease-in-out shadow-md">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.bookTitle}
                </Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>$15.00</Table.Cell>
                <Table.Cell>
                  <Link
                    className="font-medium text-cyan-600 hover:underline hover:text-purple-500 mr-5"
                    to={`/admin/dashboard/edit-books/${book._id}`}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-blue-700 px-4 py-1 font-semibold text-white rounded-sm hover:bg-red-600"
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageBooks;
