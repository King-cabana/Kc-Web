import React from 'react'
import { HiOutlineMail, HiOutlinePhone, HiChevronRight } from "react-icons/hi";
import ContactInput from './ContactInput';
import Rectangle from '../../images/Rectangle 741.png';
import Facebook from '../../images/Vector3.svg';
import Linkedin from '../../images/Vector.svg';
import Twitter from '../../images/Vector2.svg';
import Instagram from '../../images/Vector4.svg';
import Lottie from "lottie-react";
import animationData from '../../lotties/lf30_editor_meubo9a6.json';
// import Gif from '../../images/Rectangle.gif';
import {  ContactBody, ContactRight, ContainerBox, ContactHeader, AnimationContainer, ContactParagraph, ContactLogoBody,
          EmailBody, EmailText, EmailIcon, EmailIconArrow, PhoneBody, LocationCenter,
          PhoneLogo, PhoneText, PhoneIconArrow, Box, BoxBody, BoxHeader, ContactMobile, 
          BoxParagraph, IconHolder, SocialIcon, Location, LocationHeader, LocationText
} from "./ContactUsStyled"
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const ContactUs = () => {
  return (
    <>
    <Navbar />
      <ContactBody>
        <ContactRight>
          <ContactMobile>
        <ContactHeader>Get in touch</ContactHeader>
        <ContactParagraph>We'd be thrilled to hear from you. Our staff is always available to<br/>ease your journey.</ContactParagraph>
        </ContactMobile>
        <ContactLogoBody>
          <EmailBody>
            <EmailIcon><HiOutlineMail size={40}/></EmailIcon>
            <EmailText>Email: info@kingcabana.com</EmailText>
            <EmailIconArrow><HiChevronRight size={30}/></EmailIconArrow>
          </EmailBody>
          <PhoneBody>
            <PhoneLogo> <HiOutlinePhone size={40}/> </PhoneLogo>
            <PhoneText>Phone: (+234) 808 831 118 8</PhoneText>
            <PhoneIconArrow><HiChevronRight size={30}/></PhoneIconArrow>
          </PhoneBody>
        </ContactLogoBody>
        </ContactRight>
        <AnimationContainer>
        <Lottie 
        animationData={animationData} 
        loop={true}  style={{width:'100%', height:'100%'}}
        />
      </AnimationContainer>
      </ContactBody>
      <ContainerBox>
      <ContactInput />
      </ContainerBox>
      <Box>
        <img src={Rectangle} alt='Rectangle'/>
        <BoxBody>
          <BoxHeader>
            Join Our Online Community
          </BoxHeader>
          <BoxParagraph>
          Follow us on social media. Be the first to hear about King Cabana news and exclusive information before anyone else.
          </BoxParagraph>
            <IconHolder> 
                        <SocialIcon href="info@kingcabana.com">
                            <div>
                              <img src={Linkedin} alt="" />
                            </div>
                        </SocialIcon>
                        <SocialIcon href="https://twitter.com/KingCabanaHQ" target="_blank">
                            <div>
                              <img src={Twitter} alt=""/>
                            </div>
                        </SocialIcon>
                        <SocialIcon href="info@kingcabana.com">
                            <div>
                              <img src={Facebook} alt=""/>
                            </div>
                        </SocialIcon>
                        <SocialIcon href="https://www.instagram.com/kingcabanahq/" target="_blank">
                            <div>
                              <img src={Instagram} alt=""/>
                            </div>
                        </SocialIcon> 
          </IconHolder> 
        </BoxBody>
      </Box>
      <Location>
        <LocationCenter>
        <LocationHeader>Our Location</LocationHeader>
        <LocationText>371, Borno Way, Alagomeji, Lagos</LocationText>
        </LocationCenter>
      </Location>
      <Footer />
    </>
  )
}

export default ContactUs