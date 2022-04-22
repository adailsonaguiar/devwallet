import { useTransaction } from "../../hooks/useTransactions";
import { formatDate, formatMoney } from "../../util/formatters";
import { Container } from "./styles";

export const TransactionsTable: React.FC = () => {
  const { transactions } = useTransaction();
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {formatMoney(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatDate(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
