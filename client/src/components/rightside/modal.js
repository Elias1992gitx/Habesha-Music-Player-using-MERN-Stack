import React, { useEffect } from "react";
import '../../App.css'

const Modal = ({modalContent,removeModal,modalType}) =>{

    useEffect(() => {
        setTimeout(() => {
          removeModal();
        }, 3000);
      }, []);
    return(
        <div className={`modal alert-${modalType}`}>{modalContent}</div>
    )
        
};
export default Modal;

