import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ExpensesDetails from "../components/ExpensesDetails";

import Card from "../components/Card";

const Home = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch("http://localhost:9000/api/expenses");
        const json = await response.json();

        if (response.ok) {
          // Check if the response contains an `expenses` array
          setExpenses(Array.isArray(json.expenses) ? json.expenses : []);
        } else {
          console.error("Failed to fetch expenses:", json);
        }
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {/* top bar */}
      <nav className="flex w-full justify-between px-10">
        <Link
          to="/"
          className="font-bold text-4xl font-primaryFont drop-shadow-xl"
        >
          jiji
        </Link>
        <i className="fi fi-rr-bell text-[32px]"></i>
      </nav>

      {/* cards */}
      <div className="flex">
        <Card
          title="expenses"
          total="1,000"
          username="geri gian epanto"
          date="08.05.24"
        />
      </div>

      {/* body */}
      <div className="body flex flex-col gap-4">
        <div className="actions flex justify-evenly items-center">
          <div className="w-[262px] h-[16px] bg-lightSecondBG rounded-[8px]">
            <button />
          </div>
          <p className="font-shareTechMono text-[16px]">0%</p>
          <Link
            to="/new"
            className="text-gray-900 h-[36px] w-[36px] text-[18px] bg-lightSecondBG rounded-lg flex items-center justify-center font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow duration-300"
          >
            <i className="fi fi-rr-plus h-full flex items-center justify-center"></i>
          </Link>
        </div>
        <div className="list flex flex-col gap-4">
          <ExpensesDetails
            icon="fi fi-rr-hamburger-soda"
            title="Yakult Lemon"
            date="08.05.24"
            amount="140"
          />
          <ExpensesDetails
            icon="fi fi-rr-hamburger-soda"
            title="Yakult Lemon"
            date="08.05.24"
            amount="140"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
