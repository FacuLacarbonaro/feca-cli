"use client";

import { useState } from "react";

interface Props {
  helperText: string;
}

const Searchbar = ({ helperText }: Props) => {
  const [input, setInput] = useState("");

  return (
    <div className="">
      <div className="flex flex-col items-center max-w-md mx-auto ">
        <h2 className="text-lg font-semibold">{helperText}</h2>

        <form className="w-full">
          <div className="relative mb-4 flex  w-full flex-wrap items-stretch">
            <input
              type="search"
              className="outline-none block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Methods, Coffee bags..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5  bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
