import styled from "styled-components";
import aboutUs from "../../images/aboutUs.png";

export const HeroSection = styled.div`
  width: 100%;
  height: 100vh;
  left: 2px;
  top: 116px;
  background-repeat: no-repeat;
  background: url(${aboutUs});
  background-position: right;
  background-size: cover;

  @media screen and (max-width: 425px) {
    height: 520px;
  }
`;

export const ContentHolder = styled.div`
  width: 90%;
  align-content: center;
  padding: 12% 8%;
  line-height: 1.2;
  align-items: center;
  transition: 0.5s all;
  h1 {
    color: #ffffff;
    font-weight: 400;
    font-size: 36px;
    line-height: 137.5%;
    color: #ffffff;
  }

  .subheading {
    color: #ffffff;
    font-size: 24px;
    font-weight: 400;
    line-height: 33px;
    padding-top: 2%;
    margin-bottom: 24px;
  }

  .typewriter {
    color: #ffbc15;
    font-weight: 800;
    font-size: 48px;
    line-height: 68.24px;
    margin-bottom: 5rem;
  }
  @media screen and (max-width: 663px) {
    padding-top: 10rem;
    h1 {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 556px) {
    h1 {
      font-size: 20px;
    }
    .subheading {
      font-size: 16px;
    }
    .typewriter {
      font-size: 36px;
      line-height: 50px;
    }
  }

  @media screen and (max-width: 425px) {
    padding-top: 8rem;
    h1 {
      font-size: 16px;
    }
    .subheading {
      font-size: 16px;
      margin-bottom: 0px;
    }
    .typewriter {
      font-size: 24px;
      line-height: 1.5em;
    }
  }
`;

export const BtnHolder = styled.div`
  display: flex;
  width: 24%;

  @media screen and (max-width: 425px) {
    width: max-content;
    text-align: center;
  }
  @media screen and (max-width: 620px) {
    width: 500px;
  }
`;

export const EventButton = styled.button`
  height: 65px;
  width: 200px;
  border: none;
  border-radius: 8px;
  background-color: #ff2957;
  color: white;
  cursor: pointer;
  font-weight: 600;
  gap: 10px;

  &:hover {
    background-color: rgba(255, 41, 87, 0.8);
    color: white;
  }

  @media screen and (max-width: 520px) {
    width: 120px;
    font-size: 10px;
    height: 40px;
    padding: 2px 4px;
  }
`;

export const StorySectionContainer = styled.div`
  width: 100%;
  height: 60vh;
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    padding: 2em;
    height: 100%;
  }
`;

export const StorySectionContent = styled.div`
  height: auto;
  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 72px;
    text-align: center;
    color: #484848;
    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    color: #484848;
    width: 1330px;
    height: auto;
  }

  @media screen and (max-width: 650px) {
    h2 {
      font-weight: 600;
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 12px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media screen and (max-width: 282px) {
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export const AllAboutSectionContainer = styled.div`
  padding: 4rem;
  width: 100%;
  height: 100%;
  background: rgba(210, 206, 220, 0.2);

  h2 {
    left: 50px;
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;
    width: 100%;
    margin-bottom: 20px;

    @media screen and (max-width: 1300px) {
      font-size: 26px;
    }

    @media screen and (max-width: 1300px) {
      font-size: 22px;
    }

    @media screen and (max-width: 630px) {
      font-size: 20px;
    }
    @media screen and (max-width: 520px) {
      font-size: 16px;
    }
    @media screen and (max-width: 520px) {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 630px) {
    padding: 1rem;
  }
`;

export const AllAboutInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const AllAboutSectionContent = styled.div`
  color: #484848;
  width: 100%;
  height: 100%;
  /* transition: 0.5s color; */

  .switch {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 10px 3em;
    margin-bottom: 2rem;
    width: 100%;

    @media screen and (max-width: 630px) {
      margin-bottom: 1rem;
    }

    @media screen and (max-width: 630px) {
      padding: 5px 1em;
    }

    @media screen and (max-width: 282px) {
      padding: 2px 1em;
    }
  }

  .active {
    transition: ease-in-out all 0.2s;
    border-left: 3.5px solid #ffbc15;

    h3 {
      color: #ffbc15;
      transition: ease-in-out all 0.2s;
    }
  }
  h3 {
    width: 100%;
    height: 100%;
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 12px;

    @media screen and (max-width: 1300px) {
      font-size: 24px;
    }

    @media screen and (max-width: 960px) {
      font-size: 18px;
    }
  }
  p {
    width: 70%;
    height: 100%;
    font-weight: 400;
    font-size: 20px;

    @media screen and (max-width: 1300px) {
      font-size: 16px;
    }

    @media screen and (max-width: 1100px) {
      width: 100%;
    }
    @media screen and (max-width: 520px) {
      font-size: 12px;
    }
    @media screen and (max-width: 282px) {
      font-size: 8px;
    }
  }
`;

export const AllAboutImages = styled.div`
  padding-right: 4rem;

  @media screen and (max-width: 960px) {
    padding-right: 5rem;
    padding-left: 5rem;
    padding-top: 2rem;
    padding-bottom: 3rem;
  }

  @media screen and (max-width: 550px) {
    padding: 1em;
  }

  img {
    width: 600px;
    height: 450px;
    border-radius: 32px;
    box-shadow: -40px 40px 0.5px #f6e9ec;
    margin-bottom: 7rem;

    @media screen and (max-width: 1330px) {
      width: 80%;
      height: 80%;
      margin-left: 2rem;
    }
    @media screen and (max-width: 960px) {
      width: 80%;
      height: 80%;
      margin-left: 2rem;
    }

    @media screen and (max-width: 550px) {
      box-shadow: -10px 10px 0.5px #f6e9ec;
      margin-bottom: 2rem;
    }
  }
`;

export const PromiseSectionContainer = styled.div`
  width: 100%;
  height: 60vh;
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5rem;
  }
  @media screen and (max-width: 512px) {
    padding: 5rem 2rem;
  }
