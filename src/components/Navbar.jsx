import React from "react";
import logo from '../assets/profile_logo.jpg';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="flex max-w-7xl items-center bg-[#F9FAFB] w-full justify-between py-1 mt-2 border px-4 rounded-md mx-auto">
          {/* <!-- Logo --> */}
          <div className="flex items-center gap-2 text-2xl font-bold">
            <img src={logo} className="h-14 rounded-full" />
            <h1>Expense Tracker</h1>
          </div>
         

          {/* <!-- Menu --> */}
          <div className="hidden md:block">
            <ul className="flex gap-4 text-gray-500 font-medium">
              <li>Home</li>
              <li>App</li>
              <li>Account</li>
              <li>Export</li>
            </ul>
          </div>

          {/* <!-- Button --> */}
          <div className="px-6 py-2 bg-teal-600 text-white w-fit rounded-md">
            Get App
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
