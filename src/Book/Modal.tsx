import { useEffect, useRef } from "react";
import "./Modal.css";
import BookTag from "./BookTag";
import { useTranslation } from "react-i18next";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number;
}

function Modal({ isOpen, onClose, projectId }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();
  const project = t(`projects.${projectId}`, { returnObjects: true });

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
                <h2 className="Modal-Title">{project.title}</h2>
                <p className="Modal-Description">{project.enhancedDescription}</p>

                <div className="Modal-Tags">
                    {project.technologiesUsed?.map((tag, i) => (
                        <BookTag key={i} tag={tag} />
                    ))}
                </div>
              
                <a
                    className="Modal-Link"
                    href={project.linkToRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                {t("view_repo_button")}
                </a>
            </div>

            <div className="Modal-Right">
               <img
                    src={project.image}
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