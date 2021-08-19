import { ContainerContent } from "../ContainerContent";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

import { Container } from "./styles";

export const Dashboard: React.FC = () => {
  return (
    <ContainerContent>
      <Summary />
      <TransactionsTable />
    </ContainerContent>
  );
};
