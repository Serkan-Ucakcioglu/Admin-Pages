import React from "react";
import InputList from "./InputList";

function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center mb-4">
      <div className="w-[500px] flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-7 m-auto bg-white rounded-md shadow border border-gray-200 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-black">
            Sign in
          </h1>

          <form className="mt-6" onSubmit={onSubmit}>
            <InputList />
            <div className="mt-8">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
