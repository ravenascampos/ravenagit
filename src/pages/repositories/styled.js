import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
width: 100%;
max-width: 991px;
margin: 0 auto;
background-color: #FFCCCC;
`

export const Title = styled.h1`
text-align: center;
font-size: 2rem;
font-family: sans-serif;
color: #333;
margin-top: 2rem;
`

export const List = styled.ul`
list-style: none;
padding: 0;
margin: 5rem 0;
font-family: sans-serif;
`

export const ListItem = styled.li`
margin: 0.5rem 0;
background: #000;
color: #fff;
padding: .5rem;
border-radius: .25rem;
`
export const LinkHome = styled(Link)`
display: block;
width: 4rem;
text-align: center;
margin: 10rem auto;
background-color: #000;
padding: .5rem 0;
color: #fff;
text-decoration: none;
border-radius: .25rem;
`
