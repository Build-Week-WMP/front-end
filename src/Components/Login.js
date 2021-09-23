import { Styles } from "./Styled-Components";
import { useState, useEffect } from "react";
import * as yup from "yup";
import axiosWithAuth from "../axiosWithAuth/axiosWithAuth";

const schema = yup.object().shape({
  username: yup.string().min(2, "Names must be at least 2 characters long"),
  password: yup.string().min(8, "Minimum 8 characters required!"),
});

const Login = (props) => {
  const { setID } = props;
  // console.log(ID);
  const [disabled, setDisabled] = useState(true);

  const [form, updateValue] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: " ",
    password: " ",
  });

  const login = (e) => {
    e.preventDefault();
    return axiosWithAuth()
      .post("/api/auth/login", form)
      .then((res) => {
        setID(res.data.user_id);
        localStorage.setItem("token", res.data.token);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
  //   //⬇️ call axiosWithAuth with post request to api login route
  //   console.log("form", form);
  //   //This is the way to clear the form after submission
  //   updateValue({
  //     username: "",
  //     password: "",
  //   });
  // };

  return (
    <Styles>
      <h1>Log In</h1>
      <form onSubmit={login}>
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
          {disabled ? "Not Valid" : "Log In"}
        </button>
      </form>
    </Styles>
  );
};

export default Login;
