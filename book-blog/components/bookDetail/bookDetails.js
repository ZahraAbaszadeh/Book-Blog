import React from "react";
import Button from "../ui/Button";

const BookDetails = (props) => {
  const { title, author, image, description, pageCount, language } = props;

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col rounded-lg bg-white shadow-lg shadow-gray-500 dark:bg-neutral-900 md:max-w-xl md:flex-row m-4">
          <img
            className="w-full rounded-t-lg object-cover  md:rounded-none md:rounded-l-lg"
            src={`/${image}`}
            alt={title}
          />
          <div className="flex flex-col justify-start p-5">
            <h3 className="mb-2 text-xl font-medium text-neutral-700 dark:text-neutral-50">
              {title}
            </h3>
            <h6 className="mb-3 text-base text-neutral-500 dark:text-neutral-200">
            Author : {author}
            </h6>
            <p className="mb-3 text-base text-neutral-500 dark:text-neutral-200">
            Language : {language}
            </p>
            <p className="mb-3 text-md text-neutral-500 dark:text-neutral-300">
            PageCount : {pageCount}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button link="/books">Back</Button>
      </div>
    </>
  );
};

export default BookDetails;
