import React from 'react';
import styled from 'styled-components';
import { Section } from '../styling/sharedstyles';

const Infos = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    > * {
        width: 40%;
        min-width: 330px;
    }
`;

const H2 = styled.h2`
    font-family: ${props => props.theme.font.family.headline};
    color: #000000;
    font-weight: 400;
`;

const Info = () => {
    return (
        <Section>
            <Infos>
                <H2>How it works</H2>
                <ul>
                    <li>
                        We find 500 top posts from the past year for a subreddit
                    </li>
                    <li>
                        The data is visualized in a heatmap grouped by weekday
                        and hour of the day
                    </li>
                    <li>See immediately when to submit your reddit post</li>
                </ul>
            </Infos>
            <Infos>
                <H2>About</H2>
                <p>
                    The app was created during a course on profy.dev with the
                    goal to implement a pixel-perfect real-world application
                    with professional workflows and tolls like Kanban, ClickUp,
                    Figma, GitHub, pull requests and code reviews. Click here
                    for more information.
                </p>
            </Infos>
        </Section>
    );
};

export default Info;
