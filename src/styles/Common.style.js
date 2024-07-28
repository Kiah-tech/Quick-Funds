import styled from 'styled-components';

export const Button = styled.button`
    padding: 1rem 2rem;
    border-radius: 3rem;
    background: linear-gradient(
        45deg,
        var(--LimeGreen) 0%,
        var(--BrightCyan) 100%
    );
    border: none;
    outline: none;
    color: var(--White);
    cursor: pointer;
    transition: background 0.3s, transform 0.1s;

    &:hover {
        background: linear-gradient(
            45deg,
            var(--BrightCyan) 0%,
            var(--LimeGreen) 100%
        );
    }

    &:active {
        background: linear-gradient(
            45deg,
            var(--BrightCyan) 0%,
            var(--LimeGreen) 100%
        );
        transform: scale(0.95);
    }
`;

export const Container = styled.div`
    padding: 0 10rem;
    @media (max-width: 991px) {
        padding: 0 6rem;
    }
    @media (max-width: 480px) {
        padding: 0 2rem;
    }
`;

export const NoRightPaddingContainer = styled.div`
    padding: 0 0 0 10rem;
    @media (max-width: 991px) {
        padding: 0 0 0 4rem;
    }
    @media (max-width: 600px) {
        padding: 0;
    }
`;

