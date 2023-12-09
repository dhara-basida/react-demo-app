// Dialog.js

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Dialog = ({ title, children, onClose }) => {
  const dialogContainer = useRef(document.createElement('div'));

  useEffect(() => {
    const portalRoot = document.getElementById('portal-root');

    if (!portalRoot) {
      console.error("The 'portal-root' element is not found in the DOM.");
      return;
    }

    portalRoot.appendChild(dialogContainer.current);

    return () => {
      portalRoot.removeChild(dialogContainer.current);
    };
  }, []);

  return createPortal(
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <div className="dialog-title">{title}</div>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="dialog-body">{children}</div>
      </div>
    </div>,
    dialogContainer.current
  );
};

export default Dialog;
