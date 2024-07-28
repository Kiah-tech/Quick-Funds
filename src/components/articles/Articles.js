import React from 'react';
import {
	ArticleWrapper,
	ArticleGrid,
	ArticleCard,
	ArticleCardContent,
} from './Articles.style';
import { Container } from '../../styles/Common.style';
import MoneyImg from '../../images/image-currency.jpg';
import { H2, H4, H5, Para } from '../../styles/Typography.style';
import money from '../../images/money.jpg';
import newmo from '../../images/newmo.jpg'

const Articles = () => {
	return (
		<div>
			<Container>
				<ArticleWrapper>
					<H2>Why Quick Funds</H2>
					<ArticleGrid>
						<ArticleCard>
							<img src={money} alt='' />
							<ArticleCardContent>
								<H5></H5>
								<H4>
									Track your investment's progress
								</H4>
								<Para>
									Everything you need to control your Lendbox investments is available in a single app
								</Para>
							</ArticleCardContent>
						</ArticleCard>
						<ArticleCard>
							<img src={newmo} alt='' />
							<ArticleCardContent>
								<H5></H5>
								<H4>
									High quilty, consistent returns
								</H4>
								<Para>
									A diverse selection of financial products tailored to your preferences.
									Make informed choices and maintain full control over your portfolio.
								</Para>
							</ArticleCardContent>
						</ArticleCard>
					</ArticleGrid>
				</ArticleWrapper>
			</Container>
		</div>
	);
};

export default Articles;









{/* import React from 'react';
import {
	ArticleWrapper,
	ArticleGrid,
	ArticleCard,
	ArticleCardContent,
} from './Articles.style';
import { Container } from '../../styles/Common.style';
import MoneyImg from '../../images/image-currency.jpg';
import { H2, H4, H5, Para } from '../../styles/Typography.style';
const Articles = () => {
	return (
		<div>
			<Container>
				<ArticleWrapper>
					<H2>Why Quick Funds</H2>
					<ArticleGrid>
						<ArticleCard>
							<img src={MoneyImg} alt='' />
							<ArticleCardContent>
								<H5>Vishnu Megharaj</H5>
								<H4>
									Track your investment's progress
								</H4>
								<Para>
									Everything you need to control your Lendbox investments is available in a single app
								</Para>
							</ArticleCardContent>
						</ArticleCard>
						<ArticleCard>
							<img src={MoneyImg} alt='' />
							<ArticleCardContent>
								<H5>Author Name</H5>
								<H4>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
									in!
								</H4>
								<Para>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Quibusdam ut tempora laborum, facere non est harum quasi
									nostrum temporibus. Quae?
								</Para>
							</ArticleCardContent>
						</ArticleCard>
						
					</ArticleGrid>{' '}
				</ArticleWrapper>
			</Container>
		</div>
	);
};

export default Articles; */}
