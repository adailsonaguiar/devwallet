import { useState } from "react";
import ReactModal from "react-modal";

import modalCloseIcon from "../../assets/close.svg";
import incomeIcon from "../../assets/income.svg";
import outcomeIcon from "../../assets/outcome.svg";

import * as S from "./styles";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [typeTransaction, setTypeTransaction] = useState<
    "deposit" | "withdraw"
  >("deposit");
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={modalCloseIcon} alt="Close modal" />
      </button>
      <S.Container>
        <h2>Cadastrar Transação</h2>
        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Value" name="value" />
        <S.TypeWrapper>
          <S.ButtonType
            className="deposit"
            type="button"
            onClick={() => setTypeTransaction("deposit")}
            typeActive={typeTransaction === "deposit"}
            activeColor={"deposit"}
          >
            <img src={incomeIcon} alt="" />
            <span>Entrada</span>
          </S.ButtonType>
          <S.ButtonType
            className="withdraw"
            type="button"
            onClick={() => setTypeTransaction("withdraw")}
            typeActive={typeTransaction === "withdraw"}
            activeColor={"withdraw"}
          >
            <img src={outcomeIcon} alt="" />
            <span>Saída</span>
          </S.ButtonType>
        </S.TypeWrapper>
        <input type="text" placeholder="Category" />
        <button type="submit">Register</button>
      </S.Container>
    </ReactModal>
  );
}
