import { FC, AllHTMLAttributes } from 'react';

interface InputProps extends AllHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = (props) => {
    return <input {...props} />;
};

export default Input;
