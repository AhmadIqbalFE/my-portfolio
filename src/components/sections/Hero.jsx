import { ArrowUpRight } from "lucide-react";
import Reveal from "../common/Reveal";
import profilePhoto from "../../assets/profile-photo.jpeg";
import { useLanguage } from "../../i18n/LanguageContext";

function Hero() {
  const { t } = useLanguage();
  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/CV_Ahmad_Iqbal_ATS.pdf";
    link.download = "CV_Ahmad_Iqbal_ATS.pdf";
    link.click();
  };

  return (
    <section id="top" className="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />

      <div className="wrap section-pad hero-container">
        <Reveal>
          <div>
            <span className="badge">
              <span className="badge-dot" />
              {t("hero.badge")}
            </span>

            <h1 className="font-display hero-title">{t("hero.title")}</h1>

            <p className="hero-description">{t("hero.description")}</p>

            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => scrollTo("proyek")}
              >
                {t("hero.viewProjects")}
                <ArrowUpRight size={16} />
              </button>

              <button className="btn-download" onClick={handleDownload}>
                {t("hero.downloadCv")}
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="profile-card">
            <div className="profile-photo">
              <img src={profilePhoto} alt="Ahmad" />
            </div>

            <div className="profile-info">
              <span className="profile-tag">PROFILE</span>
              <h3>Ahmad Iqbal</h3>
              <p>Software Engineer</p>
              <div className="profile-divider"></div>
              <div className="profile-meta">
                <span>Developer</span>
                <span>2026</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
