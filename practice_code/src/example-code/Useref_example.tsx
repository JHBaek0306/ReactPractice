import { render } from "@testing-library/react";
import React, { useEffect, useRef, useState } from "react";

// const Useref_example = () => {
//     const [count, setCount] = useState(0);
//     const countRef = useRef(0);

//     const increaseCountState = () => {
//         setCount(count + 1);
//     }

//     const increaseCountRef = () => {
//         countRef.current = countRef.current + 1;
//         console.log('Ref: ', countRef.current);
//     }

//     return (
//         <div>
//             <p>State: {count}</p>
//             <p>Ref: {countRef.current}</p>
//             <button onClick={increaseCountState}>State Up</button>
//             <button onClick={increaseCountRef}>Ref Up</button>
//         </div>
//     )
// }
// --------------------------------------------------------------------------------
// const Useref_example = () => {
//     const countRef = useRef(0);
//     const [renderer, setRenderer] = useState(0);
//     let countVar = 0;

//     const doRender = () => {
//         setRenderer(renderer + 1);
//     }

//     const increaseRef = () => {
//         countRef.current = countRef.current + 1;
//         console.log('ref: ', countRef.current);
//     }

//     const increaseVar = () => {
//         countVar = countVar + 1;
//         console.log('var: ', countVar);
//     }

//     const printResult = () => {
//         console.log(`ref: ${countRef.current}, var: ${countVar}`);
//     }
//     return (
//         <div>
//             <p>Ref: {countRef.current}</p>
//             <p>Var: {countVar}</p>
//             <button onClick={doRender}>Render</button>
//             <button onClick={increaseRef}>Ref Up</button>
//             <button onClick={increaseVar}>Var Up</button>
//             <button onClick={printResult}>Ref Var Print</button>
//         </div>
//     )
// }
// --------------------------------------------------------------------------------
// const Useref_example = () => {
//     const [count, setCount] = useState(1);
//     // const [renderCount, setRenderCount] = useState(1);
//     const renderCount = useRef(1);

//     useEffect(() => {
//         // console.log('Rendering');
//         // setRenderCount(renderCount + 1);
//         renderCount.current = renderCount.current + 1;
//         console.log('render Count:', renderCount);
//     })

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Up</button>
//         </div>
//     )
// }
// --------------------------------------------------------------------------------
const Useref_example = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // console.log(inputRef);
        if (inputRef.current !== null) {
            inputRef.current.disabled = false;
            inputRef.current.focus();
        }
    }, []);

    const login = () => {
        if (inputRef.current !== null) alert(`Welcome ${inputRef.current.value}`);
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="username" />
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Useref_example;
