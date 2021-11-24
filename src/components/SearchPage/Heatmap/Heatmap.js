import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../../common/Loader';
import RenderedHeatmap from './RenderedHeatmap';

const Heatmap = ({ topPosts, isLoading, days, onHourSelect, postsPerHour }) => {
    //Here we define the header time seperately for formatting purposes
    const headerTime = [
        '12:00 am',
        '2:00 am',
        '4:00 am',
        '6:00 am',
        '8:00 am',
        '10:00 am',
        '12:00 pm',
        '2:00 pm',
        '4:00 pm',
        '6:00 pm',
        '8:00 pm',
        '10:00 pm',
    ];

    //A new hours array is created here in order to match with the hours coming from the api
    let hours = [];

    function getHoursArray() {
        for (let i = 0; i <= 23; i++) {
            let zero = i < 10 ? '0' : '';
            hours.push(zero + i);
        }
    }

    getHoursArray();

    //creating a function to use during the table rendering in order to filter out posts based on the day and time

    const getNumOfPostsPerHour = (day, time) => {
        let numOfPosts = topPosts.filter(post => {
            return post.day === day && post.time === time;
        });

        return numOfPosts.length;
    };

    return (
        <section>
            {isLoading ? (
                <Loader />
            ) : (
                <RenderedHeatmap
                    topPosts={topPosts}
                    days={days}
                    getNumOfPostsPerHour={getNumOfPostsPerHour}
                    headerTime={headerTime}
                    hours={hours}
                    onHourSelect={onHourSelect}
                    postsPerHour={postsPerHour}
                />
            )}
        </section>
    );
};

Heatmap.propTypes = {
    topPosts: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    days: PropTypes.array.isRequired,
    onHourSelect: PropTypes.func.isRequired,
    postsPerHour: PropTypes.array.isRequired,
};

export default Heatmap;
