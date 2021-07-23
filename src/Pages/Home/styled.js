import styled from 'styled-components';


export const Header=styled.header`
  text-align:center;
  width:100%;
  background-color:darkblue;
  color:whitesmoke;
  position:absolute;
  z-index:1;
`
export const HomeContainer=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height:100vh;
`

export const Content=styled.div`
  
  width:100vw;
  display:flex;
  justify-content:center;
  align-items:center;
  
`
export const Input=styled.input`
  border:1px solid #ddd;
  height:1.5rem;
  padding:0 .5rem;
  border-radius: .25rem 0 0 .25rem;

  &:focus,
  &:active{
    outline:none;
  }
`

export const Button=styled.button`
  height:1.5rem;
  border:1px solid #ddd;
  background:#000;
  color:#fff;
  border-radius: 0 .25rem .25rem 0;

  &:focus,
  &:active{
    outline:none;
  }
`

export const ErrorMsg=styled.span`
  display:block;
  font-size:0.65rem;
  color:red;
  font-height:600;
  margin-top:1rem;
`
