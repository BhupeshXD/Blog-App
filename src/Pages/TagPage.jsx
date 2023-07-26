import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="w-11/12 max-w-[680px] mx-auto flex flex-col justify-center items-center mt-[80px] mb-[50px]"> 
      <Header />
      <div className='self-start mt-[10px]'>
        <button
          onClick={() => navigation(-1)}
          className="border-2 border-gray-300 py-1 px-4 rounded-md"
        >
          Back
        </button>
        <h2  className='px-1 py-1 text-xl'>
          Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
