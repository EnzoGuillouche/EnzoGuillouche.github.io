import Book from "./Book";
import './BookContainer.css';

function BookContainer() {
    return (
        <div className="Book-Container">
        <Book 
          title="Pac-ssembly"
          description="The project is dedicated to recreating the original Pac-man game in x86 16-bit NASM Assembly."
          linkToRepo="https://github.com/Woopsie-Creations/Arcade-games/tree/main/Games/Pac-ssembly"
        />

        <Book 
          title="Path Quick"
          description="This project aims to create a software tool that calculates the fastest route between two landmarks, handling large datasets efficiently."
          linkToRepo="https://github.com/EnzoGuillouche/2024-2025-project-3-quickest-path-team-6"
        />
      </div>
    );
}

export default BookContainer;