`;

export const PromiseSectionContent = styled.div`
  h2 {
    font-weight: 600;
    font-size: 40px;
    text-align: center;
    color: #484848;
    margin-bottom: 42px;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    color: #484848;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 512px) {
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 282px) {
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
      line-height: 24px;
    }
  }
`;

export const VisionSectionContainer = styled.div`
  padding: 5rem 15rem;
  width: 100%;
  height: 100%;
  background: #fef5f7;

  @media screen and (max-width: 1300px) {
    padding: 4rem 9rem;
  }

  @media screen and (max-width: 960px) {
    padding: 2rem 0;
  }
`;

export const VisionSectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #484848;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
  img {
    height: 40%;
    width: 40%;
    border-radius: 20px;

    @media screen and (max-width: 1300px) {
      width: 40%;
      height: 40%;
    }

    @media screen and (max-width: 960px) {
      width: 50%;
      height: 50%;
    }
  }
  .skyscrapper {
    @media screen and (max-width: 960px) {
      order: 1;
      margin-bottom: 3rem;
    }
  }
  .bulb {
    margin-bottom: 9rem;

    @media screen and (max-width: 960px) {
      margin-top: 4rem;
      margin-bottom: 3rem;
    }
  }

  .missionComp {
    @media screen and (max-width: 960px) {
      order: 2;
      width: 50%;
    }
  }
  section {
    width: 50%;
    height: 50%;
  }
  h3 {
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 16px;
    line-height: 3rem;

    @media screen and (max-width: 960px) {
      font-size: 32px;
      margin-bottom: 16px;
      margin-top: 16px;
      text-align: center;
    }

    @media screen and (max-width: 333px) {
      font-size: 16px;
    }
  }
  p {
    height: 36px;
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;

    @media screen and (max-width: 960px) {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 16px;
      text-align: center;
    }

    @media screen and (max-width: 333px) {
      font-size: 12px;
      margin-bottom: 8px;
      margin-top: 8px;
    }
  }

  .mission {
    width: 80%;
    height: 50%;

    @media screen and (max-width: 960px) {
      text-align: center;
      width: auto;
    }
  }
  .visionH3 {
    width: 100%;
    margin-left: 10rem;

    @media screen and (max-width: 960px) {
      margin-left: 0;
    }
  }

  .vision {
    width: 80%;
    height: 50%;
    margin-left: 10rem;

    @media screen and (max-width: 960px) {
      margin-left: 0;
      width: 100%;
      margin-bottom: 4rem;
    }
  }
`;

export const InfoSectionContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #484848;
  text-align: center;
`;

export const InfoSectionContent = styled.div`
  h2 {
    margin-bottom: 16px;
    width: 520px;
    height: 30px;
    font-weight: 500;
    font-size: 36px;
    line-height: 30px;

    @media screen and (max-width: 520px) {
      font-size: 24px;
      margin-bottom: 42px;
    }
  }
  p {
    height: 30px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 54px;

    @media screen and (max-width: 520px) {
      font-size: 16px;
    }
    @media screen and (max-width: 333px) {
      font-size: 12px;
    }
  }
`;

export const InfoButton = styled.button`
  padding: 24px 24px;
  gap: 10px;
  width: 214px;
  height: 66px;
  background: #ff2957;
  border-radius: 8px;
  border: none;

  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;

  &:hover {
    background-color: rgba(255, 41, 87, 0.8);
    color: white;
    cursor: pointer;
  }

  @media screen and (max-width: 520px) {
    width: 120px;
    font-size: 10px;
    height: 40px;
    padding: 2px 4px;
  }
`;
