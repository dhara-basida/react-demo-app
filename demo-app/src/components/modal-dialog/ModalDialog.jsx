// Dialog.jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Portal } from 'react-portal';
import  FocusTrap  from 'focus-trap-react';


const ModalDialog = ({ title, children, onClose }) => {
    // useEffect(() => {
    //     const handleKeyDown = (event) => {
    //         if (event.key === 'Escape') {
    //             onClose();
    //         }
    //     };

    //     window.addEventListener('keydown', handleKeyDown);

    //     return () => {
    //         window.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, [onClose]);

    const modalRoot = document.getElementById('modal-root');

    return (<Portal node={modalRoot}>
        <FocusTrap>
            <div className="dialog-overlay" onClick={onClose}>
                <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
                    <div className="dialog-header">
                        <div className="dialog-title">{title}</div>
                        <button className="close-button" onClick={onClose}>Close
                            {/* // will add path later
                        <img src="/path/to/close-button-image.png" alt="Close" /> */}
                        </button>
                    </div>
                    <div className="dialog-body">{children}</div>
                </div>
            </div>
        </FocusTrap>
    </Portal>);
};

export default ModalDialog;
