// import React, { useState } from "react";
// import SwipeableViews from "react-swipeable-views";
// import Condueet from "../../images/Condueet_ImgID1.png";
// import Onhova from "../../images/Onhova_ImgID1.png";
// import StoryBay from "../../images/Storybay_ImgID1.png";
// import { makeStyles } from '@material-ui/core/styles';
// import { MobileStepper, Button } from '@material-ui/core';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   slide: {
//     padding: "20px",
//     height: "380px",
//     color: "#fff",
//     width: "380px",
//     borderRadius: "5px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   slideCard: {
//     background: "white",
//     color: "black",
//   },
//   content:{
//     marginTop: "10%",
//     textAlign: "center",
//   },
//   images:{
//     width:'50%'
//   },
//   stepper: {
//     maxWidth: 400,
//     flexGrow: 1,
//     margin: 'auto',
//   },
// }));

// const testimonials = [
//   {
//     img: Condueet,
//     content: 'They are professionals indeed and always a delight to work with.',
//   },
//   {
//     img: Onhova,
//     content: 'I will always give a thumbs up to King Cabana',
//   },
//   {
//     img: StoryBay,
//     content: 'Thumbs up to King Cabana for their top-notch organization and sponsor matching.',
//   },
// ];

// const Testimonial = () => {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <div className={classes.root}>
//       <SwipeableViews index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
//         {testimonials.map((testimonial, index) => (
//           <div key={index} style={Object.assign({}, classes.slide, classes.slideCard)}>
//             <img style={classes.images} src={testimonial.img} alt="" />
//             <p style={classes.content}>{testimonial.content}</p>
//           </div>
//         ))}
//       </SwipeableViews>
//       <MobileStepper
//         className={classes.stepper}
//         steps={testimonials.length}
//         position="static"
//         variant="dots"
//         activeStep={activeStep}
//         nextButton={
//           <Button size="small" onClick={handleNext} disabled={activeStep === testimonials.length - 1}>
//             Next
//             <KeyboardArrowRight />
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             <KeyboardArrowLeft />
//             Back
//           </Button>
//         }
//       />
//     </div>
//   );
// };

// export default Testimonial;
