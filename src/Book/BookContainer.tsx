import Book from "./Book";
import './BookContainer.css';

function BookContainer() {
    return (
      <div className="Book-Container">
        <Book 
          title="Pac-ssembly"
          description={
            <>
              The project is dedicated to recreating the original <strong>Pac-man</strong> game. Besides, we have built an arcade to play the arcade.
            </>
          }
          linkToRepo="https://github.com/Woopsie-Creations/Arcade-games/tree/main/Games/Pac-ssembly"
          tags={["Assembly", "GameDev", "Retro"]}
        />

        <Book
          title="Gymbro"
          description={
            <>
              <strong>GymBro</strong> is a mobile application, dealing with monitoring gym programs and performances over time.
            </>
          }
          linkToRepo="https://github.com/EnzoGuillouche/GymBro"
          tags={["Flutter", "Mobile", "Gym"]}
        />

        <Book
          title="StellarDynamics"
          description={
            <>
              <strong>StellarDynamics</strong> is an interactive <strong>3D simulation of the solar system</strong> with consideration of factors such as mass, velocity, and gravitational forces.
            </>
          }
          linkToRepo="https://github.com/EnzoGuillouche/StellarDynamics"
          tags={["VPython", "3D Simulation", "Physics"]}
        />

        <Book
          title="Frogger FPGA"
          description={
            <>
              This project aims to create a <strong>Frogger</strong> game using the <strong>FPGA</strong> technology. Besides, we have made <strong>Lilypad</strong>, a console and controllers to play the game.
            </>
          }
          linkToRepo="https://github.com/EnzoGuillouche/2024-2025-project-1-fpga-team-6"
          tags={["FPGA", "Verilog", "GameDev", "Console"]}
        />

        <Book 
          title="Path Quick"
          description={
            <>
              This project aims to create a software tool that <strong>calculates the fastest route</strong> between two landmarks, handling <strong>large datasets</strong> efficiently.
            </>
          }
          
          linkToRepo="https://github.com/EnzoGuillouche/2024-2025-project-3-quickest-path-team-6"
          tags={["C++", "API", "Algorithms"]}
        />
      </div>
    );
}

export default BookContainer;