import "./WoopsieCreations.css";
import BookContainer from './../Book/BookContainer';
import { useTranslation } from "react-i18next";

function WoopsieCreations() {
    const { t } = useTranslation();

    return (
        <div className="Woopsie-Content">
            <h1>{t("woopsie_creations_holdup")}</h1>
            <a href="https://github.com/Woopsie-Creations" target="_blank" rel="noopener noreferrer">
                <img className="Woop-img" src="woopsiecreationslogo.png" alt="WoopImg" />
            </a>
            <p className="Woop-subheadline">
                {t("woopsie_creations_intro")}
            </p>
            <div className="Woop-Arcade-Games">
                <h2>Arcade-Games</h2>
                <p className="Woop-subheadline">
                    {t("woopsie_creations_arcade_games_intro")}
                </p>
                <p className="Woop-subheadline">
                    {t("woopsie_creations_arcade_games_arcade_part_1")} <br/><br/>
                    {t("woopsie_creations_arcade_games_arcade_part_2")}.
                </p>
                <div className="Woop-Arcade-Games-Images">
                    <img src="arcadeImage1.png" alt="arcade" />
                    <img src="arcadeImage2.png" alt="arcadehihi" />
                    <img src="arcadeImage3.png" alt="arcadehoho" />
                </div>
                <p className="Woop-subheadline">
                    {t("woopsie_creations_arcade_games_game_list_intro")}
                </p>
                <BookContainer projectIds={[5, 6]}/>
            </div>
        </div>
    );
}

export default WoopsieCreations;