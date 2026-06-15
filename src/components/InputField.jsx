import React from 'react';
import { FaSearch } from 'react-icons/fa';

const InputField = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter the location..."
          className="bg-gray-200 px-3 py-2 focus:outline-none capitalize text-gray-700 rounded-l-md"
        />
        <button className="bg-orange-400 text-white px-3 py-3 rounded-r-md hover:bg-orange-500 cursor-pointer">
          <FaSearch />
        </button>
      </div>

      <div className="flex items-center text-white text-xl space-x-2">
        <button className='cursor-pointer'>
         °C
        </button>
        <span>|</span>
        <button className='cursor-pointer'>
         °F
        </button>
      </div>
    </div>
  );
};

export default InputField;