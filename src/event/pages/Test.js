import React, { useState, useEffect } from 'react'
import { LogoLink } from '../../components/navbar/Navbar.styled'
import { ProfilePicture, TopBarContainer, TopBarLogo } from '../topBar/TopBar.styled'
import Logo from "../../images/KCLogo.svg"
import Profile from '../../images/pexels-george-ikwegbu-2379429.jpg'
import { RiArrowDownSLine } from 'react-icons/ri'
import {
    ProgressBarHolder, ProgressBar, ProgressStep1,
    ProgressStep2, ProgressStep3, NumberHolder
} from './TestStyled'
import { ChechkBox, Form, RadioButton, RadioButtonWrapper } from '../../globalStyles'
import { KBTextXl, KBDisplayXs } from '../../components/fonts/fontSize'

const Test = () => {
    const [progress, setProgress] = useState(0)
    const [age, setAge] = useState()
    const [incomeRange, setIncomeRange] = useState(null)
    const [gender, setGender] = useState({ male: false, female: false, other: { state: false, text: '' } })

    useEffect(() => {
        const checkProgress = [age, incomeRange]
        setProgress(checkProgress.filter(x => x && x).length)
    }, [age])
    return (
        <>
            <TopBarContainer>
                <TopBarLogo style={{ width: '10%' }}>
                    <LogoLink to="/">
                        <img src={Logo} alt='King Cabana Logo' />
                    </LogoLink>
                </TopBarLogo>
                <div style={{ width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ProfilePicture>
                        <img src={Profile} alt='pp' />
                    </ProfilePicture>
                    <RiArrowDownSLine
                        style={{
                            cursor: 'pointer'
                        }} />
                </div>
            </TopBarContainer>
            <ProgressBarHolder>
                <div>
                    <ProgressBar>
                        <ProgressStep1>
                            <div style={{ height: 'inherit', lineHeight: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <NumberHolder>
                                        1
                                    </NumberHolder>
                                    Event Details
                                </div>
                                {progress}/4
                            </div>
                        </ProgressStep1>
                        <ProgressStep2>
                            <div style={{ height: 'inherit', lineHeight: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <NumberHolder>
                                        2
                                    </NumberHolder>
                                    Define Audience
                                </div>
                                0/1
                            </div>
                        </ProgressStep2>
                        <ProgressStep3>
                            <div style={{ height: 'inherit', lineHeight: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <NumberHolder>
                                        3
                                    </NumberHolder>
                                    Budget & Take Inventory
                                </div>
                                0/1
                            </div>
                        </ProgressStep3>
                    </ProgressBar>
                </div>
            </ProgressBarHolder>

            <div style={{ backgroundColor: '#F3F0F0   ', width: '100%', padding: '2% 8%', display: 'flex', flexDirection: 'column', alignItmes: 'center', justifyContent: 'center' }}>
                <div>
                    <KBDisplayXs fontWeight={600}>Define Audience</KBDisplayXs>
                    <p style={{ fontSize: '16px' }}>Define your audience in terms of everyone who cares
                        about what you do and the larger theme, not just the people who will attend.</p>
                </div>
                <div style={{ width: '100%', height: '70vh', backgroundColor: 'white', overflowY: 'scroll', padding: '4%', marginTop: '3%' }}>

                    <div>
                        <KBTextXl fontWeight={500}>Age {age} </KBTextXl>
                        <p>What age range best describes your community?</p>
                        <Form>
                            <div style={{ marginTop: '2%' }}>
                                <RadioButtonWrapper>
                                    <div style={{ height: 'inherit', width: '15%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <RadioButton onChange={(e) => setAge(e.target.value)} value={'17 and younger'} />
                                        17 and younger
                                    </div>
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <div style={{ height: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <RadioButton onChange={(e) => setAge(e.target.value)} value={'18-20'} />
                                        <div>18-20  </div>
                                    </div>
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <RadioButton onChange={(e) => setAge(e.target.value)} value={'21-29'} />
                                    21-29
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <RadioButton onChange={(e) => setAge(e.target.value)} value={'30-39'} />
                                    30-39
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <RadioButton onChange={(e) => setAge(e.target.value)} value={'40-49'} />
                                    40-49
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <RadioButton onChange={(e) => setAge(e.target.value)} value={'50-59'} />
                                    50-59
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <RadioButton onChange={(e) => setAge(e.target.value)} value={'60 and older'} />
                                    60 and older
                                </RadioButtonWrapper>

                            </div>
                        </Form>
                    </div>

                    <div style={{ marginTop: '3%' }}>
                        <KBTextXl fontWeight={500}>Income range</KBTextXl>
                        <p>What income range (in Naira) best describes the people connected to your event?</p>
                        <Form>
                            <div style={{ marginTop: '2%' }}>
                                <RadioButtonWrapper>
                                    <RadioButton />
                                    0 - 49,999
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <RadioButton />
                                    50,000 - 99,999
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <RadioButton />
                                    100,000 and above
                                </RadioButtonWrapper>
                            </div>
                        </Form>
                    </div>

                    <div style={{ marginTop: '3%' }}>
                        <KBTextXl fontWeight={500}>Gender</KBTextXl>
                        <p>Select one or more of the most predominant of your audience or specify for others</p>
                        <Form>
                            <div style={{ marginTop: '2%' }}>
                                <RadioButtonWrapper>
                                    <ChechkBox checked={gender.male} onChange={() => setGender({ ...gender, male: !gender.male })} />
                                    Male
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Female
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox checked={gender.other.state} onChange={() => setGender({ ...gender, other: !gender.other.state })} />
                                    Others
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <input style={{ outline: 'transparent', border: 'transparent', width: '100%' }}  placeholder='Specify for others' />
                                </RadioButtonWrapper>
                            </div>
                        </Form>
                    </div>

                    <div style={{ marginTop: '3%' }}>
                        <KBTextXl fontWeight={500}>Religion</KBTextXl>
                        <p>Select one or more of the most predominant of your audience or specify for “others”</p>
                        <Form>
                            <div style={{ marginTop: '2%' }}>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Christianity
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Islam
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Others
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <input style={{ outline: 'transparent', border: 'transparent', width: '100%' }} placeholder='Specify for others' />
                                </RadioButtonWrapper>
                            </div>
                        </Form>
                    </div>

                    <div style={{ marginTop: '3%' }}>
                        <KBTextXl fontWeight={500}>Marital Status</KBTextXl>
                        <p>Select one or more of the most predominant of your audience or specify for “others”</p>
                        <Form>
                            <div style={{ marginTop: '2%' }}>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Single
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Married
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Divorced
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Widowed
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Others
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <input style={{ outline: 'transparent', border: 'transparent', width: '100%' }} placeholder='Specify for others' />
                                </RadioButtonWrapper>
                            </div>
                        </Form>
                    </div>

                    <div style={{ marginTop: '3%' }}>
                        <KBTextXl fontWeight={500}>Employment status</KBTextXl>
                        <p>Select one or more of the most predominant of your audience or specify for “others”</p>
                        <Form>
                            <div style={{ marginTop: '2%' }}>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Employed
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Self Employed
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Unemployed
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Retired
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Disable
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Others
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <input style={{ outline: 'transparent', border: 'transparent', width: '100%' }} placeholder='Specify for others' />
                                </RadioButtonWrapper>
                            </div>
                        </Form>
                    </div>

                    <div style={{ marginTop: '3%' }}>
                        <KBTextXl fontWeight={500}>Educational level</KBTextXl>
                        <p>Select one or more of the most predominant of your audience or specify for “others”</p>
                        <Form>
                            <div style={{ marginTop: '2%' }}>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    High School
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    College/Polytechnic
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Bachelor’s
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Master’s
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <ChechkBox />
                                    Others
                                </RadioButtonWrapper>
                                <RadioButtonWrapper>
                                    <input style={{ outline: 'transparent', border: 'transparent', width: '100%' }} placeholder='Specify for others' />
                                </RadioButtonWrapper>
                            </div>
                        </Form>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Test