import { FC, ReactNode } from 'react';

import style from 'styles/modal.module.scss';

interface ModalProps {
    children: ReactNode;
    show: boolean;
    setShow: (value: boolean) => void;
}

const Modal: FC<ModalProps> = ({ children, show, setShow }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={style.block} onClick={() => setShow(false)}>
            <div className={style.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
