import React from "react";
import { useRouter } from "next/router";
import { getFilteredBooks } from "../../book-data";
import BookList from "@/components/books/bookList";

const FilteredBook = () => {
  const routes = useRouter();
  const filteredData = routes.query.other;
  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (isNaN(numYear) || isNaN(numMonth || numMonth > 12 || numMonth < 0)) {
    return (
      <h2 className="center" style={{ margin: "30px", fontWeight: "900" }}>
        Invalid filter, Please adjust your values!
      </h2>
    );
  }
  const filteredBook = getFilteredBooks({
    year: numYear,
    month: numMonth,
  });
  if (!filteredBook || filteredBook.length === 0) {
    return (
      <>
        <h2 className="center" style={{ margin: "30px", fontWeight: "900" }}>
          No Events found!
        </h2>
        <div className="center">
          <Button link="/books">Show All Events</Button>
        </div>
      </>
    );
  }
  return (
    <>
      <BookList items={filteredBook} />
    </>
  );
};

export default FilteredBook;
