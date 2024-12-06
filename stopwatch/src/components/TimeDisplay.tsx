import React from 'react';

interface TimeDisplayProps {
    time: number;
}

const TimeDisplay = ({ time }: TimeDisplayProps) => {
    return (
        <div>{ time }</div>
    );
};

export default TimeDisplay;