import { useState, ChangeEvent, FormEvent } from 'react';
import './App.css';
import ExpenseTable from './components/ExpenseTable';

type Expense = {
  description: string;
  amount: number;
  category: string;
  expenseDate: string;
};

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [expenseDate, setExpenseDate] = useState<string>('');

  const handleDelete = (id: number) => {
    const updatedExpenses = expenses.filter((_, index) => index !== id);
    setExpenses(updatedExpenses);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (description && amount !== null && category && expenseDate) {
      const currentExpense: Expense = {
        description,
        amount,
        category,
        expenseDate,
      };
      setExpenses([currentExpense, ...expenses]);
    }
  };

  return (
    <div className="w-full">
      <div className="flex bg-teal-500 text-2xl text-white min-h-16 items-center justify-center">
        <h1>Expense Tracking</h1>
      </div>
      <form className="flex flex-col md:flex-row justify-between my-4 gap-2 mx-2">
        <div className="flex gap-2 items-center">
          <p>Description:</p>
          <input
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex gap-2 items-center">
          <p>Amount:</p>
          <input
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            type="number"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(e.target.value))}
          />
        </div>

        <div className="flex gap-2 items-center">
          <p>Category:</p>
          <input
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
          />
        </div>

        <div className="flex gap-2 items-center">
          <p>Date:</p>
          <input
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            type="date"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setExpenseDate(e.target.value)}
          />
        </div>

        <div className="flex">
          <button className="border border-gray-300 rounded-md p-2 bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
      
      <ExpenseTable expenses={expenses} handleDelete={handleDelete} />
    </div>
  );
}

export default App;