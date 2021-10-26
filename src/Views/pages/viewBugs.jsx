import React, {useEffect} from 'react' 
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import { getBugs } from '../../Controllers/Redux/bugSlice'
import BugCard from '../Bug Card/bugCard'

const PageContainer = styled.div`
 display: flex; 
 flex-wrap: wrap;
 gap: 20px; 
 justify-content: center;
 grid-column: 2;

`

// eslint-disable-next-line import/no-anonymous-default-export
export default()=> {
    const dispatch = useDispatch()
    const {bugs} = useSelector(state=>state)
    
    useEffect(() => {
        dispatch(getBugs());
    },[bugs.length < 1])

    return(
        <PageContainer>
            {bugs.map((bug, key)=>(
                 <BugCard key={key} bug={bug}/> 
            ))}
        </PageContainer>
    )
}