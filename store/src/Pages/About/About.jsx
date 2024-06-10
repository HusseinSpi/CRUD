import "./About.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const About = () => {
  return (
    <section className="main-section">
      <div className="about-section">
        <div className="inner-container">
          <h1>About us</h1>
          <p className="text">
            Books are timeless treasures, offering escape, insight, and
            inspiration. Within their pages lie the wisdom of ages, the dreams
            of countless souls, and the stories that shape our world. Let them
            be our guides, companions, and companions on the journey of life.
          </p>
          <div className="information">
            <FaGithub  />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
