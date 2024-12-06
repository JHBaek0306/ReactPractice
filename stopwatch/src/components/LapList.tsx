import React from 'react';

interface LapListProps {
    laps: number[];
}

const LapList = ({ laps }: LapListProps) => {
    return (
        <div className='laplist'>
            <div className="laptimes">Lap Times</div>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>
                        Lap {index + 1}: {lap}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LapList;