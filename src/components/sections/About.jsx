import { MapPin } from "lucide-react";
import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";
import carousel1 from "../../assets/images/img1.png";
import carousel2 from "../../assets/images/img2.png";
import carousel3 from "../../assets/images/img3.png";
import carousel4 from "../../assets/images/img4.jpg";
import carousel5 from "../../assets/images/img7.jpg";
import carousel6 from "../../assets/images/img9.jpg";
import carousel7 from "../../assets/images/img10.jpg";
import carousel8 from "../../assets/images/img13.jpg";
import carousel9 from "../../assets/images/img16.jpg";
import ImageCarousel from "../ImageCarousel";
import { useLanguage } from "../../i18n/LanguageContext";

function About() {
  const { t } = useLanguage();
  return (
    <>
      <section id="tentang" className="section-pad about-section">
        <div className="wrap about-container">
          <Reveal>
            <div>
              <Eyebrow>{t("about.eyebrowabout")}</Eyebrow>

              <div className="image-carousel">
                <ImageCarousel
                  images={[
                    carousel1,
                    carousel2,
                    carousel3,
                    carousel4,
                    carousel5,
                    carousel6,
                    carousel7,
                    carousel8,
                    carousel9,
                  ]}
                />
              </div>

              <h2 className="tagline-carousel">
                Web Development & UI/UX Designer
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <p className="about-text">{t("about.text1")}</p>

              <p className="about-text">{t("about.text2")}</p>

              <p className="about-text">{t("about.text3")}</p>

              <div className="about-location">
                <MapPin size={15} />
                {t("about.location")}
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

export default About;
