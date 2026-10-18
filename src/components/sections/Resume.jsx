import { MapPin } from "lucide-react";
import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { useLanguage } from "../../i18n/LanguageContext";

function Resume() {
  const { t } = useLanguage();
  return (
    <>
      <section id="resume" className="section-pad">
        <Eyebrow>{t("resume.eyebrowresume")}</Eyebrow>
        <div className="wrap resume-container">
          <Reveal delay={100}>
            <div className="resume-block">
              <div className="resume-heading-title">
                <FaGraduationCap size={20} className="resume-icon" />
                <h2 className="font-display resume-title">
                  {t("resume.title1")}
                </h2>
              </div>

              <div className="resume-timeline">
                <div className="resume-item">
                  <span className="resume-dot"></span>
                  <div className="resume-item-content">
                    <h2 className="font-display resume-list">
                      {t("resume.list1")}
                    </h2>
                    <p className="description-list">
                      {t("resume.description1")}
                    </p>
                  </div>
                </div>

                <div className="resume-item">
                  <span className="resume-dot"></span>
                  <div className="resume-item-content">
                    <h2 className="font-display resume-list">
                      {t("resume.list2")}
                    </h2>
                    <p className="description-list">
                      {t("resume.description2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="resume-block">
              <div className="resume-heading-title">
                <FaBriefcase size={20} className="resume-icon" />
                <h2 className="font-display resume-title">
                  {t("resume.title2")}
                </h2>
              </div>

              <div className="resume-timeline">
                <div className="resume-item">
                  <span className="resume-dot"></span>
                  <div className="resume-item-content">
                    <h2 className="font-display resume-list">
                      {t("resume.list3")}
                    </h2>
                    <p className="description-list">
                      {t("resume.description3")}
                    </p>
                  </div>
                </div>

                <div className="resume-item">
                  <span className="resume-dot"></span>
                  <div className="resume-item-content">
                    <h2 className="font-display resume-list">
                      {t("resume.list4")}
                    </h2>
                    <p className="description-list">
                      {t("resume.description4")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <div className="wrap">
        <div className="divider" />
      </div>
    </>
  );
}

export default Resume;
