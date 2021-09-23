import styled from 'styled-components';

export const Styles = styled.div`
 background: #A6FFBE;
 padding: 10px;
 width: 50%;
 margin: 0 auto;
 border-radius: 10px;
 border: 1px solid black;
 font-family: "Open Sans", sans-serif;

 h1 {
   border-bottom: 1px solid #2D8043;
   font-family: 'Caveat', cursive;
   color: #2D8043;
   margin: 3;
   font-size: 30px;
   font-weight: 600;
   line-height: 24px;
   padding: 5px;
   text-align: center;
 }

 p {
  color: #2D8043;
 }

 form {
   background: #47CC6B;
   font-family: 'Caveat', cursive;
   border: 1px solid #2D8043;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 60px;
 }

 input {
   border: 1px solid #2D8043;
   font-family: 'Caveat', cursive;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
   background: #A6FFBE;
   color: #2D8043;
 }

 label {
   color: #2D8043;
   display: block;
   font-family: 'Caveat', cursive;
   font-size: 16px;
   font-weight: 500;
   margin-bottom: 5px;
 }

 .error {
   color: red;
 }

 .submitButton {
   background-color: #2D8043;
   border-radius: 3px;
   text-transform: uppercase;
   height: 30px;
   color: #A6FFBE;
   font-family: 'Caveat', cursive;
   font-size: 14px;
   margin: 20px 0px;
`;

export const NavButtons = styled.button`
font-family: 'Caveat', cursive;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  background: #A6FFBE;
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

export const Title = styled.h1`
font-family: 'Dancing Script', cursive;
color: #A6FFBE;
font-size: 45px;
`;

export const HomeDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 30px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  color: #2D8043;
`;

export const Description = styled.h2`
font-family: 'Caveat', cursive;
color: #A6FFBE;
font-size: 30px;
`;

export const IMG = styled.img`
  width: 10%;
`;
