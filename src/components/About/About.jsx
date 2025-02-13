import "./About.css";
import aboutImage from "../../assets/aboutPicture.png";

function About() {
  return (
    <section className="about">
      <div className="about__image-container">
        <img src={aboutImage} alt="aboutImage" className="about__image" />
      </div>
      <div className="about__info">
        <h3 className="about__title">About the author</h3>
        <p className="about__paragraph">
          Hello, I'm Kaylie Ryan. I'm a full stack engineer proficient in
          JavaScript, React, Express, Node, HTML, CSS. I own a hair salon and
          was a hair stylist before becoming a software engineer.
        </p>
        <p className="about__paragraph">
          I started learning to code at TripleTen Bootcamp. Learning to code has
          been a difficult yet rewarding journey. I love the problem solving
          aspect of coding and the endless possibilities that come with it. I'm
          excited to continue to learn and grow as a software engineer.
        </p>
      </div>
    </section>
  );
}

export default About;
