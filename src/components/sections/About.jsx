import { MapPin } from "lucide-react";
import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";
import carousel1 from "../../assets/images/img1.png";
import carousel2 from "../../assets/images/img2.png";
import carousel3 from "../../assets/images/img3.png";
import carousel4 from "../../assets/images/img4.jpg";
import carousel5 from "../../assets/images/img7.jpg";
import ImageCarousel from "../ImageCarousel";

function About() {
  return (
    <>
      <section id="tentang" className="section-pad about-section">
        <div className="wrap about-container">
          <Reveal>
            <div>
              <Eyebrow>About</Eyebrow>

              <div className="image-carousel">
                <ImageCarousel
                  images={[
                    carousel1,
                    carousel2,
                    carousel3,
                    carousel4,
                    carousel5,
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
              <p className="about-text">
                Saya mempunyai ketertarikan dalam mempelajari dunia IT, seperti
                software engineering, web development hingga UI/UX design.
                Banyak hal yang saya pelajari architecture user interface,
                design system, analytical system hingga integrasi API. Saya juga
                memiliki project pribadi ataupun tugas selama kuliah yang saya
                kerjakan sendiri maupun berkolaborasi dengan teman-teman.
              </p>

              <p className="about-text">
                Project yang kebanyakan banyak menggunakan javascript maupun
                framework seperti, react, react native, node.js hingga flutter
                untuk pengembangan mobile app, selain itu saya juga cukup
                memahami alur backend dalam sebuah pengembangan web hingga
                mobile app seperti,perancangan database hingga merancang API
              </p>

              <p className="about-text">
                Saat ini saya menempuh studi Ilmu Komputer di Universitas
                Djuanda sambil membangun portfolio saya dengan project-project
                yang telah dibuat maupun pengalaman yang pernah saya dapatkan,
                dengan itu saya telah mempersiapkan diri untuk mulai berkarir di
                dunia IT.
              </p>

              <div className="about-location">
                <MapPin size={15} />
                Indonesia · West Java
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
