// import Signup from './Signup'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

const HomeDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 60px;
    text-align: center;
`;

const IMG = styled.img`
    width: 10%;
`


const Home = () => {

    return (
        <HomeDiv>
            <h3>Let us help you water your plants.</h3>
            <p>or not.</p>
            <IMG src='https://svgsilh.com/svg/48879.svg' alt='watering can' />
        </HomeDiv>
    )
}

export default Home;