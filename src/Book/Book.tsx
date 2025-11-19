import { useState } from "react";
import './Book.css';
import BookTag from "./BookTag";
import Modal from "./Modal";
import projectsData from "../data/projects.json";

type BookProps = {
  projectId: number;
};

function Book({ projectId }: BookProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <div className="Book">
      <div className="Page">
        <p>{projectsData[projectId].description}</p>
        <button 
          className="Book-Link" 
          onClick={() => setModalOpen(true)}
        >
          View more 
        </button>
      </div>
      <div className="Cover">
        <div className="Book-Title">
          {projectsData[projectId].title}
        </div>
        <div className="Book-Tags">
          {projectsData[projectId].tags.map((tag, i) => (
            <BookTag key={i} tag={tag} />
          ))}
        </div>
      </div>
    </div>
    <Modal
      isOpen={modalOpen} 
      onClose={() => setModalOpen(false)} 
      projectId={projectId}
      />
    </>
  );
}

export default Book;