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
              className="outline-none block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search Methods, Coffee bags..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 transition duration-150 ease-in-out bg-custom-brown hover:bg-custom-brown-light focus:ring-4 focus:outline-none focus:ring-custom-brown-light font-medium rounded-lg text-sm px-4 py-2 "
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
