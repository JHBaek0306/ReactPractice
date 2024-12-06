import React, { useMemo, useState } from "react";

const hardCalculate = (number: number) => {
    for (let i = 0; i < 999999999; i++) { }
    return number + 10000;
}

const easyCalculate = (number: number) => {
    return number + 10000;
}

const UseMemo_exaplme = () => {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    // const hardSum = hardCalculate(hardNumber);
    const hardSum = useMemo(() => {
        return hardCalculate(hardNumber)
    }, [hardNumber])
    const easySum = easyCalculate(easyNumber);

    return (
        <div>
            <h1>Hard Calculate</h1>
            <input type="number" value={hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))} />
            <span> + 10000 = {hardSum}</span>

            <h1>Easy Calculate</h1>
            <input type="number" value={easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))} />
            <span> + 10000 = {easySum}</span>
        </div>
    )
}
// --------------------------------------------------

// const UseMemo_exaplme = () => {

//     const [number, setNumber] = useState(0);
//     const [isKorea, setIsKorea] = useState(true);

//     const location = useMemo(() => {
//         return {
//             country: isKorea ? 'Korea' : 'Foreign',
//         }
//     }, [isKorea])
//     return (
//         <div>
//             <h2>Count</h2>
//             <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
//             <hr />
//             <h2>Which Country</h2>
//             <p>Country: {location.country}</p>
//             <button onClick={() => setIsKorea(!isKorea)}>Go other country</button>
//         </div>
//     )
// }

export default UseMemo_exaplme;