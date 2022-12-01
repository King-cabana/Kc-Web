import styled from "styled-components";
import aboutUs from "../../images/aboutUs.png";

export const HeroSection = styled.div`
  /* width: 100vw;
  height: 100vh; */
  width: 1510px;
  height: 870px;
  left: 2px;
  top: 116px;
  background-repeat: no-repeat;
  background: url(${aboutUs});
  background-position: right;
  background-size: contain;

  /* @media screen and (max-width: 960px) {
    background-size: cover;

    background-position: center;
    object-fit: contain;
    height: 65vh;
  } */
`;

export const ContentHolder = styled.div`
  width: 90vw;
  align-content: center;
  padding: 12% 8%;
  line-height: 1.2;
  align-items: center;

  h1 {
    color: #ffffff;
    padding-top: 5%;
    font-weight: 400;
    font-size: 36px;
    line-height: 137.5%;
    align-items: flex-end;
    color: #ffffff;
  }

  .subheading {
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    padding-top: 2%;
    margin-bottom: 24px;
  }

  .typewriter {
    color: #ffbc15;
    font-weight: 800;
    font-size: 48px;
    line-height: 68.24px;
    margin-bottom: 30px;
  }
`;

export const BtnHolder = styled.div`
  display: flex;
  padding-top: 5%;
  width: 24vw;
  justify-content: space-between;

  /* @media screen and (max-width: 960px){
        display: flex;
        width: max-content;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        justify-items: center ;
        
        
        
    } */
`;

export const EventButton = styled.button`
  height: 66px;
  width: 198px;
  border: none;
  border-radius: 8px;
  background-color: #ff2957;
  color: white;
  cursor: pointer;
  font-weight: 600;
  gap: 10px;
  align-items: center;

  /* @media screen and (max-width: 960px){
            width: 40vw;
            /* margin-bottom: 10%; */
  /* margin: 7% 55%;  
        }*/
`;

export const StorySectionContainer = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  /* @media screen and (max-width: 960px) {
        height: max-content;
    } */
`;

export const StorySectionContent = styled.div`
  h2 {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    text-align: center;
    color: #484848;
    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #484848;
    width: 1330px;
    height: 149px;
  }
`;

export const AllAboutSectionContainer = styled.div`
  padding: 50px;
  gap: 25px;

  width: 1518px;
  height: 886px;
  left: -3px;
  top: 1445px;

  background: rgba(210, 206, 220, 0.2);

  h2 {
    top: 50px;
    left: 50px;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    width: 533px;
    height: 48px;
    margin-bottom: 60px;
  }
`;

export const AllAboutInfo = styled.div`
  /* display: flex;
  justify-content: space-around; */
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: flex-start;
`;

export const AllAboutSectionContent = styled.div`
  color: #484848;
  .switch {
    border-left: 3.5px solid #ffbc15;
    padding-left: 2em;
    h3 {
      color: #ffbc15;
    }
  }
  h3 {
    width: 599px;
    height: 48px;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
  }
  p {
    width: 599px;
    height: 150px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }
`;

// export const Item = styled.div`;
//   /* .people { */
//   border-left: 3.5px solid #ffbc15;

//   padding-left: 2em;
//   /* } */
//   h3 {
//     width: 599px;
//     height: 48px;
//     font-weight: 600;
//     font-size: 32px;
//     line-height: 48px;
//     color: #ffbc15;
//   }
//   p {
//     width: 599px;
//     height: 150px;
//     font-weight: 400;
//     font-size: 20px;
//     line-height: 30px;
//   }
// `;

export const AllAboutImages = styled.div`
  img {
    width: 500px;
    height: 450px;
    left: 44px;
    top: -91px;
    border-radius: 41.8005px;
    box-shadow: -50px 70px 0.5px #f6e9ec;
  }
`;

export const PromiseSectionContainer = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PromiseSectionContent = styled.div`
  h2 {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    text-align: center;
    color: #484848;
    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #484848;
    width: 1330px;
    height: 149px;
  }
`;

export const VisionSectionContainer = styled.div`
  padding: 70px;
  width: 1520px;
  height: 1296px;
  left: -4px;
  top: 2700px;
  background: #fef5f7;
  /* display: table;
  justify-content: center;
  align-items: center; */
`;

export const VisionSectionContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #484848;
  margin-bottom: 150px;

  img {
    width: 500px;
    height: 500px;
    border-radius: 20px;
  }
  h3 {
    width: 335px;
    height: 58px;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    margin-bottom: 24px;
  }
  p {
    width: 201px;
    height: 36px;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }

  .mission {
    width: 579px;
    height: 108px;
  }
`;

export const InfoSectionContainer = styled.div`
  width: 100%;
  height: 38.5rem;
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
  }
  p {
    /* width: 478px; */
    height: 30px;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 54px;
  }
`;

export const InfoButton = styled.button`
  padding: 24px 39px;
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
`;
