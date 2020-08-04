import React from 'react';
const Modal = ({ setSelectedImg, selectedImg }) => {

    const clickHandler = (e) => {
      if (e.target.classList.contains('backdrop')) {
        setSelectedImg(null);
      }
      return (
          <div className="backdrop" onClick={clickHandler} initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} >
          <img src= {selectedImg} alt="big image"  initial={{ y: "-100vh" }}
          animate={{ y: 0 }} />
          </div>
      );
    

    }
}
    export default Modal;