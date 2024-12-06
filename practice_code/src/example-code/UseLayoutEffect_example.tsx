import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function getNumbers() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
}

const UseLayoutEffect_example = () => {
    const [number, setNumber] = useState<number[]>([]);
    const ref = useRef<any>(null);

    useEffect(() => {
        const nums = getNumbers();
        setNumber(nums);
    }, [])

    useLayoutEffect(() => {
        if (number.length === 0) {
            return;
        }

        for (let i = 0; i < 999999999; i++) { };
        if (ref.current !== null)
            ref.current.scrollTop = ref.current.scrollHeight;
    }, [number]);

    return (
        <div>
            <button onClick={() => setNumber([])}>Reset</button>
            <div ref={ref}
                style={{
                    height: "300px",
                    border: "1px solid blue",
                    overflow: "scroll"
                }}>
                {number.map((number, idx) => (
                    <p key={idx}>{number}</p>
                ))}
            </div>
        </div>
    )
}

export default UseLayoutEffect_example;