import { ReactNode } from "react";
import './Book.css';
import BookTag from "./BookTag";

type BookProps = {
  title: string;
  description: ReactNode;
  linkToRepo?: string | null;
  tags?: string[];
};

function Book({ title, description, linkToRepo, tags = [] }: BookProps) {
  return (
    <div className="Book">
      <div className="Page">
        <p>{description}</p>
        {linkToRepo && (
            <a 
              className="Book-Link" 
              href={linkToRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
            Repository
            </a>
        )}
      </div>
      <div className="Cover">
        <div className="Book-Title">
          {title}
        </div>
        <div className="Book-Tags">
          {tags.map((tag, i) => (
            <BookTag key={i} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Book;