// Dialog.jsx
import React, { useEffect } from 'react';
import { Portal } from 'react-portal';
import FocusTrap from 'focus-trap-react';
import './ModalDialog.css';

const ModalDialog = ({ title, children, onClose }) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const modalRoot = document.getElementById('modal-root');

    return (<Portal node={modalRoot}>
        <FocusTrap>
            <div className="dialog-overlay" onClick={onClose}>
                <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
                    <div className="dialog-header">
                        <img src="image/Close-Button.svg" className="close-button" alt="close" onClick={onClose} />
                        <div className="dialog-title">{title}</div>
                    </div>
                    <div className="dialog-body">{children}</div>
                </div>
            </div>
        </FocusTrap>
    </Portal>);
};

export default ModalDialog;
