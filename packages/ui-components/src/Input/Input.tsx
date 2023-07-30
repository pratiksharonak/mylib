import React from 'react';

interface InputProps {
  onChange: () => void;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ onChange, placeholder }) => {
  return <input onChange={onChange} placeholder={placeholder}/>;
};

export default Input;