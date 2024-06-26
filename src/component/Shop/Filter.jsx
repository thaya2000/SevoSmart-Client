import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const Filter = ({ categories, selectedCategory, onSelectCategory }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSelectCategory = (category) => {
    onSelectCategory(category);
    setShowOptions(false);
  };

  return (
    <div className="relative p-4 shadow-md rounded-md">
      <div className="flex items-center mb-4">
        <FaFilter className="mr-2" />
        <button
          className="w-full text-left p-2 rounded bg-blue-500 text-white"
          onClick={handleToggleOptions}
        >
          {selectedCategory || "All"}
        </button>
      </div>
      {showOptions && (
        <ul className="absolute left-0 top-full mt-2 w-full shadow-md rounded-md z-10">
          <li>
            <button
              className={`block w-full text-left p-2 rounded ${
                !selectedCategory ? "bg-blue-500 text-white" : "bg-transparent text-black"
              }`}
              onClick={() => handleSelectCategory(null)}
            >
              All
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`block w-full text-left p-2 rounded ${
                  selectedCategory === category ? "bg-blue-500 text-white" : "bg-transparent text-black"
                }`}
                onClick={() => handleSelectCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
