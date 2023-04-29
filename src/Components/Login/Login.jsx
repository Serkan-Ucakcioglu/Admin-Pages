import React from "react";
import InputList from "./InputList";
import { useSelector } from "react-redux";
import { selectedUser } from "../../Features/loginSlice";
import { Navigate } from "react-router-dom";
import SolarvisLogo from "../../assets/SolarvisLogo";

function Login() {
  const user = useSelector(selectedUser);
  return (
    <>
      {user == "solarvis" ? (
        <Navigate to="/admin" />
      ) : (
        <div className="flex justify-center mb-4">
          <div className="w-[500px] flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-7 m-auto  bg-white rounded-md shadow border border-gray-200 lg:max-w-xl">
              <div className="flex justify-center">
                <SolarvisLogo />
              </div>
              <div className="mt-6">
                <InputList />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
