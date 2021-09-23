import React, { useState } from "react";
import { Styles } from "./../Styled-Components";
import axiosWithAuth from "../axiosWithAuth";

const EditUser = (props) => {
  const [user, setUser] = useState({
    phone_number: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const saveEdit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/users/${props.ID}`, user)
      .then((res) => {
        // console.log(res);
        alert("your phoneNumber and password changed! 🤪");
      });
  };

  console.log(user);

  return (
    <Styles>
      <form onSubmit={saveEdit}>
        <legend>Edit Your Information</legend>
        <label>
          Phone Number:
          <input
            onChange={handleChange}
            value={user.phone_number}
            type="text"
            name="phone_number"
            placeholder="Edit your Phone Number"
          />
        </label>
        <label>
          Password:
          <input
            value={user.password}
            onChange={handleChange}
            type="text"
            name="password"
            placeholder="Edit Your Password"
          />
        </label>

        <button>Save</button>
      </form>
    </Styles>
  );
};

export default EditUser;
