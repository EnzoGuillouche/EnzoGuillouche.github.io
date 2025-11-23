import { useState } from "react";
import './Book.css';
import BookTag from "./BookTag";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";

type BookProps = {
  projectId: number;
};

function Book({ projectId }: BookProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const { t } = useTranslation();
  const project = t(`projects.${projectId}`, { returnObjects: true });
  
  return (
    <>
    <div className="Book">
      <div className="Page">
        <p>{project.description}</p>
        <button 
          className="Book-Link" 
          onClick={() => setModalOpen(true)}
        >
          {t("view_more_button")} 
        </button>
      </div>
      <div className="Cover">
        <div className="Book-Title">
          {project.title}
        </div>
        <div className="Book-Tags">
          {project.tags.map((tag, i) => (
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