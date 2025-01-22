import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";


const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} = useLoaderData();


  const bookCategories  = [
      "",
      "Fiction", 
      "Non-Fiction", 
      "Mystery",
      "Adventure",
      "Programming",
      "Science",
      "Fantasy",
      "Horror",
      "Bibliography",
      "Autobiography",
      "Poetry",
      "History",
      "Self-Help",
      "Memoir",
      "Business",
      "Children Books",
      "Travel",
      "Religion",
      "Arts & Crafts",
      "Sci-Fi", 
      "Thriller", 
      "Romance", 
      "Cookbook",
    ]
  
    const [selectedBookCatgory, setSelectedBookCategory] = useState(bookCategories[0]);
  
    const handleChangeSelectedValue = (event) => {
      console.log(event.target.value);
      setSelectedBookCategory(event.target.value);
    }
  
    // handle book submision
    const handleUpdate = (event) => {
      event.preventDefault();
      const form = event.target;
  
  
      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const bookDescription = form.bookDescription.value;
      const bookPDFURL = form.bookPDFURL.value;
      
      const updatebookObj = {
        bookTitle,
        authorName,
        imageURL,
        category,
        bookDescription,
        bookPDFURL
      }
  
      //console.log(bookObj);
      //update book data
      fetch(`https://book-store-backend-blond.vercel.app/api/book/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatebookObj)
      }).then(res => res.json()).then(data => {
        //console.log(data)
        alert("Book updated successfully!");
        form.reset();
      })
  
    }
    return (
      <div className="px-4 my-12 min-h-screen">
        <h2 className="mb-8 text-3xl font-bold">Update A Book</h2>
  
        <form onSubmit={handleUpdate} className="flex lg:w-[1190px] flex-col flex-wrap gap-4">
          {/* First row */}
         <div className='flex gap-8'>
         <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              placeholder="Book name..."
              required
              type="text"
              defaultValue={bookTitle}
            />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              placeholder="Author Name"
              required
              type="text"
              defaultValue={authorName}
            />
          </div>
      
          {/* Second row */}
         </div>
         <div className='flex gap-8'>
         <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image Url" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              placeholder="Book image URL"
              required
              type="text"
              defaultValue={imageURL}
            />
          </div>

  
          {/* Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label 
                htmlFor="inputState" 
                value="Book category" />
            </div>
  
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCatgory}
            onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </Select>
  
          </div>
         </div>
  
           {/* book description */}
           <div>
              <div className='mb-2 block'>
            <Label
              htmlFor='bookDescription'
              value="Book Description"
            />
            </div>
              <Textarea
              id='bookDescription'
              name='bookDescription'
              placeholder='Write your book description...'
              required
              className='w-full'
              rows={6}
              defaultValue={bookDescription}
              />
           </div>
           
           {/* pdf upload */}
           <div>
            <div className='mb-2 block'>
              <Label
                htmlFor='bookPDFURL'
                value="Book PDF URL"
              />
            </div>
            <TextInput
              id="bookPDFURL"
              name='bookPDFURL'
              placeholder='upload book PDF URL'
              required
              type='text'
              defaultValue={bookPDFURL}
            />
           </div>
  
           <Button
              type="submit"
              color="blue"
              className="mt-5 hover:bg-purple-700 hover:border-purple-700"
              >
              Update Book
              </Button>
  
        </form>
      </div>
    );
}

export default EditBooks
