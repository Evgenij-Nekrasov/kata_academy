import React, { ReactNode, useEffect } from 'react';
import './style.css';
import Image from 'next/image';

interface ModalProp {
  children: ReactNode;
  isScroll: boolean;
  handleClose: () => void;
}

export function Modal({ children, isScroll, handleClose }: ModalProp) {
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
    if (isScroll) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [isScroll]);

  if (!isScroll) return null;

  return (
    <div onClick={handleClose} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <button onClick={handleClose} className="close-btn">
          <span className="close">
            <Image
              width={20}
              height={20}
              src="./assets/icons/icon-close-menu.svg"
              alt="icon-close-menu"
            />
          </span>
        </button>
        {children}
      </div>
    </div>
  );
}
