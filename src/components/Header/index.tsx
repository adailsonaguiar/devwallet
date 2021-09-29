import logo from "../../assets/logo.svg";
import { Container, HeaderWrapper } from "./styles";

type HeaderProps = {
  openNewTransactionModal: () => void;
};

export function Header({ openNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <HeaderWrapper>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={openNewTransactionModal}>
          Nova transação
        </button>
      </HeaderWrapper>
    </Container>
  );
}
