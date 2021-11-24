import React from 'react';
import PropTypes from 'prop-types';

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
                                        <Td key={hour + 'cell'}>
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

RenderedHeatmap.propTypes = {
    days: PropTypes.array.isRequired,
    getNumOfPostsPerHour: PropTypes.func.isRequired,
    headerTime: PropTypes.array.isRequired,
    hours: PropTypes.array.isRequired,
    onHourSelect: PropTypes.func.isRequired,
};

export default RenderedHeatmap;
