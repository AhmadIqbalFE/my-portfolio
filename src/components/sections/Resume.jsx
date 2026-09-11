import { MapPin } from "lucide-react";
import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

function Resume() {
  return (
    <>
      <section id="resume" className="section-pad">
        <Eyebrow>Resume</Eyebrow>
        <div className="wrap resume-container">
          <Reveal>
            <div className="resume-block">
              <div className="resume-heading-title">
                <FaGraduationCap size={20} className="resume-icon" />
                <h2 className="font-display resume-title">Education</h2>
              </div>

              <div className="resume-timeline">
                <div className="resume-item">
                  <span className="resume-dot"></span>
                  <div className="resume-item-content">
                    <h2 className="font-display resume-list">
                      SMA Negeri Tugumulyo
                    </h2>
                    <p className="description-list">Science (2021 - 2024)</p>
                  </div>
                </div>
              </div>

              <div className="resume-timeline">
                <div className="resume-item">
                  <span className="resume-dot"></span>
                  <div className="resume-item-content">
                    <h2 className="font-display resume-list">
                      Universitas Djuanda
                    </h2>
                    <p className="description-list">
                      Computer Science (2025 - now)
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
                <h2 className="font-display resume-title">Experience</h2>
              </div>

              <div className="resume-item">
                <span className="resume-dot"></span>
                <div className="resume-item-content">
                  <h2 className="font-display resume-list">
                    Supervisor Dormitory (2025 - now)
                  </h2>
                  <p className="description-list">
                    at SMP SMA Cahaya Rancamaya Islamic Boarding School.
                  </p>
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
