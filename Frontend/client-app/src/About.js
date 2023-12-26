import React from 'react'
import "./About.css";
import man1 from "./man1.jpg"
import woman1 from "./women1.jpg"
import women from "./women.jpg"


const About = () => {
  return (
    <div>
      <div className="about">
        <h1 style={{ textAlign: "center" }}>
          <b>About Us</b>{" "}
        </h1>
        <p>
          Owned by Indian conglomerate Tata Sons, Tata CLiQ sells products under
          various categories such as electronics, fashion, footwear, and
          accessories and competes with players like Myntra and Ajio. It also
          has a luxury portal dedicated to high-end brands like Estee Lauder
          cosmetics and DeBeers jewelry.It is a zero-commission marketplace that
          brings smaller sellers across fashion, grocery, and home categories
          online.With social commerce gaining steam in India, rival Amazon is
          making inroads in the segment as well. The US giant acquired GlowRoad,
          a women-focused social commerce company, in April.This is the flagship
          online store of the Chinese smartphone brand Realme, which launched in
          India in 2018 and is among the country’s top 10 smartphone
          brands.Besides phones, it also sells other Realme products such as
          television sets and accessories.
        </p>
        <h3>
          <b>Mobile app ranking by MAU: 13</b>
        </h3>
        <h3>
          <b>Mobile app ranking by downloads: 14</b>
        </h3>
        <h3>
          <b>Ranking by web visits: 25</b>
        </h3>
        <h3>
          <b>Web desktop and mobile visits: 19.3 million</b>
        </h3>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={man1} alt="Jane" width={480} />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">CEO & Founder</p>
              <p>
                The New York Times called Sweet "one of the most powerful men in
                corporate America" in 2019.Fortune magazine included Julie Sweet
                in the their top 10 “Most Powerful men” list since 2016 and she
                was named No. 1 on the list for 2020.“steered Accenture’s more
                than half a million employees in 51 countries through the
                pandemic, skills more essential than ever.”
              </p>
              <p>mikejson@alibaba.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={women} alt="Mike" width={480} />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">Art Director</p>
              <p>
                Generating clear ideas and concepts in tandem with the
                copywriter Producing sketches, storyboards, art layouts based on
                creative visions and ideas Understanding marketing initiatives,
                strategic positioning and target audience,The goal is to
                translate marketing and branding strategies into innovative and
                impressive campaigns that stimulate targeted audiences.
              </p>
              <p>jane@ubinert.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={woman1} alt="John" width={480} />
            <div className="container">
              <h2>Ana Rey</h2>
              <p className="title">Designer</p>
              <p>
                translating design solutions into value and impact through a
                language that business stakeholders are familiar with to prove
                design provides solutions to business problems; applying
                human-centred methodologies to strengthen business and financial
                components of design work to create services and products that
                are viable;
              </p>
              <p>ana52@cashbentiescom</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
