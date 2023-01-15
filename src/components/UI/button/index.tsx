import { FC, ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="">
            {children}
        </button>
    );
};

export default Button;
