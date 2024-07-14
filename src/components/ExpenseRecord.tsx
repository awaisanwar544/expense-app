type Expense = {
  description: string;
  amount: number;
  category: string;
  expenseDate: string;
};

type ExpenseRecordProps = {
  expense: Expense;
  handleDelete: (id: number) => void;
  id: number;
};

const ExpenseRecord = ({ expense, handleDelete, id }: ExpenseRecordProps) => {
  const bgClass = id%2 === 0 ? "px-2 grid grid-cols-6 bg-gray-100" : "px-2 grid grid-cols-6 bg-gray-300"
  return (
    <div className={bgClass}>
      <p className="border-r-teal-500 border-r-2">{id+1}</p>
      <p className="border-r-teal-500 border-r-2 pl-2">{expense.description}</p>
      <p className="border-r-teal-500 border-r-2 pl-2">{expense.amount}</p>
      <p className="border-r-teal-500 border-r-2 pl-2">{expense.category}</p>
      <p className="border-r-teal-500 border-r-2 pl-2">{expense.expenseDate}</p>

      <button className="text-red-500 hover:text-red-600 hover:underline" onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default ExpenseRecord;