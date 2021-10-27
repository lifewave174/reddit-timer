import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/table.png';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeroImage = styled.div`
    background-image: url(${heroImage});
    height: 332px;
    width: 1114px;
`;

const H1 = styled.h1`
    font-family: ${props => props.theme.font.family.headline};
    color: #000000;
    font-weight: 400;
    font-size: 38px;
`;

const Hero = () => {
    return (
        <Section>
            <TitleSection>
                <H1>No reactions to your reddit posts?</H1>
                <h3>
                    Great timing, great results! Find the best time to post on
                    your subreddit
                </h3>
            </TitleSection>
            <button>Show me the best time</button>
            <p>r/javascript</p>
            <HeroImage />
        </Section>
    );
};

export default Hero;
