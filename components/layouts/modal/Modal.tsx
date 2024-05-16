import React, { ReactNode, useRef } from 'react';
import './style.css';

import { useEffect } from 'react';

interface ModalProp {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export function Modal({ children, isOpen, handleClose }: ModalProp) {
  useEffect(() => {
    const closeOnEscapeKey = (e: any) =>
      e.key === 'Escape' ? handleClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  //disable scrolling when model is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div onClick={handleClose} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <button onClick={handleClose} className="close-btn">
          <span className="close">&times;</span>
        </button>
        {children}
      </div>
    </div>
  );
}
