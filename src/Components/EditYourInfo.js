import React,{useState} from "react"
import axios from "axios"

const editYourInfo = ()=>{
  const userInfo ={
    id:null,
    username:"",
    phonenumber:null,
    password:"",
  }

  const [info, setInfo] = (userInfo);
  
  const onChange =()=>{
    
  }
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    axios
    .put("",info)
    .then.catch

  }

  return (
    <div>
      <Styles>
        <h1>Edit Your Information</h1>
        <form onSubmit={}>
          <label>
            Phone Number:
            <input
              onChange={}
              type="text"
              value={}
              name="phoneNumber"
              placeholder="Edit your Phone Number"
            />
          </label>
          <label>
            Password:
            <input
              onChange={}
              type="text"
              value={}
              name="species"
              placeholder="Edit Your Password"
            />
            </label>
          
          <button className="submitButton">Change</button>
        </form>
      </Styles>
    </div>
  );
}