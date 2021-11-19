import React from 'react';
import TimeZone from './TimeZone';
import {
    Table,
    Tbody,
    TimeHeader,
    Th,
    Tr,
    TCells,
    DaysHeader,
    Thead,
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
            <Table>
                <Thead>
                    <Tr>
                        <th></th>
                        {headerTime.map(time => {
                            return (
                                <TimeHeader colSpan={2} key={time + 'header'}>
                                    {time}
                                </TimeHeader>
                            );
                        })}
                    </Tr>
                </Thead>
                <Tbody>
                    {days.map(day => {
                        return (
                            <Tr key={day + 'row'}>
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
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
            <TimeZone />
        </>
    );
};

export default RenderedHeatmap;
