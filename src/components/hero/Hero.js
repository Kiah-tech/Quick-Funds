import React from 'react';
import { Button, NoRightPaddingContainer } from '../../styles/Common.style';
import { H1, Para } from '../../styles/Typography.style';
import {
	HeroWrapper,
	HeroContent,
	HeroImage,
	HeroContentWrapper,
} from './Hero.style';
import HeroImg from '../../images/image-mockups.png';

const Hero = () => {
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
							<Button>Login</Button>
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
