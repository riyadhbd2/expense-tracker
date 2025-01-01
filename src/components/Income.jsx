import React, { useState } from "react";

const Income = ({
  incomesDatas,
  setIncomesDatas,
  onDelete,
  onEdit
}) => {
  const [showIncomeSort, setShowIncomeSort] = useState(false);
  const [showIncomeFilter, setShowIncomeFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Function for filtering
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setSelectedCategories((prev) => {
      const updatedCategories = checked
        ? [...prev, value] // Add selected category
        : prev.filter((category) => category !== value); // Remove unselected category

      console.log(updatedCategories); // Logs the updated state
      return updatedCategories;
    });
  };

  // Filter the incomesDatas based on selectedCategories
  const filteredData = selectedCategories.length
    ? incomesDatas.filter((item) => selectedCategories.includes(item.category))
    : incomesDatas;

  // Function to sort low to high
  const sortLowToHigh = () => {
    const sorted = [...incomesDatas].sort((a, b) => a.amount - b.amount);
    setIncomesDatas(sorted);
  };

  // Function to sort high to low
  const sortHighToLow = () => {
    const sorted = [...incomesDatas].sort((a, b) => b.amount - a.amount);
    setIncomesDatas(sorted);
  };

  // Handle edit action
  const handleEdit = (id) => {
    onEdit(id);
  };

  // Handle delete action
  const handleDelete = (id) => {
    onDelete(id);
  };

  // Toggle sort menu
  const handleIncomeSort = () => {
    setShowIncomeSort((prevState) => !prevState);
  };

  // Toggle filter menu
  const handleIncomeFilter = () => {
    setShowIncomeFilter((prevState) => !prevState);
  };

  return (
    <div>
      <div className="border rounded-md relative">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
          {/* Header Left */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-teal-600 text-white rounded-md flex items-center justify-center text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 1 1 1 1v3m0 4v3a1 1 0 1 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Income
            </h3>
          </div>

          {/* Header Right */}
          <div className="flex gap-2">
            {/* Sorting */}
            <div className="relative inline-block">
              <button
                type="button"
                onClick={handleIncomeSort}
                className="bg-white px-2 py-1 text-sm font-semibold text-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6l9 0" />
                  <path d="M4 12l7 0" />
                  <path d="M4 18l7 0" />
                  <path d="M15 15l3 3l3 -3" />
                  <path d="M18 6l0 12" />
                </svg>
              </button>
              {showIncomeSort && (
                <div className="absolute z-10 mt-2 w-56 bg-white shadow-lg rounded-md">
                  <button
                    onClick={sortLowToHigh}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Low to High
                  </button>
                  <button
                    onClick={sortHighToLow}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    High to Low
                  </button>
                </div>
              )}
            </div>

            {/* Filtering */}
            <div className="relative inline-block">
              <button
                type="button"
                onClick={handleIncomeFilter}
                className="bg-white px-2 py-1 text-sm font-semibold text-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-alt"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 8h4v4h-4z" />
                  <path d="M6 4l0 4" />
                  <path d="M6 12l0 8" />
                  <path d="M10 14h4v4h-4z" />
                  <path d="M12 4l0 10" />
                  <path d="M12 18l0 2" />
                  <path d="M16 5h4v4h-4z" />
                  <path d="M18 4l0 1" />
                  <path d="M18 9l0 11" />
                </svg>
              </button>
              {showIncomeFilter && (
                <div className="absolute z-10 mt-2 w-56 bg-white shadow-lg rounded-md">
                  {["Salary", "Outsourcing", "Bond", "Dividend"].map(
                    (category, index) => (
                      <label
                        key={index}
                        className="flex items-center px-4 py-2 text-sm text-gray-700"
                      >
                        <input
                          type="checkbox"
                          value={category}
                          onChange={handleCheckboxChange}
                          className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                        />
                        <span className="ml-2">{category}</span>
                      </label>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Income Data */}
        <div className="p-4 divide-y">
          {filteredData.map((incomeData) => (
            <div
              key={incomeData.id}
              className="flex justify-between items-center py-2 group relative cursor-pointer"
            >
              <div>
                <h3 className="text-base font-medium text-gray-600">
                  {incomeData.category}
                </h3>
                <p className="text-xs text-gray-600">{incomeData.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                  BDT {incomeData.amount}
                </p>

                {/* edit and delete button */}
                <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                  {/* edit button */}
                  <button
                    onClick={() => handleEdit(incomeData.id)}
                    className="hover:text-teal-600"
                    role="button"
                    title="Edit Button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                      <path d="M13.5 6.5l4 4" />
                    </svg>
                  </button>
                  {/* delete button */}
                  <button
                    onClick={() => handleDelete(incomeData.id)}
                    className="hover:text-red-600"
                    role="button"
                    title="Delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7l16 0" />
                      <path d="M10 11l0 6" />
                      <path d="M14 11l0 6" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Income;
