import React, { useState } from "react";
import Balance from "./components/Balance";
import Navbar from "./components/Navbar";
import Submission from "./components/Submission";
import TotalExpense from "./components/TotalExpense";
import TotalIncome from "./components/TotalIncome";
import Income from "./components/Income";
import Expense from "./components/Expense";

const App = () => {
  const [formData, setFormData] = useState({
    id:"",
    category:"",
    amount:"",
    date: "",
  });
  const [balances, setBalances] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const [incomesDatas, setIncomesDatas] = useState([]);
  const [expenseDatas, setExpenseDatas] = useState([]);


  const handleSave = (data) => {
    console.log(data);
    console.log(incomesDatas);
    
    const amount = parseFloat(formData.amount);
    if (!isNaN(amount)) {
      if (
        ["Salary", "Outsourcing", "Bond", "Divident"].includes(
          data.category
        )
      ) {
        setTotalIncome((prevIncome) => prevIncome + amount);
        setBalances((prevBalances) => prevBalances + amount);
        setIncomesDatas((prevFromDatas) => [...prevFromDatas, data]);
      } else if (
        [
          "Education",
          "Food",
          "Health",
          "Bill",
          "Insurance",
          "Tax",
          "Transport",
          "Telephone",
        ].includes(data.category)
      ) {
        setTotalExpense((prevExpense) => prevExpense + amount);
        setBalances((prevBalances) => prevBalances - amount);
        setExpenseDatas((prevFromDatas) => [...prevFromDatas, data]);
      }
   
      setFormData((prevData) => ({
        ...prevData,
        id:'', //reset id
        category: data.category,  // Keep the same category after submission
        amount: '',  // Reset the amount field
      }));
    } else {
      console.error("Invalid amount entered");
    }
    // income serction
   

  };


  // Delete function for income
  const handleDeleteFromIncome = (id) =>{
    const remaining = incomesDatas.filter(incomeData => incomeData.id !== id);
    setIncomesDatas(remaining);
  }

  // Delete function for delete
  const handleDeleteFromExpense = (id) =>{
    const remaining = expenseDatas.filter(expenseData => expenseData.id !== id);
    setExpenseDatas(remaining);
  }
  return (
    <div>
      <Navbar></Navbar>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Submission Form --> */}
          <Submission
            formData={formData}
            setFormData={setFormData}
            onSave={handleSave}
          ></Submission>

          {/* <!-- Right Column --> */}
          <div className="lg:col-span-2">
            {/* <!-- Total Balance Stat--> */}
            <div className="bg-white">
              <div className="mx-auto max-w-7xl">
                <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
                  <Balance balances={balances}></Balance>
                  <TotalIncome income={totalIncome}></TotalIncome>
                  <TotalExpense expense={totalExpense}></TotalExpense>
                </dl>
              </div>
            </div>

            {/* <!-- List Down --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              <Income onDelete={handleDeleteFromIncome}  incomesDatas={incomesDatas} formData={formData}></Income>
              <Expense onDelete={handleDeleteFromExpense} expenseDatas={expenseDatas} formData={formData}></Expense>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
