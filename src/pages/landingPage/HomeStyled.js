import styled from "styled-components";
import background from "../../images/clay-banks-POzx_amnWJw-unsplash.jpg";

export const HeroSection = styled.div`
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background: url(${background});
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 960px) {
    background-size: cover;
    background-position: right;
  }
`;

export const BgOverlay = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(49, 38, 49, 0.8);
`;

export const ContentHolder = styled.div`
  width: 100%;
  align-content: center;
  padding: 6% 8%;
  line-height: 2;
  align-items: center;

  h1 {
    color: white;
    font-size: 40px;
    padding-top: 5%;
    font-weight: normal;
  }

  span {
    color: #ffbc15;
    font-size: 48px;
  }

  p {
    color: white;
    font-size: 14px;
    /* padding-top:2%; */
  }

  @media screen and (max-width: 480px) {
    padding-top: 30%;
    display: block;
    width: 100vw;
    text-align: center;
    align-items: center;
    justify-content: center;
    line-height: 1.3;

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 14px;
    }

    span {
      color: #ffbc15;
      font-size: 44px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    text-align: center;
    padding-top: 30%;
    display: block;
    width: fit-content;
    text-align: center;
    line-height: 1.3;

    h1 {
      font-size: 58px;
    }
  }
`;

export const BtnHolder = styled.div`
  display: flex;
  padding-top: 10%;
  width: 24vw;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    display: flex;
    width: max-content;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    justify-items: center;
  }
`;

export const EventButton = styled.button`
  height: 8vh;
  width: 11vw;
  border: 1.5px none;
  border-radius: 8px;
  background-color: #ff2957;
  color: white;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: rgba(255, 41, 87, 0.8);
    color: white;
  }

  @media screen and (max-width: 960px) {
    width: 40vw;
    /* margin-bottom: 10%; */
    margin: 7% 55%;
  }
`;

export const ContentSection = styled.div`
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 960px) {
    height: max-content;
  }
`;

export const ContentSectionHeader = styled.h4`
  text-align: center;
  margin-top: 6%;
  color: #484848;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 4%;
`;

export const ContentSectionParagraph = styled.p`
  color: #484848;
  margin-left: 8%;
  font-weight: 500;
  font-size: 14px;
  align-self: flex-start;
  text-align: left;
  /* margin-left: 5%; */

  @media screen and (max-width: 960px) {
    font-size: small;
    text-align: center;
    margin-left: 0%;
    margin-top: 0%;
  }
`;

export const EventCard = styled.div`
  box-sizing: border-box;
  width: 26vw;
  height: 25vh;
  background: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  background-repeat: no-repeat;
  margin-bottom: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media screen and (max-width: 960px) {
    width: 90vw;
    margin-bottom: 4%;
    /* display: inline-block; */
    /* margin: 2%; */
  }
`;

export const ASContentSection = styled.div`
  width: 100%;
  height: 100vh;
  padding: 4% 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    /* width: 100vw; */
    /* padding-top: 2%; */
    display: block;
    padding: 0;
    height: fit-content;
    font-size: 20px;
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    /* width: 100vw; */
    /* padding-top: 2%; */
    display: block;
    padding: 0;
    height: fit-content;
  }
`;

export const ASContent = styled.div`
  width: 35vw;
  height: 60vh;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 32px;
    font-weight: 600;
    color: #484848;
  }

  p {
    margin-top: 10%;
    margin-bottom: 8%;
  }

  @media screen and (max-width: 480px) {
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h4 {
      font-size: 20px;
    }

    p {
      margin-top: 0;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const ASSectionInner = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ASContentInner = styled.div`
  width: inherit;

  h4 {
    width: inherit;
    font-size: 32px;
    font-weight: 600;
    color: #484848;
  }
  p {
    margin-top: 10%;
    margin-bottom: 8%;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4%;

    h4 {
      font-size: 22px;
    }

    p {
      font-size: medium;
    }
  }

  @media screen and (min-width: 480px) and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4%;
  }
`;

export const ASImage = styled.div`
  width: 45%;
  height: 65vh;
  background: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  border-radius: 12px;
  background-repeat: no-repeat;
  margin-right: 2.5%;

  @media screen and (max-width: 960px) {
    width: 90vw;
    height: 40vh;
    display: inline-block;
    margin: 2%;
  }
`;

export const SponsorSection = styled.div`
  width: 100%;
  height: 100vh;
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    color: #484848;
  }

  p {
    font-size: 14px;
    align-self: flex-start;
    text-align: left;
    margin-left: 5%;
  }

  @media screen and (max-width: 480px) {
    height: fit-content;
    text-align: center;

    h4 {
      font-size: 20px;
      text-align: center;
    }

    p {
      text-align: center;
      align-self: center;
      margin-top: 5%;
      margin-bottom: 2%;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    /* width: 100vw; */
    display: block;
    padding: 0;
    height: fit-content;
    text-align: center;

    h4 {
      font-size: 26px;
      margin-top: 5%;
      font-weight: 600;
    }

    p {
      align-self: center;
      text-align: center;
      margin-left: 0;
      margin-top: 5%;
      margin-bottom: 5%;
    }
  }
`;

export const SponsorSectionInner = styled.div`
  width: inherit;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5%;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
    justify-content: center;
    align-items: center;
  }
`;

export const SponsorCard = styled.div`
  width: 32%;
  height: 30vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  text-align: center;
  outline: 1px solid #f6e9ec;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    margin-top: 2%;
    font-weight: 600;
    text-align: center;
    align-self: center;
  }

  @media screen and (max-width: 480px) {
    width: 90vw;
    margin-bottom: 5%;
  }
  @media screen and (min-width: 481px) and (max-width: 960px) {
    width: 80vw;
    height: 15vh;
    margin-bottom: 5%;
    padding: 2%;
  }
`;

export const NavButtonHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 2%;

  @media screen and (max-width: 960px) {
    width: 100vw;
  }
`;

export const TestimonialSection = styled.div`
  width: 100%;
  height: 100vh;
  padding: 4% 8%;
  justify-content: space-between;
  align-items: center;
  background-color: #d2cedc;
  display: block;

  @media screen and (max-width: 960px) {
    height: fit-content;
    padding: 3%;
  }
`;

export const ReadySection = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
`;
