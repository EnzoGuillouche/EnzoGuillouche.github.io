import { useTranslation } from "react-i18next";

function AboutPage() {
    const { t } = useTranslation();
    return (
        <div className="App">
            <img className="Header-img" src="./../../enzoimg.png" alt="EnzoImg" />
            <h1>{t("about_page")}</h1>

            <p className="App-subheadline">
                {t("intro")}
            </p>

            <div className="App-Socials">
                <a className="App-Link" target='_blank' rel="noopener noreferrer" href={t("socials.github.link")}>
                <img src={t("socials.github.image")} alt="socialImage" />
                <span>{t("socials.github.label")}</span>
                </a>
                <a className="App-Link" target='_blank' rel="noopener noreferrer" href={t("socials.linkedin.link")}>
                <img src={t("socials.linkedin.image")} alt="socialImage" />
                <span>{t("socials.linkedin.label")}</span>
                </a>
                <a className="App-Link" target='_blank' rel="noopener noreferrer" href={t("socials.email.link")}>
                <img src={t("socials.email.image")} alt="socialImage" />
                <span>{t("socials.email.label")}</span>
                </a>
            </div>

            <div className="App-Socials">
                <a 
                    className="App-Link App-Button"
                    href='/EnzoGUILLOUCHE_CV.pdf'
                    download={"EnzoGUILLOUCHE_CV.pdf"}
                >
                    {t("cv_button")}
                </a>
            </div>
        </div>
    );
}

export default AboutPage;