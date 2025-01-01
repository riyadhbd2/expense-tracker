import React, { useEffect} from "react";

const Submission = ({ onSave, formData, setFormData, category, setCategory, editList }) => {

  

  // Initialize the formData.category based on the selected category on first render
  useEffect(() => {
    const defaultCategory = category === "income" ? "Salary" : "Education";
    setFormData((prevData) => ({
      ...prevData,
      category: defaultCategory,
    }));
  }, [category, setFormData]);

  // Initialize the formData based on the selected list for edit
  useEffect(() => {
    if (editList) {
      setFormData(editList);
    }
  }, [editList]);


  // handle Enpense Function
  const handleExpense = () => {
    setCategory("expense");
    setFormData((prevData) => ({
      ...prevData,
      category: "Eduation",
    }));
  };

  // handle Income Function
  const handleIncome = () => {
    setCategory("income");
    if (editList) {
      setFormData((prevData)=> prevData.filter((p) => p.id !== editList.id));
    } else{
      setFormData((prevData) => ({
        ...prevData,
        category: "Salary",
      }));
    }
   
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      id: Date.now(),
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    onSave(formData);
  };



  return (
    <div>
      <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
        <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
          Expense Tracker
        </h2>

        <form onSubmit={handleSubmit}>
          {/* 2 select buttons */}
          <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
            <div
              onClick={handleExpense}
              className={`cursor-pointer text-center flex-1 px-4 py-2 ${
                category === "expense"
                  ? "bg-green-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              Expense
            </div>
            <div
              onClick={handleIncome}
              className={`cursor-pointer text-center flex-1 px-4 py-2 ${
                category === "income"
                  ? "bg-green-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              Income
            </div>
          </div>

          {/* <!-- Note --> */}
          <div>
            {category === "income" ? (
              <div className="mt-3">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
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
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
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
              htmlFor="amount"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Amount
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="amount"
                id="amount"
                value={formData.amount}
                onChange={handleChange}
                autocomplete="off"
                placeholder="12.99"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 placeholder:p-1"
              />
            </div>
          </div>
          {/* date */}
          <div className="mt-3">
            <label
              htmlFor="date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                autocomplete="off"
                placeholder="12.99"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 placeholder:p-1"
              />
            </div>
          </div>

          <button type="submit" className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full">{editList ? "Update" : "Add"}</button>
        </form>
      </div>
    </div>
  );
};

export default Submission;
