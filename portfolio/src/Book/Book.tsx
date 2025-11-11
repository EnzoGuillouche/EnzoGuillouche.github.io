import React from "react";

import './Book.css';

type BookProps = {
  title: string;
  description: string;
  linkToRepo?: string | null;
};

function Book({ title, description, linkToRepo }: BookProps) {
  return (
    <div className="Book">
      <div className="Page">
        {description}
        {linkToRepo && (
            <a className="Book-Link" href={linkToRepo}>
            Repository
            </a>
        )}
      </div>
      <div className="Cover">
        <div className="Book-Title">
          {title}
        </div>
      </div>
    </div>
  );
}

export default Book;