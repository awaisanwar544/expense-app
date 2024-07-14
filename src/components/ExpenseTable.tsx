import ExpenseRecord from './ExpenseRecord';

type Expense = {
  description: string;
  amount: number;
  category: string;
  expenseDate: string;
};

type ExpenseTableProps = {
  expenses: Expense[];
  handleDelete: (id: number) => void;
};

const ExpenseTable = ({ expenses, handleDelete }: ExpenseTableProps) => {
  return (
    <div className="mx-2 my-4">
      <div className="flex min-h-8 bg-gray-200 items-center">
        <h2 className="text-xl p-2">Expenses</h2>
      </div>
      <div className="px-2 grid grid-cols-6 text-white bg-gray-600 text-center">
        <h3 className="border-r-teal-500 border-r-2">Id</h3>
        <h3 className="border-r-teal-500 border-r-2">Description</h3>
        <h3 className="border-r-teal-500 border-r-2">Amount</h3>
        <h3 className="border-r-teal-500 border-r-2">Category</h3>
        <h3 className="border-r-teal-500 border-r-2">Expense Date</h3>
      </div>

      <div>
        {expenses.map((expense, index) => (
          <ExpenseRecord key={index} expense={expense} handleDelete={handleDelete} id={index} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseTable;