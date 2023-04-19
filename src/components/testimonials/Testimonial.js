
  import React from "react";
  import SwipeableViews from "react-swipeable-views";
  import Condueet from "../../images/Condueet_ImgID1.png";
  import Onhova from "../../images/Onhova_ImgID1.png";
  import StoryBay from "../../images/Storybay_ImgID1.png";

  const styles = {
    slide: {
      padding: "20px",
      height: "380px",
      color: "#fff",
      width: "380px",
      borderRadius: "5px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    slideCard: {
      background: "white",
      color: "black",
    },
    content:{
      marginTop: "10%",
      textAlign: "center",
    },
    images:{
      width:'50%'
    }
  };

  const Testimonial = () => (
    <SwipeableViews autoPlay={true} interval={3000}>
      <div style={Object.assign({}, styles.slide, styles.slideCard)}>
        <img style={styles.images} src={Condueet} alt="" />
        <p style={styles.content}>
          They are professionals indeed and
          always a delight to work with.
        </p>
      </div>
      <div style={Object.assign({}, styles.slide, styles.slideCard)}>
        <img style={styles.images} src={Onhova} alt="" />
        <p style={styles.content}>
          I will always give a thumbs up to King Cabana
        </p>
      </div>
      <div style={Object.assign({}, styles.slide, styles.slideCard)}>
      <img style={styles.images} src={StoryBay} alt="" />
        <p style={styles.content}>
        Thumbs up to King Cabana for their top-notch
          organization and sponsor matching.
        </p>
      </div>
    </SwipeableViews>
  );

  export default Testimonial;
