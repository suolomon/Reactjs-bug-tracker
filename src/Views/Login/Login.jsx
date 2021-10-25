/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {signIn} from '../../Controllers/Redux/authSlice'
import styled from 'styled-components';


const Container = styled.div`
 width: 100vw; 
 height:105vh;  
 background: url('https://images.pexels.com/photos/6457574/pexels-photo-6457574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
 background-size: cover;
 grid-column: 1/2;
 position: absolute;
`

const LoginPanel = styled.div`
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(4.9px);
-webkit-backdrop-filter: blur(4.9px);
border: 1px solid rgba(255, 255, 255, 0.3);
 width: 30vw;
 margin: 25vh auto; 
 display: flex; 
 flex-wrap: wrap; 
 justify-content: center; 
 text-align: center;

`

const Title = styled.h1`
  width: 100%;
  font-size: 70px;
`
const Input = styled.input`
 width: 80%; 
 height: 40px; 
 border-radius: 5px;  
 border: none;  
 margin: 10px; 
 padding-left: 5px; 
 outline: none;
`
const Button = styled.button `
 background: #e27114; 
 border-radius: 5px; 
 padding: 5px 20px; 
 color: white;  
 font-family:"Open Sans", sans-serif;
 font-size: 18px;
 text-align: center;
 margin-bottom: 10px;
 cursor: pointer;
 &:hover {
     background:#fd7608; 
     transition: all 0.2s;
 }
`

export default () =>  {
 const dispatch = useDispatch();
 const [formInput, setFormInput] = useState({
     name:"", 
     password: ""
    })
    const handleInputChange=(e)=>{
        setFormInput({
            ...formInput, 
            [e.target.name]: e.target.value
        })
    }
    
    const submit =(e) => {
        e.preventDefault()
        dispatch(signIn(formInput))
    }
    return (
        <Container>
            <LoginPanel>
            <Title>Login</Title>
            <Input name="name" placeholder="Name" onChange={handleInputChange}value={formInput.name}></Input>
            <Input name="password" type="password" placeholder="Password" onChange={handleInputChange} value={formInput.password}></Input>
            <Button type="submit" onClick={submit}>Login</Button>
            </LoginPanel>
        </Container>
    )
}