import React from 'react'
import {
  BgOverlay, HeroSection,
  ContentHolder, BtnHolder,
  EventButton, ContentSection,
  ContentSectionHeader, ContentSectionParagraph, EventCard, NavButtonHolder
} from './HomeStyled'
import {
  CardHolder, ImageDisplayOverlay,ImageDisplayOverlayB,
} from '../../globalStyles'
import Footer from '../../components/footer/Footer'
import { NavButton } from '../../components/navbar/Navbar.styled'
import Navbar from '../../components/navbar/Navbar'
import { Typewriter } from 'react-simple-typewriter'
import Img from '../../images/Business.jpg'
import {ASContentSection, ASContent, ASImage, SponsorSection, SponsorSectionInner, 
  SponsorCard, ASSectionInner, ASContentInner, TestimonialSection, ReadySection} from './HomeStyled'
import Search from '../../images/search.svg'
import Bulb from '../../images/Frame 21613bulb.svg'
import Speaker from '../../images/speaker.svg'
import Subscribe from '../../images/computer.jpg'
import Testimonial from '../../components/testimonials/Testimonial'




const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection>
        <BgOverlay>
          <ContentHolder>

            <h1 style={{ margin: 'auto 0', fontWeight: 'bold', }}>
              Dreams do come true.<br />{' '}
              <span style={{ color: '#FFBC15', fontWeight: 'bold' }}>
                <Typewriter
                  words={['Create Memories',
                    'Secure Sponsorships',
                    'Assess Target Markets'
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle='_'
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            <p>Connecting People | Creating Memories | <br />
              Capturing Value</p>
            <BtnHolder>
              <EventButton>Create Event</EventButton>
              <EventButton style={{ background: 'transparent', border: '1.5px solid white' }}>Sponsor Events</EventButton>
            </BtnHolder>
          </ContentHolder>
        </BgOverlay>
      </HeroSection>

      <ContentSection>
        <ContentSectionHeader>Event Categories</ContentSectionHeader>
        <ContentSectionParagraph>Explore the most trending</ContentSectionParagraph>
        <CardHolder>
          <EventCard img={Img}>
            <ImageDisplayOverlay>Business</ImageDisplayOverlay>
          </EventCard>
          <EventCard img={Img}>
            <ImageDisplayOverlay>Weddings</ImageDisplayOverlay>
          </EventCard>
          <EventCard img={Img}>
            <ImageDisplayOverlay>Concert/Parties</ImageDisplayOverlay>
          </EventCard>
          <EventCard img={Img}>
            <ImageDisplayOverlay>Sports & Fitness</ImageDisplayOverlay>
          </EventCard>
          <EventCard img={Img}>
            <ImageDisplayOverlay>Art Exhibition</ImageDisplayOverlay>
          </EventCard>
          <EventCard img={Img}>
            <ImageDisplayOverlay>Food & Drinks</ImageDisplayOverlay>
          </EventCard>
        </CardHolder>
        <NavButtonHolder>
          <NavButton style={{color: 'black' }}>Explore More</NavButton>
        </NavButtonHolder>
      </ContentSection>

      <ASContentSection style={{backgroundColor:'#FEF5F7'}}>
        <ASSectionInner>
        <ASContent>
          <ASContentInner>
          <p style={{fontSize:'26px'}}>Advertise your events on our platform.</p>
          <p>Publicize your events and business here and experience potential 
            customers seek you out in record time.</p>
          <EventButton style={{marginTop:'4%'}}>Get in touch</EventButton>
          </ASContentInner>
        </ASContent>
        <ASImage img={Img}/>
        </ASSectionInner>
      </ASContentSection>
      
      <SponsorSection>
        <h4>Leverage for being an Event sponsor</h4>
        <p>As a sponsor, these are some of the opportunities you would get.</p>
        <SponsorSectionInner>
          <SponsorCard>
            <img src={Search} alt=''/>
            <p>Assess target markets.</p>
          </SponsorCard>
          <SponsorCard>
            <img src={Bulb} alt=''/>
            <p>Enhance connection with target markets.</p>
          </SponsorCard>
          <SponsorCard>
            <img src={Speaker} alt=''/>
            <p>Promote your brand through experiential marketing.</p>
          </SponsorCard>
        </SponsorSectionInner>           
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'100vw' }}>
        <NavButton style={{backgroundColor:'#FF2957', color:'white'}}>Get Started</NavButton>
        </div>
      </SponsorSection>

      <TestimonialSection>
        <p style={{marginBottom:'3%', textAlign:'center'}}>Testimonials</p>
        <Testimonial/>
      </TestimonialSection>
      

      <ReadySection style={{ padding: '4% 10%'}}>
      <ASImage img={Subscribe}><ImageDisplayOverlayB/></ASImage>
        <ASContent>
          <div style={{width:'inherit', justifyContent:'flex-start'}}>
          <p style={{fontSize:'26px'}}>Ready to be sponsored? .</p>
          <p>Enter your email with King Cabana now!</p>
          <NavButton style={{marginTop:'4%', backgroundColor:'#FF2957', color:'white'}}>Get Started</NavButton>
          </div>
        </ASContent>
      </ReadySection>
      <Footer />
    </>
  )
}

export default Home