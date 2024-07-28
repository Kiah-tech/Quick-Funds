import React, { useState } from 'react';
import { Navigation, Nav, Ul, Li, Logo, ButtonContainer } from './Header.style';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../styles/Common.style';
import hamburger from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg';

const Header = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<div>
			<Container>
				<Navigation>
					<Nav>
						<Logo>
							{/* <img src={logo} alt='logo' /> */}
							<h1>Quick Funds</h1>
						</Logo>
						<Ul className={open ? `active` : `navlinks`}>
							<Li>
								<Link to='/'>Home</Link>
							</Li>
							<Li>
								<Link to='/about'>About</Link>
							</Li>
							<Li>
								<Link to='/contact'>Contact</Link>
							</Li>
						</Ul>
						<ButtonContainer>
							<Link to='/login'>
								<Button>Login</Button>
							</Link>
							<Link to='/signup'>
								<Button>Sign Up</Button>
							</Link>
						</ButtonContainer>
						<img
							src={open ? close : hamburger}
							className='hamburger'
							alt=''
							onClick={handleClick}
						/>
					</Nav>
				</Navigation>
			</Container>
		</div>
	);
};

export default Header;










   
