import React from 'react';
import Loader from '../common/Loader';
import styled from 'styled-components';

const Heatmap = ({ topPosts, isLoading, days }) => {
    const Table = styled.table`
        max-width: 100%;
    `;

    const Tbody = styled.tbody``;

    const Thead = styled.thead``;

    const Th = styled.th``;

    const Tr = styled.tr``;

    const Td = styled.td``;

    const table = () => {
        const time = [
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
        const timedPosts = topPosts.reduce((r, a) => {
            r[a.day] = r[a.day] || [];
            r[a.day][a.time] = r[a.day][a.time] || [];
            r[a.day][a.time].push(a);
            return r;
        }, Object.create(null));

        console.log(timedPosts);

        return (
            <Table>
                <Thead>
                    <Tr>
                        {time.map(time => {
                            return (
                                <Th colspan="2" key={time}>
                                    {time}
                                </Th>
                            );
                        })}
                    </Tr>
                </Thead>
                <Tbody>
                    {days.map(day => {
                        return (
                            <Tr>
                                <Td>{day}</Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        );
    };

    return <div>{isLoading ? <Loader /> : table()} </div>;
};

export default Heatmap;
