import type { FC, MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => (
    <button onClick={onClick} className="">
        {children}
    </button>
);

export default Button;
