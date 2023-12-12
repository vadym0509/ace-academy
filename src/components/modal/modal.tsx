interface ModalProps {
    classNames?: string;
    children: React.ReactNode;
    visible: boolean;
}

const Modal = ({classNames, children, visible}: ModalProps) => {
    const modalClassNames = `p-16 ${classNames}`;

    return (
        <>
            {visible && <div className={modalClassNames}>
                {children}
            </div>}
        </>
    )
}

export default Modal