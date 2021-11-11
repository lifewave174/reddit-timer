import React from 'react';
import { Table, Tbody, Thead, Th, Tr, Td } from './TableStyle';

const RenderedTable = ({ topPosts, days }) => {
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
    // const postObject = topPosts.reduce((r, a) => {
    //     r[a.day] = r[a.day] || [];
    //     r[a.day][a.time] = r[a.day][a.time] || [];
    //     r[a.day][a.time].push(a);
    //     return r;
    // }, Object.create(null));

    // console.log(postObject);

    let hours = [];

    function hourArray() {
        for (let i = 0; i <= 23; i++) {
            let zero = i < 10 ? '0' : '';
            hours.push(zero + i);
        }
    }

    hourArray();

    const getNumOfPostsPerHour = (day, time) => {
        let result = topPosts.filter(post => {
            return post.day === day && post.time === time;
        });

        return result.length;
    };

    return (
        <div>
            <Table>
                <Thead>
                    <Tr>
                        <Th></Th>
                        {time.map(time => {
                            return (
                                <Th colSpan={2} scope="colgroup" key={time}>
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
                                <Th>{day}</Th>
                                {hours.map(hour => {
                                    return (
                                        <Td key={hour}>
                                            {getNumOfPostsPerHour(day, hour)}
                                        </Td>
                                    );
                                })}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </div>
    );
};

export default RenderedTable;
