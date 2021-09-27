import { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ ...props }) => {

  return (
    <S.Container>
      <label>{props.label}</label>
     <input {...props}  />
    </S.Container>
  );
};

export default Input;
