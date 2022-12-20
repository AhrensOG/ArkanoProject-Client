import React from "react";
import { TfiTrash } from "react-icons/tfi";

const DeleteButton = () => {
  return (
    <div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="none"
          viewBox="0 0 36 36"
        >
          <mask
            id="mask0_41_589"
            style={{ maskType: "alpha" }}
            width="36"
            height="36"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path fill="#D9D9D9" d="M0 0H36V36H0z"></path>
          </mask>
          <g mask="url(#mask0_41_589)">
            <path
              fill="#1C1B1F"
              d="M10.5 31.5a2.888 2.888 0 01-2.118-.88A2.89 2.89 0 017.5 28.5V9H6V6h7.5V4.5h9V6H30v3h-1.5v19.5c0 .825-.294 1.532-.88 2.12a2.893 2.893 0 01-2.12.88h-15zM25.5 9h-15v19.5h15V9zm-12 16.5h3V12h-3v13.5zm6 0h3V12h-3v13.5z"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default DeleteButton;
