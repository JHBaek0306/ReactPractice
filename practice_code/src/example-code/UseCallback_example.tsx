import React, { useCallback, useEffect, useState } from "react";
import Box from "./Box";

const UseCallback_example = () => {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);

    const someFunction = useCallback(() => {
        console.log(`someFunc: number: ${number}`);
        return;
    }, []);

    useEffect(() => {
        console.log(`someFunction is changed`);
    }, [someFunction]);

    return (
        <div>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
            <br />
            <button onClick={someFunction}>Call SomeFunc</button>
        </div>
    )
}

// const UseCallback_example = () => {
//     const [size, setSizes] = useState(100);
//     const [isDark, setIsDark] = useState(false);

//     const createBoxStyle = useCallback(() => {
//         return {
//             backgroundColor: 'pink',
//             width: `${size}px`,
//             height: `${size}px`,
//         }
//     }, [size]);

//     return (
//         <div style={{ background: isDark ? 'black' : 'white' }}>
//             <input type="number" value={size} onChange={(e) => setSizes(Number(e.target.value))} />
//             <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
//             <Box createBoxStyle={createBoxStyle} />
//         </div>
//     )
// }

export default UseCallback_example;