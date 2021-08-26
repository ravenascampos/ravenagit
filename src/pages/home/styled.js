import { getByTitle } from "@testing-library/react";
import styled from "styled-components";

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background-color: #FFCCCC;
`
export const Title = styled.h1`
font-size: 3rem;
`
export const Text = styled.p`
font-size: 1rem;
`

export const Content = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`

export const Input = styled.input`
margin-top: 2rem;
border: 1px solid #ddd;
height: 1.5rem;
width: 15rem;
padding: 0 .5rem;
border-radius: .25rem 0 0 .25rem;

&:focus, 
&:active {
    outiline: none;
    box-shadow: none;
}
`

export const Button = styled.button`
margin-top: 2rem;
height: 1.5rem;
border: 1px solid #000;
background: #000;
color: #fff;
border-radius: .25rem;

&:focus, 
&:active {
    outiline: none;
    box-shadow: none;
}
`

export const ErrorMsg = styled.span`
display: block;
font-size: 0.65rem;
color: #ff0900;
font-weight: 600;
margin-top: 1rem;
font-size: 1rem;
`