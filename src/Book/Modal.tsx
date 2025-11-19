import { useEffect, useRef } from "react";
import "./Modal.css";
import BookTag from "./BookTag";
import projectsData from "../data/projects.json";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number;
}

function Modal({ isOpen, onClose, projectId }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="Modal-Overlay">
      <div className="Modal" ref={modalRef}>
        <button className="Modal-CloseBtn" onClick={onClose}>➜</button>

        <div className="Modal-Content">
            <div className="Modal-Left">
                <h2 className="Modal-Title">{projectsData[projectId].title}</h2>
                <p className="Modal-Description">{projectsData[projectId].enhancedDescription}</p>

                <div className="Modal-Tags">
                    {projectsData[projectId].technologiesUsed?.map((tag, i) => (
                        <BookTag key={i} tag={tag} />
                    ))}
                </div>
              
                <a
                    className="Modal-Link"
                    href={projectsData[projectId].linkToRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                View Repository
                </a>
            </div>

            <div className="Modal-Right">
               <img
                    src={projectsData[projectId].image}
                    className="Modal-Image"
                    alt={`Project Img`}
                />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;