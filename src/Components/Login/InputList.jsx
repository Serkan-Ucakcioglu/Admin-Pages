import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginCheck, selectedErr } from "../../Features/loginSlice";
import { useNavigate } from "react-router-dom";

function InputList() {
  const formErr = useSelector(selectedErr);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const onChanged = (event) => {
    const { name, value } = event.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    dispatch(loginCheck(login));
    if (!formErr) {
      navigate("/admin");
    }
  };
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-left text-sm font-semibold text-gray-800"
        >
          Email
        </label>
        <input
          value={login.email}
          type="email"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          name="email"
          onChange={onChanged}
          className="block w-full outline-none px-4 py-2 mt-2 bg-white border rounded-md hover:border-black"
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="password"
          className="block text-left  text-sm font-semibold text-gray-800"
        >
          Password
        </label>
        <input
          value={login.password}
          type="password"
          name="password"
          onChange={onChanged}
          className="block w-full px-4 outline-none py-2 mt-2  bg-white border rounded-md hover:border-black"
        />
      </div>
      <div className="mt-3">
        {formErr && (
          <span className="text-red-500 font-bold ">
            Email or password is incorrect
          </span>
        )}
      </div>
      <div className="mt-8">
        <button
          onClick={onSubmit}
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>
      </div>
    </>
  );
}

export default InputList;
