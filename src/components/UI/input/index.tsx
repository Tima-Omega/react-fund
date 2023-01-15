import type { AllHTMLAttributes, FC } from 'react';

interface InputProps extends AllHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = (props) => <input {...props} />;

export default Input;
