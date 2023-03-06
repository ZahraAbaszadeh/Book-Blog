import React from "react";
import Link from "next/link";

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link} legacyBehavior>
        <a
          className="cursor-pointer no-underline rounded-md text-center text-white border-0 py-1 px-6 bg-slate-700"
        >
          {props.children}
        </a>
      </Link>
    );
  }
  return (
    <button
      href={props.link}
      className="cursor-pointer no-underline rounded-md text-center text-white border-0 py-1 px-6 bg-slate-700"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
