import React from "react";

function Filters({ Lable, selectedOption, handleChange, options }) {
  return (
    <div className="w-28 my-2">
      <label
        htmlFor="filter"
        className="mb-2 text-sm font-medium text-gray-300"
      >
        {Lable}
      </label>
      <select
        id="filter"
        value={selectedOption}
        onChange={handleChange}
        className="w-full px-4 py-1 text-sm text-gray-300 bg-black border border-gray-200 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
