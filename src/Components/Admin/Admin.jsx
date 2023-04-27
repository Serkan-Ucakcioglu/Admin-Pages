import React from "react";
import { useSelector } from "react-redux";
import { selectedUser } from "../../Features/loginSlice";

function Admin() {
  const user = useSelector(selectedUser);

  return <div>admin-{user}</div>;
}

export default Admin;
