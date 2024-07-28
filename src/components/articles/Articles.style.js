import styled from 'styled-components';

export const ArticleWrapper = styled.div`
	padding: 10rem 0 6rem 0;
	h2 {
		padding: 1rem 0 2rem 0;
	}
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const ArticleGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
	width: 100%;
	max-width: 1200px;
	justify-content: center;
`;

export const ArticleCard = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	h4 {
		padding: 1rem 0;
	}
	border-radius: 1rem;
	overflow: hidden;

	img {
		width: 500%; /* Adjust width as needed */
		max-width: 500px; /* Adjust max-width as needed */
		height: auto; /* Maintain aspect ratio */
	}
`;

export const ArticleCardContent = styled.div`
	padding: 1rem 3rem;
`;









