import React from "react";
import BookItem from "./bookItem";

const BookList = (props) => {
  const { items } = props;
  return (
    <>
      <div className="container mx-auto px-5">
        <div class="flex flex-wrap justify-center">
          {items.map((e) => (
            <BookItem
              key={e.id}
              id={e.id}
              title={e.title}
              author={e.author}
              published={e.published}
              language={e.language}
              image={e.image}
              pageCount={e.pageCount}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookList;
