import React from 'react';
import styled, { css } from 'styled-components';
const variantStyles = {
  contained: css`
    background-color: blue;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: darkblue;
    }
  `,
  text: css`
    background-color: transparent;
    color: blue;
    border: none;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      color: darkblue;
    }
  `,
  outlined: css`
    background-color: transparent;
    color: blue;
    border: 2px solid blue;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: blue;
      color: white;
    }
  `,
};

const StyledButton = styled.VariantButton`
  ${props => variantStyles[props.variant] || variantStyles.contained}
`;

function VariantButton(props) {
  return (
    <StyledButton variant={props.variant} {...props}>
      {props.btnName}
    </StyledButton>
  );
}

VariantButton.defaultProps = {
  btnName: 'Enter Button Name',
  variant: 'contained', 
};

export default VariantButton;
