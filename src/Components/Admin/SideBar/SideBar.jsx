import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../../../assets/Dashboard";
import Logout from "../../../assets/Logout";
import { logOut } from "../../../Features/loginSlice";
import { useDispatch } from "react-redux";
import CreatePages from "../../../assets/CreatePages";

function SideBar() {
  const dispatch = useDispatch();
  const logOuts = () => {
    dispatch(logOut());
  };

  return (
    <>
      <div className="w-[230px] bg-gray-800 shadow-2xl h-screen p-3">
        <ul className="flex mt-4 h-5/6 items-start flex-col space-y-3">
          <li className="w-full border border-white p-1 rounded hover:bg-gray-900">
            <Link
              to="/"
              className="flex text-white items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700"
            >
              <Dashboard />
              <span class="ml-3">Dashboard</span>
            </Link>
          </li>
          <li className="w-full border border-white rounded hover:bg-gray-900">
            <Link
              to="create"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700"
            >
              <CreatePages />
              <span class="ml-3 text-white">Create Page</span>
            </Link>
          </li>
        </ul>
        <div
          onClick={logOuts}
          className="flex justify-center items-center p-1 cursor-pointer text-white hover:bg-gray-900 border border-white  rounded  mt-auto items-end"
        >
          <Logout />
          Log out
        </div>
      </div>
    </>
  );
}

export default SideBar;
