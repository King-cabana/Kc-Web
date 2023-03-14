import React, { useState } from "react";
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
  Inner,
} from "./TopBar.styled";
import Logo from "../../../images/KCLogo.svg";
import SearchBar from "../../../components/searchBar/SearchBar";
import { SlBell } from "react-icons/sl";
import { RiArrowDownSLine } from "react-icons/ri";
import { KBTextM } from "../../../components/fonts/fontSize";
import { useDispatch, useSelector } from "react-redux";
import { clearUserDetails } from "../../../redux/slices/userDetailsSlice";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  BtnHolderLink,
  ModalButtonContainer,
  ModalText,
  PopUpComponent,
  PopUpOverlay,
} from "../../budgetInventory/InventoryStyled";
import {
  AlternativeButton2,
  ModalPrimaryButton,
} from "../../../components/button/button";
import { clearProfile } from "../../../redux/slices/profileSlice";

const TopBar = () => {
  const [modal, setModal] = useState(false);

  // Modal Contitions
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const showModal = !modal && "notShown";

  const user = useSelector((state) => state.userDetails);

  function showDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // dispatch(clearUserDetails(), clearProfile());
    dispatch(clearProfile())
    toast.success("Logout!");
    // setTimeout(() => navigate("/"), 200);
  };

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <>
      {modal && <PopUpOverlay></PopUpOverlay>}
      <TopBarContainer>
        <TopBarLogo>
          <LogoLink to="/">
            <img src={Logo} alt="King Cabana Logo" />
          </LogoLink>
        </TopBarLogo>
        <SearchBar />
        <TopBarItemHolder>
          <ItemsHolder>
            <ItemsHolderInner>
              <Inner>
                <SlBell style={{ cursor: "pointer" }} />
                <ProfilePicture
                  style={{
                    border: "1px solid #FF2957",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {user?.details?.fullName
                    ?.split(" ")
                    ?.map((x) => x && x[0])
                    ?.join("")}
                </ProfilePicture>

                <KBTextM>{user?.details?.fullName}</KBTextM>

                <Dropdown>
                  <DropDownBtn onClick={showDropDown} className="dropbtn">
                    {/* <RiArrowDownSLine
                      style={{
                        cursor: "pointer",
                        zIndex:'1000'
                      }}
                      onClick={showDropDown}
                    /> */}
                  </DropDownBtn>
                  <DropdownContent id="myDropdown" className="dropdown-content">
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        padding: "20px",
                      }}
                    >
                      <ProfilePicture
                        style={{
                          border: "1px solid #FF2957",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {user?.details?.fullName
                          ?.split(" ")
                          ?.map((x) => x && x[0])
                          ?.join("")}
                      </ProfilePicture>
                      <div>
                        <p style={{ fontWeight: "500" }}>
                          {user?.details?.fullName}
                        </p>
                        <p style={{ fontSize: "12px" }}>
                          {user?.details?.email}
                        </p>
                      </div>
                    </div>
                    <hr style={{ color: "#0068FF", padding: "auto" }} />
                    <DropdownContentLink>Account settings</DropdownContentLink>
                    <DropdownContentLink onClick={() => setModal(!modal)}>
                      Logout
                    </DropdownContentLink>
                  </DropdownContent>
                </Dropdown>
              </Inner>
            </ItemsHolderInner>
          </ItemsHolder>
        </TopBarItemHolder>
      </TopBarContainer>

      <div className={`${showModal}`}>
        <PopUpComponent>
          <ModalText>Are you sure you want to Logout?</ModalText>

          <ModalButtonContainer>
            <BtnHolderLink>
              <AlternativeButton2
                onClick={() => setModal(!modal)}
                style={{
                  color: "#FF2957",
                }}
              >
                Cancel
              </AlternativeButton2>
            </BtnHolderLink>

            <BtnHolderLink to="/">
              <ModalPrimaryButton onClick={handleLogout}>
                Yes, Logout
              </ModalPrimaryButton>
            </BtnHolderLink>
          </ModalButtonContainer>
        </PopUpComponent>
      </div>
    </>
  );
};

export default TopBar;
