import React from 'react';
import PostsSection from '../PostTable/PostsSection';

import TimeZone from '../Timezone/TimeZone';
import {
    HeatmapTable,
    TimeHeader,
    TCells,
    DaysHeader,
    Td,
} from './Heatmap.style';

const RenderedHeatmap = ({
    days,
    getNumOfPostsPerHour,
    headerTime,
    hours,
    onHourSelect,
}) => {
    return (
        <>
            <HeatmapTable>
                <thead>
                    <tr key="timerow">
                        <th></th>
                        {headerTime.map(time => {
                            return (
                                <TimeHeader colSpan={2} key={time + 'header'}>
                                    {time}
                                </TimeHeader>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {days.map(day => {
                        return (
                            <tr key={day + 'row'}>
                                <DaysHeader key={day + 'header'}>
                                    {day}
                                </DaysHeader>
                                {hours.map(hour => {
                                    return (
                                        <Td>
                                            <TCells
                                                key={'posts-at' + hour}
                                                onClick={() =>
                                                    onHourSelect(day, hour)
                                                }
                                                numOfPosts={getNumOfPostsPerHour(
                                                    day,
                                                    hour
                                                )}
                                            >
                                                {getNumOfPostsPerHour(
                                                    day,
                                                    hour
                                                )}
                                            </TCells>
                                        </Td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </HeatmapTable>
            <TimeZone />
        </>
    );
};

export default RenderedHeatmap;
