import React from "react";
import InputList from "./InputList";
import { loginCheck } from "../../Features/loginSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    dispatch(loginCheck(1));
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
