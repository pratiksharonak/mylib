import React from 'react';
import styled from "styled-components";
import {typography} from '@yummy/design-tokens/src/typography';

interface ButtonProps {
  onClick: () => void;
  label: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

console.log("typography", typography);
const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size:${typography.size.l1}px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
  color: ${(props) => (props.primary ? "#1b116e" : "#ffffff")};
  background-color: ${(props) => (props.primary ? "#6bedb5" : "#1b116e")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) => (props.primary ? "#55bd90" : "#6bedb5")};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${(props) =>
      props.size === "small"
        ? "5px 23px 6px"
        : props.size === "medium"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
  }
`;

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  label,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      label={label}
      {...props}>{label}
    </StyledButton>
  );
};

// const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
//   return <button onClick={onClick} }>{label}</button>;
// };

export default Button;