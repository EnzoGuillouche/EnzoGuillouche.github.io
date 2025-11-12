import "./BookTag.css";

type BookTagProps = {
  tag: string;
};

function BookTag({ tag }: BookTagProps) {
    return (
      <div className="BookTag">
        <span className="BookTag-Text">{tag}</span>
      </div>
    );
}

export default BookTag;