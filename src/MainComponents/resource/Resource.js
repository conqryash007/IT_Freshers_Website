import React from "react";
import "./resStyle.css";
import b420003 from "./../../Assets/senior_images/b420003.jpg";
import b420049 from "./../../Assets/senior_images/b420049.jfif";
import Navbar from "./../../Shared/Components/Navbar/Navbar";
import Particle from "./../../Shared/Components/Particle/Particle";

const senior = [
  {
    name: "Aditya Sandilya",
    id: "B420003",
    skills: `Competitive Programming,
    Web Development,
    Machine Learning`,
    achiev: "Google Kickstart Round 2, Dogs don't bite me",
    img: b420003,
    contact: "LinkedIn, Tinder",
  },
  {
    name: "Simran Pattnaik ",
    id: "B420049",
    skills: `Competitive Programming
    App Development
    Machine Learning`,
    achiev: "Google Kickstart Round 2",
    img: b420049,
    contact: "LinkedIn, Github",
  },
  {
    name: "Aditya Sandilya",
    id: "B420003",
    skills: `Competitive Programming,
    Web Development,
    Machine Learning`,
    achiev: "Google Kickstart Round 2, Dogs don't bite me",
    img: b420003,
    contact: "LinkedIn, Tinder",
  },
  {
    name: "Aditya Sandilya",
    id: "B420003",
    skills: `Competitive Programming,
    Web Development,
    Machine Learning`,
    achiev: "Google Kickstart Round 2, Dogs don't bite me",
    img: b420003,
    contact: "LinkedIn, Tinder",
  },
  {
    name: "Simran Pattnaik ",
    id: "B420049",
    skills: `Competitive Programming
    App Development
    Machine Learning`,
    achiev: "Google Kickstart Round 2",
    img: b420049,
    contact: "LinkedIn, Github",
  },
  {
    name: "Simran Pattnaik ",
    id: "B420049",
    skills: `Competitive Programming
    App Development
    Machine Learning`,
    achiev: "Google Kickstart Round 2",
    img: b420049,
    contact: "LinkedIn, Github",
  },
  {
    name: "Simran Pattnaik ",
    id: "B420049",
    skills: `Competitive Programming
    App Development
    Machine Learning`,
    achiev: "Google Kickstart Round 2",
    img: b420049,
    contact: "LinkedIn, Github",
  },
  {
    name: "Aditya Sandilya",
    id: "B420003",
    skills: `Competitive Programming,
    Web Development,
    Machine Learning`,
    achiev: "Google Kickstart Round 2, Dogs don't bite me",
    img: b420003,
    contact: "LinkedIn, Tinder",
  },
];

export default function Resource() {
  const getCard = () => {
    return senior.map((curr) => {
      return (
        <>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={curr.img} alt="Avatar" className="img-001" />
                <h3 className="name">{curr.name}</h3>
                <h3 className="id">ID: {curr.id}</h3>
              </div>
              <div
                className="flip-card-back"
                style={{ width: "250px", height: "300px" }}
              >
                <div className="tag">TAGLINE SHORT</div>
                <div className="skills">
                  <h3>Skills:</h3>
                  <p className="para">{curr.skills}</p>
                </div>
                <div className="achievements">
                  <h3>Achievements:</h3>
                  <p className="para">{curr.achiev}</p>
                </div>
                <div className="contact">
                  <h3>Contact:</h3>
                  <p className="para">{curr.contact}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <Navbar />
      <Particle />
      <div className="bg-main">
        <h1 className="head1">RESOURCES</h1>
        <h2 className="head2">For your Academic needs, and a bit extra!</h2>
        <div className="container-001">{getCard()}</div>
      </div>
    </>
  );
}
