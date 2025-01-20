import css from "./Modal.module.css";
const Modal = ({ isOpen, onClose, photoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={onClose}>
          X
        </button>
        <img src={photoUrl} alt="Modal Content" className={css.modalImage} />
      </div>
    </div>
  );
};

export default Modal;
