import React from "react";
import { LogoLink } from "../../../components/navbar/Navbar.styled";
import {
  TopBarContainer,
  TopBarLogo,
  TopBarItemHolder,
  ItemsHolder,
  ItemsHolderInner,
  ProfilePicture,
  DropDownBtn,
  Dropdown,
  DropdownContent,
  DropdownContentLink,
} from "./TopBar.styled";
import Logo from "../../../images/KCLogo.svg";
import SearchBar from "../../../components/searchBar/SearchBar";
import { SlBell } from "react-icons/sl";
// import Profile from "../../../images/pexels-george-ikwegbu-2379429.jpg";
import { RiArrowDownSLine } from "react-icons/ri";
import { KBTextM } from "../../../components/fonts/fontSize";
import { useDispatch, useSelector } from "react-redux";
import { clearUserDetails } from "../../../redux/slices/userDetailsSlice";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";



const TopBar = () => {

const user = useSelector(state=>state.userDetails)

function showDropDown() {
  document.getElementById("myDropdown").classList.toggle("myDropdown");
}

const dispatch = useDispatch()
const navigate = useNavigate();

const handleLogout =  () =>{
  dispatch(clearUserDetails())
  toast.success("logout!");
  // navigate("/home")
}

window.onclick = function(event) {
  if (!event.target.matches('dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
}
 
  
  return (
    <TopBarContainer>
      <TopBarLogo>
        <LogoLink to="/">
          <img src={Logo} alt="King Cabana Logo" />
        </LogoLink>
      </TopBarLogo>
      <TopBarItemHolder>
        <SearchBar />
        <ItemsHolder>
          <ItemsHolderInner>
          <SlBell 
                style={{
                  cursor: "pointer",
                }}
            />
            <div
              style={{
                width: "max-content",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ProfilePicture style={{border:'1px solid #FF2957', display:'flex', justifyContent:'center', alignItems:'center'}}>
              {(user?.details?.fullName?.split(" ")?.map(x=>x&&x[0])?.join(""))}
              </ProfilePicture>

              <KBTextM>{(user?.details?.fullName)}</KBTextM>
              <Dropdown>
              <DropDownBtn onclick={showDropDown} className="dropbtn">
                <RiArrowDownSLine
                style={{
                  cursor: "pointer",
                }}
              />
              </DropDownBtn>
              <DropdownContent id="myDropdown" className="dropdown-content">
              <div style={{display:'flex', gap:'20px', padding:'20px'}}>
              <ProfilePicture style={{border:'1px solid #FF2957', display:'flex', justifyContent:'center', alignItems:'center'}}>
              {(user?.details?.fullName?.split(" ")?.map(x=>x&&x[0])?.join(""))}
              </ProfilePicture>
                <div>
                <p style={{fontWeight:'500'}}>{(user?.details?.fullName)}</p>
                <p style={{fontSize:'12px'}}>{(user?.details?.email)}</p>
                </div>
              </div> 
                <hr style={{color:'#0068FF', padding:'auto'}}/>
                <DropdownContentLink>Account settings</DropdownContentLink>
                <DropdownContentLink onClick={handleLogout}>Logout</DropdownContentLink>
             </DropdownContent>
            </Dropdown>
              
            </div>
          </ItemsHolderInner>
        </ItemsHolder>
      </TopBarItemHolder>
    </TopBarContainer>
  );
};

export default TopBar;
