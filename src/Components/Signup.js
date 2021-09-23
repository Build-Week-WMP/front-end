import { Styles } from "./Styled-Components";
import { useState, useEffect } from "react";
import * as yup from "yup";
import axiosWithAuth from "./axiosWithAuth";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  username: yup.string().min(2, "Names must be at least 2 characters long"),
  password: yup.string().min(8, "Minimum 8 characters required!"),
  phone_number: yup
    .number()
    .min(7, "Enter the full number")
    .required("Phone Number is Required"),
});

const Signup = (props) => {
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);

  const [form, updateValue] = useState({
    username: "",
    phone_number: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: " ",
    phone_number: " ",
    password: " ",
  });

  const setFormErrors = (name, value) => {
    console.log(name, value);
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors });
      });
  };

  const changeFunction = (e) => {
    setFormErrors(e.target.name, e.target.value);
    updateValue({ ...form, [e.target.name]: e.target.value });
    // console.log("form data in change", form);
  };

  useEffect(() => {
    schema.isValid(form).then((valid) => setDisabled(!valid));
  }, [form]);

  // const submitFunction = (e) => {
  //   e.preventDefault();
  //   console.log("form", form);
  //   updateValue({
  //     username: "",
  //     phoneNumber: "",
  //     password: "",
  //   });
  // };

  const signUp = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/register", form)
      .then((res) => {
        console.log(res);
        updateValue({
          username: "",
          phone_number: "",
          password: "",
        });
        history.push("/login");
      });
  };

  return (
    <Styles>
      <h1>Sign Up Form</h1>
      <form onSubmit={signUp}>
        <label>
          {" "}
          User Name:
          <input
            onChange={changeFunction}
            value={form.username}
            name="username"
            type="text"
            placeholder="Enter User Name"
          />
        </label>
        <p className="error">{errors.username}</p>
        <label>
          {" "}
          Phone Number:
          <input
            onChange={changeFunction}
            value={form.phone_number}
            name="phone_number"
            type="string"
            placeholder="Enter Phone Number"
          />
        </label>
        <p className="error">{errors.phone_number}</p>
        <label>
          {" "}
          Password:
          <input
            onChange={changeFunction}
            value={form.password}
            name="password"
            type="text"
            placeholder="Enter Password"
          />
        </label>
        <p className="error">{errors.password}</p>
        <button className="submitButton" disabled={disabled}>
          {disabled ? "Not Valid" : "Sign Up"}
        </button>
      </form>
    </Styles>
  );
};

export default Signup;
