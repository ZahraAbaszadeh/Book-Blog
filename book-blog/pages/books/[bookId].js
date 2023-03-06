import React from "react";
import { useRouter } from "next/router";
import { getBookById } from "@/book-data";
import BookDetails from "@/components/bookDetail/bookDetails";
// import Button from "../../components/ui/Button";
// import BookSummary from "@/components/bookDetail/bookSummary";
// import BookShow from "@/components/bookDetail/bookShow";
// import BookContent from "@/components/bookDetail/bookContent";

const BookDetail = () => {
  const routes = useRouter();
  const bookId = routes.query.bookId;
  const book = getBookById(bookId);
  if (!book) {
    return <p className="text-center text-neutral-800">NO ID Found!</p>;
  }
  return (
    <>
      <BookDetails
        title={book.title}
        published={book.published}
        image={book.image}
        author={book.author}
        description={book.description}
        language={book.language}
        pageCount={book.pageCount}
      />
    </>
  );
};

export default BookDetail;
