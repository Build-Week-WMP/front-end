import styled from 'styled-components';

export const Styles = styled.div`
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

export const NavButtons = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  touch-action: manipulation;
}
&:hover {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}
`;

export const Nav = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

export const HomeDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 30px;
  text-align: center;
`;

export const IMG = styled.img`
  width: 10%;
`;
