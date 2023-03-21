import React, { useState, useEffect } from "react";
import hb from "../../images/hb.svg";
import times from "../../images/times.svg";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavLogo,
  LogoLink,
  NavContent,
  NavItems,
  NavMobile,
  NavBarLink,
  NavButtonLink,
} from "./Navbar.styled";
import Logo from "../../images/kingCabanaLogo.svg";
import { NavGroup } from "./Navbar.styled";
import { AltNavBtn, PryNavBtn } from "../button/button";
// import SignIn from '../../pages/authentication/signIn/SignIn';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
<<<<<<< HEAD
      <IconContext.Provider value={{ size: "25px" }}>
        <Nav>
          <NavLogo>
            <LogoLink to="/">
              <img src={Logo} alt="King Cabana Logo" />
            </LogoLink>
          </NavLogo>
          <NavContent>
            <NavMobile onClick={handleClick}>
              {click ? <img src={times} alt="" /> : <img src={hb} alt="" />}
            </NavMobile>
            <NavItems onClick={handleClick} click={click}>
              <li>
                <NavBarLink to="/">Home</NavBarLink>
              </li>
              <li>
                <NavBarLink to="/contactUs">Contact Us</NavBarLink>
              </li>
              <li>
                <NavBarLink to="/aboutUs">About Us </NavBarLink>
              </li>
              <NavGroup>
                {button ? (
                  <>
                  <NavButtonLink to="/login">
                    <AltNavBtn fontWeight='500'>Sign In</AltNavBtn>
                  </NavButtonLink>  
                  <NavButtonLink to="/signup">  
                    <PryNavBtn fontWeight='500'>Sign Up</PryNavBtn>
                  </NavButtonLink>
                  </>
                  
                ) : (
                  <>
                  <NavButtonLink to="/login">
                    <AltNavBtn fontWeight='500'>Sign In</AltNavBtn>
                  </NavButtonLink>  
                  <NavButtonLink to="/signup">  
                    <PryNavBtn fontWeight='500'>Sign Up</PryNavBtn>
                  </NavButtonLink>
                  </>
                )}
              </NavGroup>
            </NavItems>
          </NavContent>
        </Nav>
      </IconContext.Provider>
=======
    <IconContext.Provider value={{size:'25px'}}>
    <Nav>
      <NavLogo>
      <LogoLink to="/">
      <img src={Logo} alt='King Cabana Logo'/>
      </LogoLink>
      </NavLogo>
      <NavContent>
        <NavMobile onClick={handleClick}>
          {click ? <img src={times} alt=''/> : <img src={hb} alt=''/> }
        </NavMobile>
        <NavItems onClick={handleClick} click={click}>
            {/* <NavItemsInner> */}
            <li><NavBarLink  to="/">Home</NavBarLink></li>
           {/*  <li><NavBarLink to="/sponsors">For Sponsors</NavBarLink></li>*/} 
           {/*  <li><NavBarLink to="/organizers">For Organizer</NavBarLink></li> */} 
            <li><NavBarLink to="/contactUs">Contact Us</NavBarLink></li>
            <li><NavBarLink to="/aboutUs">About Us </NavBarLink></li>
            {/* </NavItemsInner> */}
            <NavGroup>
            {/* <NavSearchHolder>
            <BiSearch size={20} cursor='pointer' style={{marginRight:'10%'}}/>
            </NavSearchHolder> */}
            {button ? (
                <NavButtonLink to="/waitlist">
                  <AccessButton>Get early access</AccessButton>
                </NavButtonLink>
              ) : (
                <NavButtonLink to="/waitlist">
                  <AccessButton>Get early access</AccessButton>
                </NavButtonLink>
              )}
            </NavGroup>
           
        </NavItems>
      </NavContent>
    </Nav>
    </IconContext.Provider>
>>>>>>> a1be72399b67e2e563ddb7b112ac59eb45b0d220
    </>
  );
};

export default Navbar;
