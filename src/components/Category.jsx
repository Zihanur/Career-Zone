import React from 'react';

const Category = ({category}) => {
  return (
    <>
      <div className="bg-gray-100 rounded-lg p-8 flex flex-col gap-y-2 items-start ">
        <img className='mb-2' src={category.coverImg} alt="" />
        <h4 className='text-xl font-extrabold text-gray-600'>{category.categoryName}</h4>
        <p className='font-medium text-base text-gray-400'>{category.jobs} Jobs Available</p>
      </div>
    </>
  );
};

export default Category;