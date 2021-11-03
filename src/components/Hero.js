import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import { defaultSubreddit } from '../constants';
import { Button, Section } from '../styling/sharedstyles';


const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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


const HeroImage = styled.img`
    max-width: 100%;
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
            <Button to={`/search/${defaultSubreddit}`}>
                Show me the best time
            </Button>
            <P>{defaultSubreddit}</P>
            <Link to={`/search/${defaultSubreddit}`}>
                <HeroImage
                    src="/images/hero-2x.png"
                    srcSet="/images/hero-1x.png, /images/hero-2x.png, /images/hero-3x.png"
                ></HeroImage>

            </Link>
        </Section>
    );
};

export default Hero;
