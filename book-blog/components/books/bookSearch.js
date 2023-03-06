import React, { useRef } from "react";
import Button from "../ui/Button";
import { getPublishedYear } from "../../book-data";

const BookSearch = (props) => {
  const year = getPublishedYear();
  const sortYears = year.sort();
  let uniqueYear = sortYears.filter((element, index) => {
    return sortYears.indexOf(element) === index;
  });

  const yearInputRef = useRef();
  const monthInputRef = useRef();


  const submitHandler = (e) => {
    e.preventDefault();
    const selectedYearInput = yearInputRef.current.value;
    const selectedMonthInput = monthInputRef.current.value;
    props.onSearch(selectedYearInput, selectedMonthInput);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center w-full mx-auto items-baseline">
          <div class="flex items-baseline p-8">
            <label
              for="year"
              className="px-3 font-bold text-base text-slate-700"
            >
              Year
            </label>
            <select
              ref={yearInputRef}
              class="w-36 px-2 border-0 cursor-pointer bg-slate-50 rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring"
            >
              {uniqueYear.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div class="flex items-baseline p-8">
            <label
              for="month"
              className="px-3 font-bold text-base text-slate-700"
            >
              Month
            </label>
            <select
              ref={monthInputRef}
              class="w-36 px-2 border-0 bg-slate-50 rounded-full cursor-pointer shadow-lg duration-300 active:outline-none focus:outline-none focus:ring"
            >
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November </option>
              <option value="12">December</option>
            </select>
          </div>
          <div className="flex items-baseline">
            <Button>Find Books</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default BookSearch;
