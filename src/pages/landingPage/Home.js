import React from 'react'
import {
  BgOverlay, HeroSection,
  ContentHolder, BtnHolder,
  EventButton, ContentSection,
  EventCard, NavButtonHolder
} from './HomeStyled'
import {
  BodyFont,
  CardHolder, HeaderFont, ImageDisplayOverlay,ImageDisplayOverlayB,
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
      <Navbar/>

      <HeroSection>
        <BgOverlay>
          <ContentHolder>
            <h1 style={{ margin: 'auto 0'}}>
              Dreams do come true.<br />{' '}
              <span style={{color: '#FFBC15', fontWeight: 'bold' }}>
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
            <BodyFont>Connecting People | Creating Memories | 
              Capturing Value</BodyFont>
            <BtnHolder>
              <EventButton>Create Event</EventButton>
              <EventButton style={{ background: 'transparent', border: '1.5px solid #FF2957' }}>Sponsor Events</EventButton>
            </BtnHolder>
          </ContentHolder>
        </BgOverlay>
      </HeroSection>

      <ContentSection>
        <HeaderFont style={{textAlign:'center', marginTop:'6%', color:'#484848', 
                          fontSize:'26px', fontWeight: '600', marginBottom:' 4%'
                          }}>Event Categories</HeaderFont>
        <BodyFont style={{ color:'#484848', marginLeft:'8%', fontWeight:'500', 
                           fontSize:'14px', alignSelf: 'flex-start', textAlign:'left'                        

        }}>Explore the most trending</BodyFont>
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
          <NavButton style={{backgroundColor:'transparent',color: 'black', border: '1.5px solid #FF2957' }}>Explore More</NavButton>
        </NavButtonHolder>
      </ContentSection>

      <ASContentSection style={{backgroundColor:'#FEF5F7'}}>
        <ASSectionInner>
        <ASContent>
          <ASContentInner>
            <HeaderFont>
              Advertise your events on our platform.
            </HeaderFont>
          <BodyFont style={{marginTop:'10%', marginBottom:'8%'
            }}>Publicize your events and business here and experience potential 
            customers seek you out in record time.</BodyFont>
          <EventButton style={{marginTop:'4%'}}>Get in touch</EventButton>
          </ASContentInner>
        </ASContent>
        <ASImage img={Img}/>
        </ASSectionInner>
      </ASContentSection>
      
      <SponsorSection>
        <HeaderFont>Leverage for being an Event sponsor</HeaderFont>
        <BodyFont>As a sponsor, these are some of the opportunities you would get.</BodyFont>
        <SponsorSectionInner>
          <SponsorCard>
            <img src={Search} alt=''/>
            <BodyFont style={{marginTop:'10%'}}>Assess target markets.</BodyFont>
          </SponsorCard>
          <SponsorCard>
            <img src={Bulb} alt=''/>
            <BodyFont  style={{marginTop:'10%'}}>Enhance connection with target markets.</BodyFont>
          </SponsorCard>
          <SponsorCard>
            <img src={Speaker} alt=''/>
            <BodyFont  style={{marginTop:'10%'}}>Promote your brand through experiential marketing.</BodyFont>
          </SponsorCard>
        </SponsorSectionInner>           
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'100vw' }}>
        <NavButton>Get Started</NavButton>
        </div>
      </SponsorSection>

      <TestimonialSection>
        <HeaderFont style={{marginBottom:'3%', textAlign:'center', fontSize:'24px', fontWeight:'600', color:'#484848'}}>Testimonials</HeaderFont>
        <Testimonial/>
      </TestimonialSection>
      

      <ReadySection>
      <ASImage img={Subscribe}><ImageDisplayOverlayB/></ASImage>
        <ASContent >
          <div style={{width:'inherit', justifyContent:'flex-start'}}>
          <HeaderFont>Ready to be sponsored? .</HeaderFont>
          <BodyFont>Enter your email with King Cabana now!</BodyFont>
          <NavButton>Get Started</NavButton>
          </div>
        </ASContent>
      </ReadySection>
      <Footer />
    </>
  )
}

export default Home