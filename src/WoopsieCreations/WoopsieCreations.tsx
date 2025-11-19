import "./WoopsieCreations.css";
import BookContainer from './../Book/BookContainer';

function WoopsieCreations() {
    return (
        <div className="Woopsie-Content">
            <h1>But there's more!</h1>
            <a href="https://github.com/Woopsie-Creations" target="_blank" rel="noopener noreferrer">
                <img className="Woop-img" src="woopsiecreationslogo.png" alt="WoopImg" />
            </a>
            <p className="Woop-subheadline">
                With friends of mine, we co-founded <strong>Woopsie Creations</strong>, a passionate indie game and software development studio.
            </p>
            <div className="Woop-Arcade-Games">
                <h2>Arcade-Games</h2>
                <p className="Woop-subheadline">
                    <strong>Arcade-Games</strong> is a project dedicated to creating games written in x86 16-bit Assembly, developed using NASM and executed with DOSBox.
                </p>
                <p className="Woop-subheadline">
                    We are currently working on <strong>building an arcade</strong>, which will feature a collection of games. <br/>
                    It is currently powered by a <em>Rock Pi 4 Plus</em>, where the games run seamlessly, and we are planning to enhance it further with <em>custom hardware components</em>, a <em>dedicated OS</em> and the possibility for anyone to add their own games (in Assembly of course).
                </p>
                <div className="Woop-Arcade-Games-Images">
                    <img src="arcadeImage1.png" alt="arcade" />
                    <img src="arcadeImage2.png" alt="arcadehihi" />
                    <img src="arcadeImage3.png" alt="arcadehoho" />
                </div>
                <p className="Woop-subheadline">
                    And here's a list of games that we are working on, in plain x86 16-bit Assembly.
                </p>
                <BookContainer projectIds={[5, 6]}/>
            </div>
        </div>
    );
}

export default WoopsieCreations;