import styled from 'styled-components'
import {useState,useEffect} from 'react'
import * as yup from 'yup';

const Styles = styled.div`
 background: grey;
 padding: 10px;
 width: 50%;
 margin: 0 auto;
 border-radius: 10px;
 font-family: "Open Sans", sans-serif;

 h1 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   margin: 3;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 5px;
   text-align: center;
 }

 form {
   background: white;
   font-family: "Open Sans", sans-serif;
   border: 1px solid #dedede;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 60px;
 }

 input {
   border: 1px solid #black;
   font-family: "Open Sans", sans-serif;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 label {
   color: black;
   display: block;
   font-family: "Open Sans", sans-serif;
   font-size: 16px;
   font-weight: 500;
   margin-bottom: 5px;
 }

 .error {
   color: red;
 }

 .submitButton {
   background-color: black;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
`;


const schema = yup.object().shape({
    username: yup.string().min(2, "Names must be at least 2 characters long"),
    password: yup.string()
   .min(8, 'Minimum 8 characters required!'),
    phoneNumber: yup.number()
    .min(7,'Enter the full number' )
    .required('Phone Number is Required')
})


const Signup = (props) => {

    const [disabled, setDisabled] = useState(true);
    
    const[form,updateValue] = useState({
        username: '',
        phoneNumber: '',
        password: '',
        
    })
   

    const [errors, setErrors] = useState({
        username: ' ',
        phoneNumber: ' ',
        password: ' ',
    })


    const setFormErrors = (name, value) => {
        console.log(name,value)
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({...errors, [name]: ''}))
        .catch((err) => {
            setErrors({...errors, [name]: err.errors})
        })
    }

    const changeFunction = (e) => {
        setFormErrors(e.target.name, e.target.value)
        updateValue({...form,[e.target.name]:e.target.value})
        console.log('form data in change',form)
    }

    useEffect(() => {
        schema.isValid(form).then(valid =>setDisabled(!valid))
    }, [form])

    const submitFunction =(e)=>{
        e.preventDefault();
        console.log('form',form)
        updateValue({
            username: '',
            phoneNumber: '',
            password: '',
            
        });
    }

    return (
        <Styles>
            <h1>Sign Up Form</h1>
            <form onSubmit={submitFunction}>
                <label> User Name:
                    <input onChange={changeFunction} value={form.username} name="username" type="text" placeholder="Enter User Name"/>
                </label>
                <p className='error'>{errors.username}</p>
                <label> Cell Number:
                    <input onChange={changeFunction} value={form.phoneNumber} name="phoneNumber" type="string" placeholder="Enter Phone Number"/>
                </label>
                <p className='error'>{errors.phoneNumber}</p>
                <label> Password:
                    <input onChange={changeFunction} value={form.password} name="password" type="text" placeholder="Enter Password"/>
                </label>
                <p className='error'>{errors.password}</p>
                <button className="submitButton" disabled = {disabled}>{disabled ? 'Not Valid' : 'Yay'}</button>
            </form>
        </Styles>
    )
}

export default Signup;