import React from "react";
import Balance from "./components/Balance";
import Expense from "./components/Expense";
import Income from "./components/Income";
import Navbar from "./components/Navbar";
import Submission from "./components/Submission";
import TotalExpense from "./components/TotalExpense";
import TotalIncome from "./components/TotalIncome";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Submission Form --> */}
          <Submission></Submission>

          {/* <!-- Right Column --> */}
          <div className="lg:col-span-2">
            {/* <!-- Total Balance Stat--> */}
            <div className="bg-white">
              <div className="mx-auto max-w-7xl">
                <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
                  <Balance></Balance>
                  <TotalIncome></TotalIncome>
                  <TotalExpense></TotalExpense>
                </dl>
              </div>
            </div>

            {/* <!-- List Down --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              {/* <!-- Expense --> */}
              <Expense></Expense>

              {/* <!-- Income --> */}
              <Income></Income>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
