import React from "react";
import "./resStyle.css";
import b420003 from "./../../Assets/senior_images/b420003.jpg";
import b420049 from "./../../Assets/senior_images/b420049.jfif";
import Navbar from "./../../Shared/Components/Navbar/Navbar";
import Particle from "./../../Shared/Components/Particle/Particle";

const senior = [
  {
    name: "Vishal Manam",
    id: "B420065",
    skills: "Ah none.",
    achiev: "Nope, none.",
    img: b420003,
    contact:
      "9182153287 - WhatsApp, @VishalManam - Twitter, Vishal Manam - LinkedIn",
  },
  {
    fakename: "Point Break",
    riddle:
      "Word 2 : I am the Universe's Fastest.Word 1 : I am something that always wins.Word 1 n 2 are Words from Devnagri Script.",
    answer: "b420065",
    indx: 1,
    name: "Satyaprakash Sahoo",
    id: "B220049",
    skills: "Time Pass 😎",
    achiev: "Slept 14 h/ day n Changed my branch 🥱",
    img: b420003,
    contact: "b220049@iiit-bh.ac.in",
  },
  {
    fakename: "Halfaye",
    riddle: "Kabhi kabhi nai roj lagta he ki apun ich bhagwan he",
    answer: "b420036",
    indx: 2,
    name: "Prabhu Preetam Das",
    id: "B420036",
    skills: "Bunking class, baki kuchh nai ata",
    achiev: "😐",
    img: b420003,
    contact: "Whatsapp",
  },
  {
    fakename: "Lightning McQueen",
    riddle:
      "Let me keep it easy for you, my name is inspired from a 1990s super-duper hit Bollywood Movie.Iykyk.P.S- In case the above isn't enough of a hint, there's also a movie with my name!",
    answer: "B420049",
    indx: 3,
    name: "Simran Pattnaik",
    id: "B420049",
    skills: "Flutter, Hive, Firestore Firebase.",
    achiev:
      "PSoc-Android dev Team, GDSC, IIIT BBSR- Android Dev Team, Founder- WDGAF Society ;)",
    img: b420003,
    contact: "LinkedIn, Instagram",
  },
  {
    fakename: "Bokka Subbarao",
    riddle: "",
    answer: "b420030",
    indx: 4,
    name: "Kaikala Sai Sri Harish",
    id: "b420030",
    skills: "Editor",
    achiev: "",
    img: b420003,
    contact: "",
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
