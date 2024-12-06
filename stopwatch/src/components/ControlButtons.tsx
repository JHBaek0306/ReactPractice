import React from 'react';

interface ControlButtonsProps {
    isRunning: boolean;
    onStartStop: () => void;
    onReset: () => void;
    onLap: () => void;
}

const ControlButtons = ({ isRunning, onStartStop, onReset, onLap }: ControlButtonsProps) => {
    return (
        <div>
            <button className='start-stop-btn' onClick={onStartStop}>{!isRunning ? 'Start' : 'Stop'}</button>
            <button className='reset-btn' onClick={onReset}>Reset</button>
            {isRunning && <button className='lap-btn' onClick={onLap}>Lap</button>}
        </div>
    );
};

export default ControlButtons;
