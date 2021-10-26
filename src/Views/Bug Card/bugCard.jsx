import React from 'react'
import styled from 'styled-components'
import PriorityController from '../../Controllers/priorityController'

const BugCard = styled.div`
background-color: #bdb7c0;
box-shadow: 2px 2px 2px grey;
text-align: center;
margin: 10px;
min-width: 275px;
min-height: 200px;
&:hover{
    transition: all 0.3s;  
    transform: scale(1.05);
}
`
const BugCardContainer = styled.div`
height: 100vh;
`
const BugText2 = styled.h2``
const BugText3 = styled.h3``
const BugText4 = styled.h4``    

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const {name, priority, version} = props.bug
    const {level, colour} = PriorityController(priority);
    const clicked =()=> (
        props.clicked(props.name)
    )
    return (
        <BugCardContainer>
        <BugCard onClick={clicked} style={{color:colour}}>
            <BugText2>{name}</BugText2>
            <BugText3>{level}</BugText3>
            <BugText4>{version}</BugText4>
        </BugCard>
        </BugCardContainer>
    )
}

