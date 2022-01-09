import React from "react";
import styled from "styled-components";

// border: none;
// outline: none;
// color: #fff;
// padding: 6px 1em;
// font-weight: 600;
// border-color:white;
// border-radius: 50px;
// background-color: #2a9d8f;
// cursor: pointer;
//   box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);


const ButtonWrapper = styled.button`
  cursor: pointer;
  border: 2px solid #fff;
  background-color: transparent;
  height: 50px;
  padding:10px;
  border-radius: 50px;
  
  color: #3498db;
 font-size: ${({ size }) => (size ? size + "px" : "18px")};
  transition: all 200ms ease-in-out;
  &:hover {
    background-color: #21867a;
  }

  &:focus {
    outline: none;
  }
`;

export function Button(props) {
  const { size } = props;

  return (
    <ButtonWrapper size={size} className={props.className}>
      {props.children}
    </ButtonWrapper>
  );
}
