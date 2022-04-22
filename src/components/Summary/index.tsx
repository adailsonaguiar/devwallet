import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransaction } from "../../hooks/useTransactions";
import { formatMoney } from "../../util/formatters";
import { Container } from "./styles";

export const Summary: React.FC = () => {
  const { transactions } = useTransaction();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.incomes += transaction.amount;
        acc.total += transaction.amount;
      }
      if (transaction.type === "withdraw") {
        acc.outcomes += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      incomes: 0,
      outcomes: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>{formatMoney(summary.incomes)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Outcomes" />
        </header>
        <strong>- {formatMoney(summary.outcomes)}</strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatMoney(summary.total)}</strong>
      </div>
    </Container>
  );
};
