import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, open, className = '' }) {
    // useRef is used to get a reference to the <dialog> element
    const dialog = useRef();

     // useEffect hook is used to perform side effects in function components
    useEffect(() => {
        const modal = dialog.current;
        // If the 'open' prop is true, show the modal dialog    
        if (open) {
            modal.showModal();
        }
        // Return a cleanup function  when the 'open' prop changes and the effect runs again
        return () => modal.close();
    }, [open]);

    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`}>
        {children}
        </dialog>,
        // Render the modal into the DOM element with the id 'modal'
        document.getElementById('modal')
    );
}