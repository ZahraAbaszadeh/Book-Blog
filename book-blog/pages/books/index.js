import React from "react";
import { useRouter } from "next/router";
import { getAllBooks } from "@/book-data";
import BookList from "@/components/books/bookList";
import BookSearch from "../../components/books/bookSearch";

const AllBooks = () => {
  const books = getAllBooks();
  const routes = useRouter();
  const findEventsHandler = (year, month) => {
    const fullPath = `/books/${year}/${month}`;
    routes.push(fullPath);
  };
  return (
    <>
      <BookSearch onSearch={findEventsHandler} />
      <BookList items={books} />
    </>
  );
};

export default AllBooks;
