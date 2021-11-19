import React from 'react';
import CurrentTimezone from './TimeZone.style';

const TimeZone = () => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return (
        <CurrentTimezone>
            <div>
                All times are shown in your timezone:{' '}
                <span style={{ fontWeight: 'bold' }}>{timezone}</span>{' '}
            </div>
        </CurrentTimezone>
    );
};

export default TimeZone;
