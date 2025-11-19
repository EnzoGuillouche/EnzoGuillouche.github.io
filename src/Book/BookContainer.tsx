import Book from "./Book";
import './BookContainer.css';

type BookContainerProps = {
  projectIds: number[];
};

function BookContainer({projectIds}: BookContainerProps) {
    return (
      <div className="Book-Container">
        { projectIds.map(id => (
          <Book projectId={id}/>
        ))}
      </div>
    );
}

export default BookContainer;