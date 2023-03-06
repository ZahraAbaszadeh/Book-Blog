import React from "react";
import Button from "../ui/Button";

const BookItem = (props) => {
  const { id, title, author, language, published, image } = props;
  const readableDate = new Date(published).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const exploreLink = `/books/${id}`;
  return (
    <div className="flex justify-center relative">
      <div
        style={{ width: "36rem" }}
        className="flex flex-col rounded-lg bg-white shadow-lg shadow-gray-500 dark:bg-neutral-900 md:max-w-xl md:flex-row m-4"
      >
        <img
          className="w-full rounded-t-lg object-cover md:h-auto md:w-36 md:rounded-none md:rounded-l-lg"
          src={"/" + image}
          alt={title}
        />
        <div className="flex flex-col justify-start p-5">
          <h4 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {title}
          </h4>
          <h6 className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {author}
          </h6>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {language}
          </p>
          <p className="text-ls text-neutral-500 dark:text-neutral-300">
            {readableDate}
          </p>
          <div class="absolute bottom-10 right-10">
          <Button link={exploreLink}>Explore</Button>
        </div>
        </div>
      
      </div>
    
       
  
    </div>
  );
};

export default BookItem;
