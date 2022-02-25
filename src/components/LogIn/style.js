import styled from "styled-components";


export const Container = styled.div`
width:98%;
height: 100%;
padding: 20px;
position: relative;

`

export const Wrapper= styled.div`
width:100%;
height: 400px;
background-color: #329771;
position: absolute;
z-index: -1                                                                                                                                                                                                     ;
`

export const Form =styled.div`
width: 430px;
height: 334px;
background: white;
margin: 200px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:30px;

`

export const Input = styled.input`
width: 70%;
border: 1px solid rgba(0,0,0,0.2);
height: 25px;
`

export const Btn = styled.button`
width: 320px;
height: 40px;
background:#329771 ;
color: white;

`