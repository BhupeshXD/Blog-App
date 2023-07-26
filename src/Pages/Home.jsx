import React from 'react';
import Blogs from '../components/Blogs';
import Header from '../components/Header';
import Pagination from '../components/Pagination';

const Home = () => {
  return (
    <div className='w-11/12 max-w-[670px] mx-auto my-8 flex flex-col gap-y-8 mt-[55px] mb-[60px]'>
      <Header />
      <div className="flex flex-col items-center">
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
