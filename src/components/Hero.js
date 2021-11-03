import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button } from '../styling/sharedstyles';
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
    background-position: center;
    height: 332px;
    min-width: 1114px;
`;

const H1 = styled.h1`
    font-family: ${props => props.theme.font.family.headline};
    color: ${props => props.theme.color.secondary};
    font-weight: 400;
    font-size: 2rem;
    line-height: 45.6px;
    margin: 10px 0;
`;

const H3 = styled.h3`
    font-family: ${props => props.theme.font.family.default};
    color: ${props => props.theme.color.primary};
    font-weight: 400;
    line-height: 19.5px
    font-size: 1rem;
    margin: 10px 0;
`;

const P = styled.p`
    margin-bottom: 27px;
`;

const Hero = () => {
    return (
        <Section>
            <TitleSection>
                <H1>No reactions to your reddit posts?</H1>
                <H3>
                    Great timing, great results! Find the best time to post on
                    your subreddit
                </H3>
            </TitleSection>
            <Button to="/search">Show me the best time</Button>
            <P>r/javascript</P>
            <Link to="/search">
                <HeroImage />
            </Link>
        </Section>
    );
};

export default Hero;
