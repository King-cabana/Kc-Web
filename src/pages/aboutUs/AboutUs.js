<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {
  HeroSection,
  ContentHolder,
  BtnHolder,
  EventButton,
  StorySectionContainer,
  StorySectionContent,
  AllAboutSectionContainer,
  AllAboutSectionContent,
  AllAboutImages,
  AllAboutInfo,
  PromiseSectionContainer,
  PromiseSectionContent,
  VisionSectionContainer,
  VisionSectionContent,
  InfoSectionContainer,
  InfoSectionContent,
  InfoButton,
  Item,
} from "./AboutUsStyled";
import { Typewriter } from "react-simple-typewriter";
import community from "../../images/community.png";
import bulb from "../../images/bulb.png";
import skyscrapper from "../../images/skyscrapper.png";

const AboutUs = () => {
  const [state, setState] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (state === 1) {
        setState(2);
      } else if (state === 2) {
        setState(3);
      } else {
        setState(1);
      }
    }, 5000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection>
        <ContentHolder>
          <h1 style={{ margin: "auto 0" }}>People || Value || Memories</h1>
          <p className="subheading">We are all about</p>
          <p
            className="typewriter"
            style={{ color: "#FFBC15", fontWeight: "bold" }}
          >
            <Typewriter
              words={[
                "Create Memories",
                "Secure Sponsorships",
                "Assess Target Markets",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </p>
          <BtnHolder>
            <EventButton>Join us today</EventButton>
          </BtnHolder>
        </ContentHolder>
      </HeroSection>

      <StorySectionContainer>
        <StorySectionContent>
          <h2>Our Story</h2>
          <p>
            Ours is a story of raising a new generation of men and women,
            intentional about telling their stories ceaselessly. Individual and
            communal tales of cultural authenticity, innovation, stability and
            value. A self sufficient society where individuals and organizations
            do not need to look without in search of sustainability; but look
            within as they optimize the blue oceans in their journeys to
            becoming.
          </p>
        </StorySectionContent>
      </StorySectionContainer>

      <AllAboutSectionContainer>
        <h2>At King Cabana, we are all about;</h2>
        <AllAboutInfo>
          <AllAboutSectionContent>
            <section className={`switch ${state === 1 && "active"}`}>
              <h3>Connecting People</h3>
              <p>
                We believe in a universal bond of sharing that connects all
                humanity. A society where everyone has a sense of belonging.
              </p>
            </section>
            <section className={`switch ${state === 2 && "active"}`}>
              <h3>Capturing Value</h3>
              <p>
                Be it contributing content, volunteering ideas, or selling
                products and services, the best customers co-lead companies to
                the end that value is created and sustained.
              </p>
            </section>
            <section className={`switch ${state === 3 && "active"}`}>
              <h3>Fulfilling Memories</h3>
              <p>
                Today’s customers want more than products, features or benefits.
                They want meaning. They want creative control over their life
                stories as they mark milestones that acknowledge the past,
                reflect the present and shape future outcomes.
              </p>
            </section>
          </AllAboutSectionContent>
          <AllAboutImages>
            <img src={community} />
          </AllAboutImages>
        </AllAboutInfo>
      </AllAboutSectionContainer>

      <PromiseSectionContainer>
        <PromiseSectionContent>
          <h2>Our Promise</h2>
          <p>
            Strengthening Africa's economic and sociocultural human capital
            through event optimization.
          </p>
        </PromiseSectionContent>
      </PromiseSectionContainer>

      <VisionSectionContainer>
        <VisionSectionContent>
          <img src={bulb} alt="" />
          <section>
            <h3>Our Vision</h3>
            <p>Mark Milestones</p>
          </section>
        </VisionSectionContent>
        <VisionSectionContent>
          <section>
            <h3>Our Mission</h3>
            <p className="mission">
              To be Africa's event intelligence system, enabling event
              stakeholders to achieve set goals.
            </p>
          </section>
          <img src={skyscrapper} alt="" />
        </VisionSectionContent>
      </VisionSectionContainer>

      <InfoSectionContainer>
        <InfoSectionContent>
          <h2>Excited as we are to explore?</h2>
          <p style={{ textAlign: "center", alignSelf: "center" }}>
            {" "}
            Enter your email with King Cabana now!
          </p>
          <InfoButton>Get early access</InfoButton>
        </InfoSectionContent>
      </InfoSectionContainer>

      <Footer />
    </>
  );
};

export default AboutUs;
=======
import React from 'react'

const AboutUs = () => {
  return (
    <div>
        <h1>Josiah</h1>
    </div>
  )
}

export default AboutUs
>>>>>>> 7c163be40e987619518f65372e1d5b47c936dee2
