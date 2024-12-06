import React, { useEffect } from "react";

const UseEffect_example = (props: any) => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('Timer is running');
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log('Timer off');
        };
    }, []);

    return (
        <div>
            <span>Start timer, look up console</span>
        </div>
    )
};

export default UseEffect_example;