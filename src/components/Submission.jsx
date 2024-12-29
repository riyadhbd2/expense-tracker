import React, { useState } from "react";

const Submission = () => {

  const [category, setCategory] = useState("income");
  

  const handleExpense = () => {
    setCategory("expense");
    
  };

  const handleIncome = () => {
    setCategory("income");
    
  };
  return (
    <div>
      <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
        <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
          Expense Tracker
        </h2>

        <form>
          {/* 2 select buttons */}
          <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
            <div
              onClick={handleExpense}
              className={`cursor-pointer text-center flex-1 px-4 py-2 ${category === 'expense' ? 'bg-green-500 text-white' : 'bg-white text-black'}`}
            >
              Expense
            </div>
            <div
              onClick={handleIncome}
              className={`cursor-pointer text-center flex-1 px-4 py-2 ${category === 'income' ? 'bg-green-500 text-white' : 'bg-white text-black'}`}
            >
              Income
            </div>
          </div>

          {/* <!-- Note --> */}
          <div>
            {category === "income" ? (
              <div className="mt-3">
                <label
                  for="category"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    autocomplete="category-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  >
                    <option>Salary</option>
                    <option>Outsourcing</option>
                    <option>Bond</option>
                    <option>Devident</option>
                  </select>
                </div>
              </div>
            ) : (
              <div className="mt-3">
                <label
                  for="category"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    autocomplete="category-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  >
                    <option>Education</option>
                    <option>Food</option>
                    <option>Health</option>
                    <option>Bill</option>
                    <option>Insurance</option>
                    <option>Tax</option>
                    <option>Transport</option>
                    <option>Telephone</option>
                  </select>
                </div>
              </div>
            )}
            {/* Income category */}

            {/* <!-- Expense Categories */}
          </div>
          {/* Amount */}
          <div className="mt-3">
            <label
              for="amount"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Amount
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="amount"
                id="amount"
                autocomplete="off"
                placeholder="12931"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* date */}
          <div className="mt-3">
            <label
              for="date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="date"
                id="date"
                autocomplete="off"
                placeholder="12931"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Submission;