import { ArrowUpRight } from "lucide-react";
import Reveal from "../common/Reveal";
import profilePhoto from "../../assets/profile-photo.jpeg";

function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
              Terbuka untuk berdikusi
            </span>

            <h1 className="font-display hero-title">
              Full-stack Developer UI/UX Designer Software Engineer
            </h1>

            <p className="hero-description">
              Saya Ahmad Iqbal, mahasiswa Ilmu Komputer di Universitas Djuanda.
              Saya memiliki keahlian di Frontend & Backend Developer sekaligus
              UI/UX Designer.Fokus mempelajari fundamental sebagai seorang
              Software Engineer.
            </p>

            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => scrollTo("proyek")}
              >
                Lihat Proyek
                <ArrowUpRight size={16} />
              </button>

              <button className="btn-ghost" onClick={() => scrollTo("kontak")}>
                Hubungi Saya
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
