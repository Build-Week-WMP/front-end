import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavButtons = styled.button`
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
`
const Nav = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;

`


const Navigation = () => {

return (<Nav>
    <div>
    <h1>Water my Plants</h1>
    </div>
    <div>
<NavButtons>
    <Link to='/' className='navlinks'>Home
</Link>
</NavButtons>



<NavButtons>
    <Link to='/signup' className='navlinks'>Sign Up
</Link>
</NavButtons>

{/* 
<Link  to="/login" className="Login">Login </Link>
 */}
 </div>
</Nav>
)}

export default Navigation;