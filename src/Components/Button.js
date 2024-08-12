import React from 'react';
import styled, { css } from 'styled-components';
const variantStyles = {
  contained: css`
    background-color: ${props => props.backgroundColor || 'grey'};
    color: ${props => props.color || 'white'};
    border: ${props => props.border || 'none'};
    padding: ${props => props.padding || '10px 20px'};
    border-radius: ${props => props.borderRadius || '4px'};
    font-size: ${props => props.fontSize || '12px'};
    font-family: ${props => props.fontFamily || 'Halvatica'};
    font-weight:${props=> props.fontWeight || '700'}
    width:${props=> props.width || '800px'}
    height:${props=> props.height || '40px'}
    margin:${props=> props.margin || 'auto'}
    cursor: pointer;

    &:hover {
      background-color: ${props => props.hoverBackgroundColor || 'darkgrey'};
    }
  `,
  text: css`
    background-color: ${props => props.backgroundColor || 'transparent'};
    color: ${props => props.color || 'black'};
    border: ${props => props.border || 'none'};
    padding: ${props => props.padding || '10px 20px'};
    border-radius: ${props => props.borderRadius || '4px'};
    font-size: ${props => props.fontSize || '12px'};
    font-family: ${props => props.fontFamily || 'Halvatica'};
    font-weight:${props=> props.fontWeight || '700'}
    width:${props=> props.width || '150px'}
    height:${props=> props.height || '50px'}
    margin:${props=> props.margin || 'auto'}
    cursor: pointer;

    &:hover {
      color: ${props => props.hoverColor || '#949392'};
    }
  `,
  outlined: css`
background-color: ${props => props.backgroundColor || 'transparent'};
    color: ${props => props.color || '#949392'};
    border: ${props => props.border || '2px solid #949392'};
    padding: ${props => props.padding || '10px 20px'};
    border-radius: ${props => props.borderRadius || '4px'};
    font-size: ${props => props.fontSize || '12px'};
    font-family: ${props => props.fontFamily || 'Halvatica'};
    font-weight:${props=> props.fontWeight || '700'}
    width:${props=> props.width || '150px'}
    height:${props=> props.height || '40px'}
    margin:${props=> props.margin || 'auto'}
    cursor: pointer;
    
    &:hover {  
    border: ${props => props.border || '2px solid black'};
      color: ${props => props.hoverColor || 'black'};
    }
  `,
};

const StyledButton = styled.button`
  ${props => variantStyles[props.variant] || variantStyles.contained}
`;

export default function Button(props) {
  return (
    <StyledButton 
    {...props}>
      {props.btnName}
      </StyledButton>
  );
}
Button.defaultProps = {
  btnName: 'Enter Button Name',
  variant: 'contained', 
}