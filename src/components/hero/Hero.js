import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, NoRightPaddingContainer } from '../../styles/Common.style';
import { H1, Para } from '../../styles/Typography.style';
import {
    HeroWrapper,
    HeroContent,
    HeroImage,
    HeroContentWrapper,
    ButtonWrapper
} from './Hero.style';
import HeroImg from '../../images/image-mockups.png';

const Hero = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    return (
        <div>
            <NoRightPaddingContainer>
                <HeroWrapper>
                    <HeroContent>
                        <HeroContentWrapper>
                            <H1> Quick Funds, Next Generation Digital Banking </H1>
                            <Para>
                                Take your financial life online. Your Easybank
                                account will be a one-stop-shop for spending,
                                saving, budgeting, investing, and much more.
                            </Para>
                            <ButtonWrapper>
                                <Button onClick={handleLoginClick}>Login</Button>
                                <Button onClick={handleSignUpClick}>Sign Up</Button>
                            </ButtonWrapper>
                        </HeroContentWrapper>
                    </HeroContent>
                    <HeroImage>
                        {/* <img src={HeroImg} alt='hero' /> */}
                        {/* Replace img here */}
                    </HeroImage>
                </HeroWrapper>
            </NoRightPaddingContainer>
        </div>
    );
};

export default Hero;
