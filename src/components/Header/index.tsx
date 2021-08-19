import logo from "../../assets/logo.svg";
import { Container, HeaderWrapper } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <HeaderWrapper>
        <img src={logo} alt="dt money" />
        <button type="button">Nova transação</button>
      </HeaderWrapper>
    </Container>
  );
};
