import React, {  useState } from 'react';
import OtpInput from 'react-otp-input';
import { ModalOverlay, AnimationContainer, LongButton, Form } from '../../../globalStyles'
import { ResetBody } from '../resetPassword/ResetPasswordStyled'
import Lottie from "lottie-react";
import animationData from '../../../lotties/76040-change-passwords.json';  
// import { apiFetch } from '../../../redux/authSlice';

const VerifyOTP = () => {
    
    const [otp, setOtp] = useState('')

    const handleChange = value => setOtp(value)

    // const sendOtp = () => {
    
    // }

    // const dispatch = useDispatch();
    // dispatch(apiFetch({ apiName: 'verify', body: { otp }, method: 'get', url: 'forgot-password/otp?otp' }))
    
    return (
    <ModalOverlay>
        <ResetBody>
        <h3>Verification Code</h3>
        <AnimationContainer>
            <Lottie 
            animationData={animationData} 
            loop={true} 
            />
        </AnimationContainer>
        <p style={{color:'black'}}>Enter the OTP/code sent to your inbox. </p>

        <Form>
        <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            containerStyle={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'5%'}}
            inputStyle={{width:'40px', height:'40px', outline:'none',
                        margin:'5px', borderRadius:'5px', border:'1px solid #c4c4c4'}}
            // isInputSecure
            separator={<span>   </span>}
        />
         <LongButton>Verify</LongButton>
            <hr></hr>
            <p style={{color:'black'}}>Didn't receive any code? Resend <span style={{color:'red'}}>29</span></p>
        </Form>

        </ResetBody>
    </ModalOverlay>

    );
}

export default VerifyOTP