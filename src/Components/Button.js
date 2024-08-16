import React from "react";
import styled, { css } from "styled-components";
const variantStyles = {
  contained: css`
    background-color: ${(props) => props.backgroundColor || "var(--primary)"};
    color: ${(props) => props.color || "var(--light)"};
    border: ${(props) => props.border || "none"};
    padding: ${(props) => props.padding || "10px 20px"};
    border-radius: ${(props) => props.borderRadius || "4px"};
    font-size: ${(props) => props.fontSize || "0.875rem"};
    text-transform: uppercase;
    font-family: ${(props) => props.fontFamily || "var(--sans)"};
    font-weight: ${(props) => props.fontWeight || "500"};
    width: ${(props) => props.width || "150px"};
    height: ${(props) => props.height || "40px"};
    margin: ${(props) => props.margin || "auto"};
    opacity: 0.8;
    cursor: pointer;
    
    &:hover {
      // background-color: ${(props) => props.backgroundColor || "darkgrey"};
      opacity: 1;
      }
      `,
      text: css`
      background-color: ${(props) => props.backgroundColor || "transparent"};
      color: ${(props) => props.color || "var(--primary)"};
      border: ${(props) => props.border || "none"};
      padding: ${(props) => props.padding || "10px 20px"};
      border-radius: ${(props) => props.borderRadius || "4px"};
      font-size: ${(props) => props.fontSize || "12px"};
      font-family: ${(props) => props.fontFamily || "var(--sans)"};
      font-weight:${(props) => props.fontWeight || "500"};
      text-transform: uppercase;
      width:${(props) => props.width || "150px"};
      height:${(props) => props.height || "50px"};
      margin:${(props) => props.margin || "auto"};
      cursor: pointer;
    opacity: 0.8;
    
    &:hover {
      color: ${(props) => props.hoverColor || "var(--primary)"};
      opacity: 1;
      }
      `,
      outlined: css`
      background-color: ${(props) => props.backgroundColor || "transparent"};
      color: ${(props) => props.color || "var(--primary)"};
      border: ${(props) => props.border || `1px solid  ${props.color}`};
      padding: ${(props) => props.padding || "10px 20px"};
      border-radius: ${(props) => props.borderRadius || "4px"};
    font-size: ${(props) => props.fontSize || "12px"};
    font-family: ${(props) => props.fontFamily || "var(--sans)"};
    text-transform: uppercase;
    font-weight: ${(props) => props.fontWeight || "500"};
    width: ${(props) => props.width || "150px"};
    height: ${(props) => props.height || "40px"};
    margin: ${(props) => props.margin || "auto"};
    cursor: pointer;
    opacity: 0.9;

    &:hover {
      border: ${(props) => props.border || `2px solid ${props.color}`};
      color: ${(props) => props.color || "var(--primary)"};
      
      opacity: 1;
    }
  `,
};

const StyledButton = styled.button`
  ${(props) => variantStyles[props.variant] || variantStyles.contained}
`;

export default function Button(props) {
  return <StyledButton {...props}>{props.btnName}</StyledButton>;
}
Button.defaultProps = {
  btnName: "Enter Button Name",
  variant: "contained",
};
