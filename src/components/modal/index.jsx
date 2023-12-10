/* eslint-disable react/prop-types */
import Modal from "react-modal";
import PropTypes from "prop-types";
import { CartContext } from "../../contexts/cart.jsx";
import { ButtonPlus } from "../button/plus";
import { useContext } from "react";
import { Button } from "../button/normal/index.jsx";

Modal.setAppElement("#root");

const CardItem = ({ product }) => {
  return (
    <div key={product?.id} className="card-modal-container">
      <img src={product?.image} />
      <h2>{product?.title}</h2>
      <ButtonPlus className="card-button">{product?.quantity}</ButtonPlus>
    </div>
  );
};

// FAZER CONDICIONAL PARA RENDERIZAR OS PRODUTOS DO CARRINHO
// COLOCAR A OPÇÃO REMOVER O ITEM DO CARRINHO

export const CartModal = ({ isOpen, closeModal }) => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="modal-container">
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Cart modal"
        overlayClassName="cart-modal-overlay"
        className="cart-modal-content"
      >
        <header className="cart-modal-header">
          Seu carrinho:
          <button className="btn-header-modal" onClick={closeModal}>
            X
          </button>
        </header>
        {cartItems &&
          cartItems.map((product, index) => (
            <CardItem key={index} product={product} />
          ))}
        <footer className="cart-modal-footer">
          <Button className="btn-cart-modal" value="Continuar" />
        </footer>
      </Modal>
    </div>
  );
};

CartModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};
