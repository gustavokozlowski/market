import Modal from "react-modal";
import PropTypes from "prop-types";


Modal.setAppElement("#root");

export const CartModal = ({ isOpen, closeModal }) => {
  return (
    <div className="modal-container">
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Cart modal"
        overlayClassName="cart-modal-overlay"
        className="cart-modal-content"
      >
        <h1>eu sou uma Batata</h1>
        <button onClick={closeModal}> closed </button>
      </Modal>
    </div>
  );
};

CartModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.bool,
};
