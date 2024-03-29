import styled from "styled-components";

export const PageLoginSection = styled.section`
max-width: 40%;
margin-right: auto;
margin-left: auto;
margin-top: 20px;
padding-bottom: 10px;
padding-right: 5px;
align-items: center;
background: rgb(220,220,220);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 0.5rem;
`;

export const PageLoginTitle = styled.h1`
margin:0;
padding: 2rem;
text-align: center;
color: #000;
font-weight: bold;
font-size: 24px;
`;

export const PageHomeLabel = styled.label`
   display: block;
  margin-top:20px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  color: #000;
`;

export const PageHomeInput = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 50%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;

  &:focus {
   outline-color: #2196F3;
    }
`;

export const PageHomeBtn = styled.button`
margin-top: 15px;
 padding: 10px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  cursor: pointer;
  color: black;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  &:focus, :hover {
   opacity: 1;
   color: #2196F3;
 }
`;