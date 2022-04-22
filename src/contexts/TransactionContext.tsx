import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type Transaction = {
  title: string;
  id: number;
  amount: number;
  createdAt: string;
  category: string;
  type: "withdraw" | "deposit";
};

type TransactionProviderProps = {
  children: ReactNode;
};

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

type TransactionsContextProps = {
  createTransaction: (transaction: TransactionInput) => void;
  transactions: Transaction[];
};

export const TransactionsContext = createContext<TransactionsContextProps>(
  {} as TransactionsContextProps
);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    setTransactions([...transactions, response.data.transactions]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
