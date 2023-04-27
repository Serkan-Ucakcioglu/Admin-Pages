import React from "react";

function InputList() {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-800"
        >
          Email
        </label>
        <input
          type="name"
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-gray-800"
        >
          Password
        </label>
        <input
          type="password"
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    </>
  );
}

export default InputList;
