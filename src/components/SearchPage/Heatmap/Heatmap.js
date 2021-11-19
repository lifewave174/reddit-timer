import React, { useState } from 'react';
import Loader from '../../common/Loader';
import RenderedHeatmap from './RenderedHeatmap';
import PostTable from '../PostTable/PostTable';

const Heatmap = ({ topPosts, isLoading, days }) => {
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

    let hours = [];

    function getHoursArray() {
        for (let i = 0; i <= 23; i++) {
            let zero = i < 10 ? '0' : '';
            hours.push(zero + i);
        }
    }

    getHoursArray();

    const getNumOfPostsPerHour = (day, time) => {
        let numOfPosts = topPosts.filter(post => {
            return post.day === day && post.time === time;
        });

        return numOfPosts.length;
    };

    const [postsPerHour, setPostsPerHour] = useState([]);

    const onHourSelect = (day, time) => {
        let _postsPerHour = topPosts.filter(post => {
            return post.day === day && post.time === time;
        });
        setPostsPerHour(_postsPerHour);
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
                />
            )}
            <PostTable postsPerHour={postsPerHour} />
        </section>
    );
};

export default Heatmap;
