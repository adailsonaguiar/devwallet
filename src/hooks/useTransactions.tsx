import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";

export function useTransaction() {
  const context = useContext(TransactionsContext);
  return context;
}
