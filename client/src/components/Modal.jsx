import classes from "./Modal.module.css";

// import { useNavigate } from "react-router-dom";

export default function Modal({ children, onOpen, onClose }) {
  //   const navigate = useNavigate();

  function closeHandler() {
    //   navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
