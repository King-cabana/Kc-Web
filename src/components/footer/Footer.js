import React from "react";
import LogoWhite from "../../images/KingCabanaLogoWhite.svg";
import Facebook from "../../images/facebook-svgrepo-com (1).svg";
import Linkedin from "../../images/linkedin-svgrepo-com.svg";
import Twitter from "../../images/twitter-svgrepo-com.svg";
import Instagram from "../../images/instagram-svgrepo-com (1).svg";
import Playstore from "../../images/logo-google-playstore-svgrepo-com.svg";
import TikTok from "../../images/tiktok-svgrepo-com.svg";
import apple from "../../images/apple-svgrepo-com.svg";
import {
  FooterBody,
  EventButton,
  FooterContent,
  FooterInner,
  IconHolder,
  SocialIcon,
  FooterLinksHolder,
  EventButtonHolder,
  FooterLine,
  BottomLogo,
} from "./FooterStyled";
import ScrollButton from "../footer/ScrollToTop";

const Footer = () => {
  return (
    <>
      <FooterBody>
        <FooterContent>
          <FooterInner>
            <img
              src={LogoWhite}
              alt="King Cabana Logo"
              style={{ width: "120px" }}/>
            <p>371, Borno Way, Alagomeji</p>
            <p>(+234) 808 831 118 8</p>
            <a href="info@kingcabana.com">info@kingcabana.com</a>
            <IconHolder>
              <SocialIcon href="info@kingcabana.com">
                <div>
                  <img src={Linkedin} alt=""/>
                </div>
              </SocialIcon>
              <SocialIcon
                href="https://twitter.com/KingCabanaHQ"
                target="_blank">
                <div>
                  <img src={Twitter} alt=""/>
                </div>
              </SocialIcon>
              <SocialIcon href="info@kingcabana.com">
                <div>
                  <img src={Facebook} alt=""/>
                </div>
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/kingcabanahq/"
                target="_blank">
                <div>
                  <img src={Instagram} alt="" />
                </div>
              </SocialIcon>
              <SocialIcon href="info@kingcabana.com">
                <div>
                  <img src={TikTok} alt="" />
                </div>
              </SocialIcon>
            </IconHolder>
          </FooterInner>
          <FooterLinksHolder>
            <p>Company</p>
            <ul>
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </FooterLinksHolder>
          <FooterLinksHolder>
            <p>Learn More</p>
            <ul>
              <li>How it works</li>
              <li>Partners</li>
              <li>Help center</li>
            </ul>
          </FooterLinksHolder>
      
          <EventButtonHolder>
            <p style={{ color: "white", fontSize: "14px", marginBottom: "5%" }}>
              Download app on
            </p>
            <EventButton>
              <img width="40px" height="40px" src={Playstore} alt="" />
              Playstore{" "}
            </EventButton>
            <EventButton>
              <img
                width="40px"
                height="40px"
                src={apple}
                alt=""
                style={{
                  verticalAlign: "middle",
                  filter:
                    "invert(100%) sepia(100%) saturate(0%) hue-rotate(95deg) brightness(450%) contrast(105%)",
                  width: "20px",
                  height: "20px",
                  margin: "auto",
                }}/>
              Applestore
            </EventButton>
          </EventButtonHolder>
          <ScrollButton />
        </FooterContent>
        <FooterLine />
        <BottomLogo>
          <p>@ 2022</p>
          <img src={LogoWhite} alt="" width="80px" height="80px" />
        </BottomLogo>
      </FooterBody>
    </>
  );
};

export default Footer;
