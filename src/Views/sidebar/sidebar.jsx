import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import PriorityController from '../../Controllers/priorityController'

const SideCard = styled.div`
background-color: #bdb7c0;
height: 100%;
text-align: center;
position: relative;

`
const SideCardContainer = styled.div`
height: 100vh;
margin-top: -20px;
`
const SideText1 = styled.h1`
padding-top: 30px;
cursor: pointer;
`
const SideText2 = styled.h2`
/* padding-top: 10px; */
cursor: pointer;
border-bottom: 1px solid black;
&:hover{
    color: grey;
}
`
const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`
const SideText3 = styled.h2`
border-bottom: 1px solid black;
cursor: pointer;
&:hover{
    color: grey;
}
`    
const SideText4 = styled.h2`
border-bottom: 1px solid black;
cursor: pointer;
&:hover{
    color: grey;
}
`    
const Button = styled.button`
color: white;
padding: 10px;
width:85%;
background-color: orange; 
border: none; 
border-radius: 5px; 
position: absolute;
bottom: 12px;
left: 16px;
cursor:pointer;
&:hover{
    background-color: darkorange; 
    transform: scale(1.05)

}
`
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  
    return (
        <SideCardContainer>
        <SideCard >
            <SideText1>Bug-Tracker</SideText1>
            <SideText2><StyledLink to="/">Dashboard</StyledLink></SideText2>
            <SideText3>
                <StyledLink to="/viewbugs">View Bugs</StyledLink>
                </SideText3>
            <SideText4>
                <StyledLink to="/createbuts">Create Bugs</StyledLink>
                </SideText4>
            <Button>Logout</Button>
        </SideCard>
        </SideCardContainer>
    )
}
