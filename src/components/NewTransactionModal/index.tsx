import ReactModal from "react-modal";

import * as S from "./styles";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <h2>Cadastrar Transação</h2>
      <S.Container>
        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Value" name="value" />
        <input type="text" placeholder="Category" />
        <button type="submit">Register</button>
      </S.Container>
    </ReactModal>
  );
}
