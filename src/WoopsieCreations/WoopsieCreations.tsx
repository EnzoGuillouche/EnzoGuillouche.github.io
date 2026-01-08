import "./WoopsieCreations.css";
import BookContainer from './../Book/BookContainer';
import { useTranslation } from "react-i18next";
import jsonVariables from '../locales/jsonVariables.json';

function WoopsieCreations() {
    const { t } = useTranslation();
    const projects = jsonVariables.projects;

    return (
        <div className="Woopsie-Content">
            <h1>{t("woopsie_creations_holdup")}</h1>
            <img className="Woop-img" src="woopsiecreationslogo.png" alt="WoopImg" />
            <p className="Woop-subheadline">
                {t("woopsie_creations_intro")}
            </p>

            <div className="App-Socials">
                <a className="App-Link" target='_blank' rel="noopener noreferrer" href={t("socials.woopsithub.link")}>
                    <img src={t("socials.woopsithub.image")} alt="socialImage" />
                    <span>{t("socials.woopsithub.label")}</span>
                </a>
                <a className="App-Link" target='_blank' rel="noopener noreferrer" href={t("socials.woopsemail.link")}>
                    <img src={t("socials.woopsemail.image")} alt="socialImage" />
                    <span>{t("socials.woopsemail.label")}</span>
                </a>
            </div>

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
                <BookContainer projectIds={projects.woopsie}/>
            </div>
        </div>
    );
}

export default WoopsieCreations;