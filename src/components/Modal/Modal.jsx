import React from "react";
import Popup from "reactjs-popup";

const Modal = ({ children, trigger, open, closeModal, ...rest }) => {
  return (
    <Popup
      trigger={<div>{trigger}</div>}
      onClose={closeModal}
      open={open}
      position="right center"
      modal
      overlayStyle={{ background: "rgba(0, 0, 0, 0.8)" }}
      nested
      contentStyle={{
        maxHeight: "90%",
        padding: 0,
        borderRadius: "12px",
        backgroundColor: "white",
        width: "fit-content",
        boxShadow: "none",
        overflow: "hidden",
      }}
    >
      {children}
    </Popup>
  );
};

export default Modal;
