import React, { useRef, useState } from "react";
import { useThrottle } from "./Throttle_custom";

function hackLottoNumbers() {
    const lottoNumbers = [];
    for (let i = 0; i < 6; i++) {
        const number = Math.floor(Math.random() * 45) + 1;
        lottoNumbers.push(number);
    }
    return lottoNumbers;
}

const Throttle_example = () => {
    const [lottoNumbers, setLottoNumbers] = useState([0, 0, 0, 0, 0, 0]);
    const lastRun = useRef(Date.now());

    // const handleClick = () => {
    //     const result = hackLottoNumbers();
    //     setLottoNumbers(result);
    // }

    // const handleClick = () => {
    //     const timeElapsed = Date.now() - lastRun.current;

    //     if (timeElapsed >= 1000) {
    //         const result = hackLottoNumbers();
    //         setLottoNumbers(result);
    //         lastRun.current = Date.now();
    //     }
    // };

    const handleClick = useThrottle(() => {
        const reuslt = hackLottoNumbers();
        setLottoNumbers(reuslt);
    }, 1000);

    return (
        <div>
            <h1>로또번호 맞추기</h1>
            <button className="button" onClick={handleClick}>번호 맞추기</button>
            <div>
                {lottoNumbers.map((number, idx) => (
                    <span key={idx} className="number" style={{ paddingRight: "5px", }}>
                        {number}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Throttle_example;